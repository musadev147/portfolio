"use client";
import { Briefcase, Calendar, CheckCircle2 } from "lucide-react";

const experiences = [
  {
    company: "PeopleNTech",
    role: "Flutter Developer",
    period: "2025 - Present",
    status: "Currently Working",
    desc: "Developing and maintaining high-performance cross-platform mobile applications using Flutter. Focused on state management, API integration, and creating seamless user experiences.",
    color: "#7C3AED",
  },
  {
    company: "Betopia",
    role: "Flutter Developer",
    period: "2026 - Present",
    status: "Currently Working",
    desc: "Building innovative mobile solutions with Flutter. Collaborating with cross-functional teams to design, develop, and deploy scalable apps for diverse clients.",
    color: "#06B6D4",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section-padding" style={{ position: "relative", zIndex: 1 }}>
      <div className="container-max">
        {/* Heading */}
        <div className="fade-up" style={{ textAlign: "center", marginBottom: "4rem" }}>
          <span style={{ color: "#7C3AED", fontWeight: 600, fontSize: "0.85rem", letterSpacing: "0.15em", textTransform: "uppercase" }}>
            MY CAREER PATH
          </span>
          <h2 style={{ fontSize: "clamp(1.8rem,4vw,2.8rem)", fontWeight: 800, marginTop: "0.5rem" }}>
            Professional <span className="gradient-text">Experience</span>
          </h2>
        </div>

        {/* Timeline container */}
        <div style={{ position: "relative", maxWidth: "900px", margin: "0 auto" }}>
          {/* Vertical line */}
          <div className="timeline-line hidden-mobile" />

          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            {experiences.map((exp, i) => (
              <div
                key={exp.company}
                className={`fade-up stagger-${i + 1}`}
                style={{ position: "relative", paddingLeft: "3rem" }}
              >
                {/* Timeline Dot */}
                <div className="timeline-dot hidden-mobile" style={{ top: "1.5rem" }} />

                {/* Card */}
                <div
                  className="glass-card"
                  style={{
                    padding: "2rem",
                    transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                    position: "relative",
                    overflow: "hidden"
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.transform = "translateX(10px) scale(1.02)";
                    el.style.boxShadow = `0 10px 40px -10px ${exp.color}44`;
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.transform = "translateX(0) scale(1)";
                    el.style.boxShadow = "none";
                  }}
                >
                  {/* Status Badge */}
                  <div style={{
                    position: "absolute", top: "1.5rem", right: "1.5rem",
                    background: `${exp.color}22`,
                    border: `1px solid ${exp.color}44`,
                    borderRadius: "9999px",
                    padding: "0.3rem 0.8rem",
                    display: "flex", alignItems: "center", gap: "0.4rem"
                  }}>
                    <CheckCircle2 size={14} color={exp.color} />
                    <span style={{ fontSize: "0.7rem", fontWeight: 700, color: exp.color, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                      {exp.status}
                    </span>
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                      <div style={{
                        width: 50, height: 50, borderRadius: "14px",
                        background: `linear-gradient(135deg, ${exp.color}, ${exp.color}aa)`,
                        display: "flex", alignItems: "center", justifyContent: "center",
                        flexShrink: 0,
                        boxShadow: `0 8px 16px -4px ${exp.color}66`
                      }}>
                        <Briefcase size={24} color="#fff" />
                      </div>
                      <div>
                        <h3 style={{ fontSize: "1.3rem", fontWeight: 800 }}>{exp.company}</h3>
                        <p style={{ color: exp.color, fontWeight: 600, fontSize: "0.95rem" }}>{exp.role}</p>
                      </div>
                    </div>

                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "rgba(255,255,255,0.4)", fontSize: "0.85rem" }}>
                      <Calendar size={14} />
                      <span>{exp.period}</span>
                    </div>

                    <p style={{ color: "rgba(255,255,255,0.6)", lineHeight: 1.8, fontSize: "0.95rem" }}>
                      {exp.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          div[style*="paddingLeft: 3rem"] { padding-left: 0 !important; }
        }
      `}</style>
    </section>
  );
}
