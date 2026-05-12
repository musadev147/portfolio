"use client";
import { Code2, Briefcase, MessageCircle, Mail, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Code2 size={20} />, href: "https://github.com/musaalommim", label: "GitHub" },
    { icon: <Briefcase size={20} />, href: "https://linkedin.com/in/musaalommim", label: "LinkedIn" },
    { icon: <MessageCircle size={20} />, href: "https://twitter.com/musaalommim", label: "Twitter" },
    { icon: <Mail size={20} />, href: "mailto:musaalommim@gmail.com", label: "Email" },
  ];

  return (
    <footer style={{ position: "relative", zIndex: 1, padding: "4rem 0 2rem", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
      <div className="container-max">
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "2rem" }}>
          {/* Logo */}
          <div style={{ textAlign: "center" }}>
            <h2 className="gradient-text" style={{ fontSize: "1.8rem", fontWeight: 800, marginBottom: "0.5rem" }}>MusaDev</h2>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.9rem", maxWidth: "400px" }}>
              Crafting futuristic digital experiences with passion and precision.
            </p>
          </div>

          {/* Social Links */}
          <div style={{ display: "flex", gap: "1.5rem" }}>
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                title={social.label}
                style={{
                  color: "rgba(255,255,255,0.6)",
                  transition: "all 0.3s ease",
                  textDecoration: "none"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#7C3AED";
                  e.currentTarget.style.transform = "translateY(-3px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "rgba(255,255,255,0.6)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div style={{ textAlign: "center", borderTop: "1px solid rgba(255,255,255,0.05)", width: "100%", paddingTop: "2rem" }}>
            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.85rem", display: "flex", alignItems: "center", justifyContent: "center", gap: "0.4rem" }}>
              © {currentYear} MusaDev. Built with <Heart size={14} color="#7C3AED" fill="#7C3AED" /> by Musa Alom Mim
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
