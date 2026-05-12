"use client";
import { useState } from "react";
import { Mail, User, MessageSquare, Send, CheckCircle } from "lucide-react";

type Field = { name: string; email: string; subject: string; message: string };
type Errors = Partial<Field>;

function validate(f: Field): Errors {
  const e: Errors = {};
  if (!f.name.trim()) e.name = "Name is required";
  if (!f.email.trim()) e.email = "Email is required";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email)) e.email = "Invalid email address";
  if (!f.subject.trim()) e.subject = "Subject is required";
  if (!f.message.trim()) e.message = "Message is required";
  else if (f.message.trim().length < 20) e.message = "Message must be at least 20 characters";
  return e;
}

export default function Contact() {
  const [form, setForm] = useState<Field>({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
    setErrors((er) => ({ ...er, [e.target.name]: "" }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate(form);
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setSending(true);
    await new Promise((r) => setTimeout(r, 1500)); // simulate send
    setSending(false);
    setSent(true);
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  const contactInfo = [
    { icon: <Mail size={18} />, label: "Email", value: "musaalommim@gmail.com" },
    { icon: <User size={18} />, label: "Location", value: "Dhaka, Bangladesh" },
    { icon: <MessageSquare size={18} />, label: "Response time", value: "Within 24 hours" },
  ];

  return (
    <section id="contact" className="section-padding" style={{ position: "relative", zIndex: 1 }}>
      <div className="container-max">
        {/* Heading */}
        <div className="fade-up" style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <span style={{ color: "#06B6D4", fontWeight: 600, fontSize: "0.85rem", letterSpacing: "0.15em", textTransform: "uppercase" }}>
            GET IN TOUCH
          </span>
          <h2 style={{ fontSize: "clamp(1.8rem,4vw,2.8rem)", fontWeight: 800, marginTop: "0.5rem" }}>
            Contact <span className="gradient-text">Me</span>
          </h2>
          <p style={{ color: "rgba(255,255,255,0.5)", marginTop: "0.75rem", maxWidth: 480, margin: "0.75rem auto 0" }}>
            Have a project in mind? I&apos;d love to hear from you. Send me a message and I&apos;ll respond as soon as possible.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "2.5rem" }}>
          {/* Info column */}
          <div className="fade-up" style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
            {contactInfo.map((c) => (
              <div key={c.label} className="glass-card" style={{ padding: "1.3rem 1.5rem", display: "flex", alignItems: "center", gap: "1rem", transition: "transform 0.3s" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateX(6px)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "translateX(0)"; }}
              >
                <div style={{ width: 42, height: 42, borderRadius: "10px", background: "linear-gradient(135deg,#7C3AED22,#06B6D422)", border: "1px solid rgba(124,58,237,0.3)", display: "flex", alignItems: "center", justifyContent: "center", color: "#7C3AED", flexShrink: 0 }}>
                  {c.icon}
                </div>
                <div>
                  <p style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.4)", marginBottom: "0.2rem", textTransform: "uppercase", letterSpacing: "0.08em" }}>{c.label}</p>
                  <p style={{ fontSize: "0.9rem", fontWeight: 600 }}>{c.value}</p>
                </div>
              </div>
            ))}

            {/* CTA note */}
            <div className="glass-card" style={{ padding: "1.5rem", background: "linear-gradient(135deg,rgba(124,58,237,0.12),rgba(6,182,212,0.08))" }}>
              <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.9rem", lineHeight: 1.8 }}>
                Open to <strong style={{ color: "#C4B5FD" }}>freelance opportunities</strong>,{" "}
                <strong style={{ color: "#67E8F9" }}>collaborations</strong>, and{" "}
                <strong style={{ color: "#C4B5FD" }}>full‑time roles</strong>.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="fade-up stagger-2 glass-card" style={{ padding: "2rem" }}>
            {sent ? (
              <div style={{ textAlign: "center", padding: "3rem 0" }}>
                <CheckCircle size={52} color="#22C55E" style={{ margin: "0 auto 1rem", display: "block" }} />
                <h3 style={{ fontWeight: 700, marginBottom: "0.5rem" }}>Message Sent! 🎉</h3>
                <p style={{ color: "rgba(255,255,255,0.55)" }}>Thanks for reaching out. I&apos;ll get back to you soon.</p>
                <button
                  onClick={() => setSent(false)}
                  className="neon-btn"
                  style={{ marginTop: "1.5rem", border: "none" }}
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate style={{ display: "flex", flexDirection: "column", gap: "1.1rem" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                  <div>
                    <input
                      className="form-input"
                      type="text"
                      name="name"
                      id="contact-name"
                      placeholder="Your name"
                      value={form.name}
                      onChange={handleChange}
                    />
                    {errors.name && <p className="form-error">{errors.name}</p>}
                  </div>
                  <div>
                    <input
                      className="form-input"
                      type="email"
                      name="email"
                      id="contact-email"
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={handleChange}
                    />
                    {errors.email && <p className="form-error">{errors.email}</p>}
                  </div>
                </div>
                <div>
                  <input
                    className="form-input"
                    type="text"
                    name="subject"
                    id="contact-subject"
                    placeholder="Subject"
                    value={form.subject}
                    onChange={handleChange}
                  />
                  {errors.subject && <p className="form-error">{errors.subject}</p>}
                </div>
                <div>
                  <textarea
                    className="form-input"
                    name="message"
                    id="contact-message"
                    placeholder="Your message (min 20 characters)"
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    style={{ resize: "vertical" }}
                  />
                  {errors.message && <p className="form-error">{errors.message}</p>}
                </div>
                <button
                  type="submit"
                  className="neon-btn"
                  disabled={sending}
                  style={{ border: "none", display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem", opacity: sending ? 0.7 : 1 }}
                >
                  {sending ? "Sending…" : <><Send size={16} /> Send Message</>}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
