"use client";
import { useState } from "react";
import { ExternalLink, Code2, Tag } from "lucide-react";

type Project = {
  title: string;
  desc: string;
  tags: string[];
  live: string;
  repo: string;
  emoji: string;
  color: string;
};

const allProjects: Project[] = [
  { 
    title: "Smart Blood Finder", 
    desc: "Real-time blood donor tracking and request system with location-based search and push notifications.", 
    tags: ["Flutter", "Firebase", "OneSignal", "Maps"], 
    live: "#", 
    repo: "https://github.com/musaMMS/smart_blood_definder", 
    emoji: "🩸", 
    color: "#EF4444" 
  },
  { 
    title: "Gemini AI Chatbot", 
    desc: "Advanced AI chatbot integrating Google Gemini API for real-time conversational intelligence.", 
    tags: ["Flutter", "Gemini AI", "Dart", "API"], 
    live: "#", 
    repo: "https://github.com/musaMMS/google_generartive_ai", 
    emoji: "🤖", 
    color: "#8B5CF6" 
  },
  { 
    title: "Weather Pulse", 
    desc: "Modern weather app featuring 7-day forecast, AQI, UV index, and GPS-based real-time tracking.", 
    tags: ["Flutter", "REST API", "GPS", "UI/UX"], 
    live: "#", 
    repo: "https://github.com/musaMMS/wather_apps2.git", 
    emoji: "🌤️", 
    color: "#06B6D4" 
  },
  { 
    title: "College KPI App", 
    desc: "Educational platform for academic resources, BTEB notices, results, and CGPA calculations.", 
    tags: ["Flutter", "Firebase", "BTEB", "Education"], 
    live: "#", 
    repo: "https://github.com/musaMMS/college_kpi_apps.git", 
    emoji: "🎓", 
    color: "#F59E0B" 
  },
  { 
    title: "BCS Preparation", 
    desc: "Interactive learning app with live exams and subject-wise quizzes for BCS candidates.", 
    tags: ["Flutter", "Firebase", "BCS", "Quizzes"], 
    live: "#", 
    repo: "https://github.com/musaMMS/firsrt_firebase_bscapp.git", 
    emoji: "📚", 
    color: "#10B981" 
  },
  { 
    title: "Modern Blog App", 
    desc: "Seamless content management platform with categories, push notifications, and offline reading support.", 
    tags: ["Flutter", "Firebase", "FCM", "Blog"], 
    live: "#", 
    repo: "https://github.com/musaMMS/blog_app.git", 
    emoji: "📝", 
    color: "#7C3AED" 
  },
  { 
    title: "Admin College Panel", 
    desc: "Real-time CRUD management system for college data with instant updates to user apps.", 
    tags: ["Flutter", "Firebase", "Firestore", "Admin"], 
    live: "#", 
    repo: "https://github.com/musaMMS/admin_college_data_update", 
    emoji: "🏫", 
    color: "#6366F1" 
  },
];

const allTags = ["All", ...Array.from(new Set(allProjects.flatMap((p) => p.tags)))];

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const filtered = filter === "All" ? allProjects : allProjects.filter((p) => p.tags.includes(filter));

  return (
    <section id="projects" className="section-padding" style={{ position: "relative", zIndex: 1 }}>
      <div className="container-max">
        {/* Heading */}
        <div className="fade-up" style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <span style={{ color: "#7C3AED", fontWeight: 600, fontSize: "0.85rem", letterSpacing: "0.15em", textTransform: "uppercase" }}>
            MY WORK
          </span>
          <h2 style={{ fontSize: "clamp(1.8rem,4vw,2.8rem)", fontWeight: 800, marginTop: "0.5rem" }}>
            Featured <span className="gradient-text">Projects</span>
          </h2>
        </div>

        {/* Filter pills */}
        <div className="fade-up" style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", justifyContent: "center", marginBottom: "2.5rem" }}>
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setFilter(tag)}
              style={{
                padding: "0.4rem 1rem",
                borderRadius: "9999px",
                border: filter === tag ? "1.5px solid #7C3AED" : "1.5px solid rgba(255,255,255,0.1)",
                background: filter === tag ? "rgba(124,58,237,0.2)" : "transparent",
                color: filter === tag ? "#C4B5FD" : "rgba(255,255,255,0.5)",
                fontSize: "0.82rem",
                fontWeight: 600,
                cursor: "none",
                transition: "all 0.25s",
              }}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Project grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr))", gap: "1.5rem" }}>
          {filtered.map((p, i) => (
            <div
              key={p.title}
              className={`fade-up project-card glass-card stagger-${(i % 5) + 1}`}
              style={{ padding: "1.8rem", transition: "transform 0.3s", cursor: "default" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-6px)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}
            >
              {/* Icon + title */}
              <div style={{ display: "flex", alignItems: "flex-start", gap: "0.9rem", marginBottom: "1rem" }}>
                <div style={{
                  width: 50, height: 50, borderRadius: "12px", flexShrink: 0,
                  background: `${p.color}22`,
                  border: `1px solid ${p.color}55`,
                  display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.5rem",
                }}>
                  {p.emoji}
                </div>
                <div>
                  <h3 style={{ fontWeight: 700, fontSize: "1rem", marginBottom: "0.2rem" }}>{p.title}</h3>
                  <Tag size={12} color="#7C3AED" />
                </div>
              </div>

              <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.88rem", lineHeight: 1.7, marginBottom: "1.2rem" }}>
                {p.desc}
              </p>

              {/* Tags */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginBottom: "1.2rem" }}>
                {p.tags.map((t) => (
                  <span key={t} className="tech-badge" style={{ fontSize: "0.75rem", padding: "0.2rem 0.6rem" }}>{t}</span>
                ))}
              </div>

              {/* Links */}
              <div style={{ display: "flex", gap: "0.75rem" }}>
                <a href={p.live} target="_blank" rel="noopener noreferrer"
                  style={{ display: "flex", alignItems: "center", gap: "0.3rem", fontSize: "0.82rem", color: "#06B6D4", textDecoration: "none", transition: "opacity 0.2s" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity = "0.7"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity = "1"; }}
                >
                  <ExternalLink size={13} /> Live Demo
                </a>
                <a href={p.repo} target="_blank" rel="noopener noreferrer"
                  style={{ display: "flex", alignItems: "center", gap: "0.3rem", fontSize: "0.82rem", color: "rgba(255,255,255,0.5)", textDecoration: "none", transition: "opacity 0.2s" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity = "0.7"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity = "1"; }}
                >
                  <Code2 size={13} /> Code
                </a>
              </div>

              {/* Hover overlay */}
              <div className="project-overlay">
                <div style={{ textAlign: "center", color: "#fff" }}>
                  <p style={{ fontWeight: 700, fontSize: "1.05rem", marginBottom: "1rem" }}>{p.title}</p>
                  <div style={{ display: "flex", gap: "0.75rem", justifyContent: "center" }}>
                    <a href={p.live} target="_blank" rel="noopener noreferrer"
                      style={{ background: "#fff", color: "#7C3AED", padding: "0.45rem 1.1rem", borderRadius: "9999px", textDecoration: "none", fontSize: "0.82rem", fontWeight: 700 }}>
                      Live
                    </a>
                    <a href={p.repo} target="_blank" rel="noopener noreferrer"
                      style={{ background: "transparent", color: "#fff", border: "1.5px solid #fff", padding: "0.45rem 1.1rem", borderRadius: "9999px", textDecoration: "none", fontSize: "0.82rem", fontWeight: 700 }}>
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
