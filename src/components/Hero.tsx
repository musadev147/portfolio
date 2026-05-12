"use client";
import { useEffect, useState } from "react";
import { Code2, Briefcase, MessageCircle, Download, ChevronDown } from "lucide-react";

const roles = ["Python & Flutter Developer", "Python Expert", "UI/UX Enthusiast", "Open Source Contributor"];

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  // Typing effect
  useEffect(() => {
    const full = roles[roleIdx];
    if (typing) {
      if (displayed.length < full.length) {
        const t = setTimeout(() => setDisplayed(full.slice(0, displayed.length + 1)), 70);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setTyping(false), 1800);
        return () => clearTimeout(t);
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
        return () => clearTimeout(t);
      } else {
        setRoleIdx((i) => (i + 1) % roles.length);
        setTyping(true);
      }
    }
  }, [displayed, typing, roleIdx]);

  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "7rem 1.5rem 4rem",
        position: "relative",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: 800, zIndex: 1 }}>
        {/* Avatar */}
        <div className="fade-up" style={{ marginBottom: "2rem", display: "inline-block", position: "relative" }}>
          <div
            style={{
              width: 150, height: 150, borderRadius: "50%", margin: "0 auto",
              background: "linear-gradient(135deg,#7C3AED,#06B6D4)",
              padding: 3,
            }}
          >
            <div
              style={{
                width: "100%", height: "100%", borderRadius: "50%",
                background: "#0F172A",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "3.5rem",
              }}
            >
              👨‍💻
            </div>
          </div>
          {/* Online dot */}
          <div style={{
            position: "absolute", bottom: 8, right: 8,
            width: 18, height: 18, borderRadius: "50%",
            background: "#22C55E",
            border: "3px solid #0F172A",
            boxShadow: "0 0 8px #22C55E",
          }} />
        </div>

        {/* Greeting badge */}
        <div className="fade-up stagger-1" style={{ marginBottom: "1rem" }}>
          <span style={{
            display: "inline-block",
            background: "rgba(124,58,237,0.18)",
            border: "1px solid rgba(124,58,237,0.4)",
            borderRadius: "9999px",
            padding: "0.3rem 1rem",
            fontSize: "0.85rem",
            color: "#C4B5FD",
            letterSpacing: "0.05em",
          }}>
            👋 Welcome to my portfolio
          </span>
        </div>

        {/* Name */}
        <h1 className="fade-up stagger-2" style={{ fontSize: "clamp(2.4rem,6vw,4.5rem)", fontWeight: 800, lineHeight: 1.1, marginBottom: "1rem" }}>
          Hi, I&apos;m{" "}
          <span className="gradient-text">Md Musa Alom Mim</span>
        </h1>

        {/* Typing role */}
        <p className="fade-up stagger-3" style={{ fontSize: "clamp(1.1rem,2.5vw,1.5rem)", color: "rgba(255,255,255,0.7)", marginBottom: "1.5rem", minHeight: "2rem" }}>
          <span className="typing" style={{ color: "#06B6D4", fontWeight: 600 }}>{displayed}</span>
        </p>

        {/* Short bio */}
        <p className="fade-up stagger-4" style={{ fontSize: "1rem", color: "rgba(255,255,255,0.55)", maxWidth: 540, margin: "0 auto 2.5rem", lineHeight: 1.8 }}>
          Passionate developer crafting modern, performant web applications with a focus on elegant design and seamless user experiences.
        </p>

        {/* CTA buttons */}
        <div className="fade-up stagger-5" style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap", marginBottom: "3rem" }}>
          <a href="#projects" className="neon-btn" style={{ textDecoration: "none", position: "relative", zIndex: 1 }}>
            View My Work
          </a>
          <a
            href="#contact"
            style={{
              textDecoration: "none",
              padding: "0.75rem 2rem",
              borderRadius: "9999px",
              border: "1.5px solid rgba(124,58,237,0.5)",
              color: "#C4B5FD",
              fontWeight: 600,
              transition: "all 0.3s",
              background: "transparent",
              display: "inline-block",
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.background = "rgba(124,58,237,0.15)";
              (e.currentTarget as HTMLElement).style.borderColor = "#7C3AED";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.background = "transparent";
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(124,58,237,0.5)";
            }}
          >
            Get In Touch
          </a>
          <a
            href="#"
            download
            style={{
              textDecoration: "none",
              padding: "0.75rem 1.5rem",
              borderRadius: "9999px",
              border: "1.5px solid rgba(6,182,212,0.4)",
              color: "#67E8F9",
              fontWeight: 600,
              display: "flex",
              alignItems: "center",
              gap: "0.4rem",
              transition: "all 0.3s",
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(6,182,212,0.12)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "transparent"; }}
          >
            <Download size={16} /> Resume
          </a>
        </div>

        {/* Social icons */}
        <div className="fade-up" style={{ display: "flex", gap: "1rem", justifyContent: "center", marginBottom: "3rem" }}>
          {[
            { icon: <Code2 size={20} />, href: "https://github.com/musaalommim", label: "GitHub" },
            { icon: <Briefcase size={20} />, href: "https://linkedin.com/in/musaalommim", label: "LinkedIn" },
            { icon: <MessageCircle size={20} />, href: "https://twitter.com/musaalommim", label: "Twitter" },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              title={s.label}
              style={{
                width: 44, height: 44, borderRadius: "50%",
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: "rgba(255,255,255,0.7)",
                textDecoration: "none",
                transition: "all 0.3s",
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "rgba(124,58,237,0.25)";
                el.style.borderColor = "#7C3AED";
                el.style.color = "#fff";
                el.style.boxShadow = "0 0 16px rgba(124,58,237,0.4)";
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "rgba(255,255,255,0.05)";
                el.style.borderColor = "rgba(255,255,255,0.1)";
                el.style.color = "rgba(255,255,255,0.7)";
                el.style.boxShadow = "none";
              }}
            >
              {s.icon}
            </a>
          ))}
        </div>

        {/* Scroll indicator */}
        <a href="#about" style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", gap: "0.4rem", color: "rgba(255,255,255,0.3)", textDecoration: "none", fontSize: "0.78rem", letterSpacing: "0.08em" }}>
          SCROLL
          <ChevronDown size={18} style={{ animation: "float 1.5s ease-in-out infinite" }} />
        </a>
      </div>
    </section>
  );
}
