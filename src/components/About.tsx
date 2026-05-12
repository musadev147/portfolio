"use client";
import { User, MapPin, Calendar, Coffee, GraduationCap } from "lucide-react";

const stats = [
  { value: "3+", label: "Years Experience" },
  { value: "30+", label: "Projects Done" },
  { value: "15+", label: "Happy Clients" },
  { value: "∞", label: "Cups of Coffee" },
];

export default function About() {
  return (
    <section id="about" className="section-padding" style={{ position: "relative", zIndex: 1 }}>
      <div className="container-max">
        {/* Section heading */}
        <div className="fade-up" style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <span style={{ color: "#7C3AED", fontWeight: 600, fontSize: "0.85rem", letterSpacing: "0.15em", textTransform: "uppercase" }}>
            WHO I AM
          </span>
          <h2 style={{ fontSize: "clamp(1.8rem,4vw,2.8rem)", fontWeight: 800, marginTop: "0.5rem" }}>
            About <span className="gradient-text">Me</span>
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "2.5rem", alignItems: "center" }}>
          {/* Left card */}
          <div className="fade-up glass-card" style={{ padding: "2rem", transition: "transform 0.3s" }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-5px)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem" }}>
              <div style={{ width: 48, height: 48, borderRadius: "12px", background: "linear-gradient(135deg,#7C3AED,#06B6D4)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <User size={22} color="#fff" />
              </div>
              <div>
                <p style={{ fontWeight: 700, fontSize: "1.05rem" }}>Md Musa Alom Mim</p>
                <p style={{ color: "#7C3AED", fontSize: "0.85rem" }}>Python & Flutter Developer</p>
              </div>
            </div>

            <p style={{ color: "rgba(255,255,255,0.65)", lineHeight: 1.9, marginBottom: "1.2rem" }}>
              I&apos;m a passionate **Python & Flutter Developer** and **Computer Science student** at Kurigram Polytechnic Institute. 
              I specialize in building high-performance, cross-platform mobile applications and robust backend systems with a focus on seamless UI/UX and efficient logic.
            </p>
            <p style={{ color: "rgba(255,255,255,0.65)", lineHeight: 1.9 }}>
              With experience in Firebase, REST APIs, and modern state management techniques, I enjoy turning complex ideas into functional and visually stunning apps.
            </p>

            <div style={{ marginTop: "1.5rem", display: "flex", flexDirection: "column", gap: "0.7rem" }}>
              {[
                { icon: <MapPin size={15} />, text: "Gaibandha, Rangpur, Bangladesh" },
                { icon: <GraduationCap size={15} />, text: "Diploma in Computer Science (2021-2026)" },
                { icon: <Calendar size={15} />, text: "Available for freelance & collaborations" },
                { icon: <Coffee size={15} />, text: "Coffee-powered coder ☕" },
              ].map((item) => (
                <div key={item.text} style={{ display: "flex", alignItems: "center", gap: "0.6rem", color: "rgba(255,255,255,0.55)", fontSize: "0.9rem" }}>
                  <span style={{ color: "#06B6D4" }}>{item.icon}</span>
                  {item.text}
                </div>
              ))}
            </div>
          </div>

          {/* Right stats grid */}
          <div className="fade-up stagger-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
            {stats.map((s) => (
              <div
                key={s.label}
                className="glass-card"
                style={{ padding: "1.5rem", textAlign: "center", transition: "transform 0.3s" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}
              >
                <div className="stat-number">{s.value}</div>
                <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.82rem", marginTop: "0.3rem" }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
