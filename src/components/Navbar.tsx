"use client";
import { useEffect, useRef, useState } from "react";
import { Menu, X, Code2 } from "lucide-react";

const links = [
  { label: "Home",       href: "#home" },
  { label: "About",      href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills",     href: "#skills" },
  { label: "Projects",   href: "#projects" },
  { label: "Contact",    href: "#contact" },
];

export default function Navbar({ dark, setDark }: { dark: boolean; setDark: (v: boolean) => void }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = links.map((l) => document.querySelector(l.href));
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActive(`#${e.target.id}`); });
      },
      { threshold: 0.4 }
    );
    sections.forEach((s) => s && obs.observe(s));
    return () => obs.disconnect();
  }, []);

  const navStyle: React.CSSProperties = {
    position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
    background: scrolled ? "rgba(15,23,42,0.85)" : "transparent",
    backdropFilter: scrolled ? "blur(14px)" : "none",
    borderBottom: scrolled ? "1px solid rgba(255,255,255,0.07)" : "none",
    transition: "all 0.35s ease",
  };

  return (
    <nav style={navStyle}>
      <div className="container-max" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "1rem 1.5rem" }}>
        {/* Logo */}
        <a href="#home" style={{ display: "flex", alignItems: "center", gap: "0.5rem", textDecoration: "none" }}>
          <div style={{ width: 36, height: 36, borderRadius: "10px", background: "linear-gradient(135deg,#7C3AED,#06B6D4)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Code2 size={18} color="#fff" />
          </div>
          <span style={{ fontWeight: 800, fontSize: "1.2rem", background: "linear-gradient(135deg,#7C3AED,#06B6D4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            MusaDev
          </span>
        </a>

        {/* Desktop nav links */}
        <ul style={{ display: "flex", gap: "2rem", listStyle: "none", margin: 0, padding: 0, alignItems: "center" }} className="hidden-mobile">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className={`nav-link${active === l.href ? " active" : ""}`} style={{ textDecoration: "none" }}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right controls */}
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          {/* Dark/light toggle */}
          <div
            className={`toggle-track${dark ? "" : " light"}`}
            onClick={() => setDark(!dark)}
            title="Toggle theme"
          >
            <div className="toggle-thumb" />
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            style={{ background: "none", border: "none", color: "#fff", cursor: "none", padding: 4 }}
            className="show-mobile"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div style={{ background: "rgba(15,23,42,0.97)", padding: "1rem 1.5rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
          {links.map((l) => (
            <a key={l.href} href={l.href} className="nav-link" style={{ textDecoration: "none" }} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
        }
      `}</style>
    </nav>
  );
}
