"use client";

const skillGroups = [
  {
    title: "Mobile Development",
    skills: [
      { name: "Flutter & Dart", pct: 95 },
      { name: "Material & Cupertino UI", pct: 90 },
      { name: "State Management (Provider/Riverpod)", pct: 88 },
      { name: "App Deployment (Play/App Store)", pct: 85 },
    ],
  },
  {
    title: "Backend & Data",
    skills: [
      { name: "Python (Django/FastAPI)", pct: 85 },
      { name: "Firebase (Auth, Firestore, FCM)", pct: 92 },
      { name: "REST API & JSON Integration", pct: 90 },
      { name: "Database (PostgreSQL/NoSQL)", pct: 82 },
    ],
  },
  {
    title: "Tools & Workflow",
    skills: [
      { name: "Git & GitHub", pct: 90 },
      { name: "UI/UX Design Concepts", pct: 85 },
      { name: "VS Code / Android Studio", pct: 92 },
      { name: "Problem Solving", pct: 90 },
    ],
  },
];

const techs = [
  "Python", "Django", "FastAPI", "Flutter", "Dart", "Firebase", "Firestore", "FCM", "REST API", "JSON", 
  "Provider", "Riverpod", "GetX", "Git", "GitHub", "PostgreSQL"
];

export default function Skills() {
  return (
    <section id="skills" className="section-padding" style={{ position: "relative", zIndex: 1 }}>
      <div className="container-max">
        {/* Heading */}
        <div className="fade-up" style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <span style={{ color: "#06B6D4", fontWeight: 600, fontSize: "0.85rem", letterSpacing: "0.15em", textTransform: "uppercase" }}>
            WHAT I KNOW
          </span>
          <h2 style={{ fontSize: "clamp(1.8rem,4vw,2.8rem)", fontWeight: 800, marginTop: "0.5rem" }}>
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
        </div>

        {/* Skill bars */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "2rem", marginBottom: "3rem" }}>
          {skillGroups.map((group, gi) => (
            <div key={group.title} className={`fade-up stagger-${gi + 1} glass-card`} style={{ padding: "1.8rem" }}>
              <h3 style={{ fontWeight: 700, marginBottom: "1.5rem", color: gi === 0 ? "#7C3AED" : gi === 1 ? "#06B6D4" : "#C4B5FD", fontSize: "1rem" }}>
                {group.title}
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {group.skills.map((sk) => (
                  <div key={sk.name}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.35rem" }}>
                      <span style={{ fontSize: "0.88rem", color: "rgba(255,255,255,0.8)" }}>{sk.name}</span>
                      <span style={{ fontSize: "0.8rem", color: "#7C3AED", fontWeight: 600 }}>{sk.pct}%</span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className="skill-fill"
                        style={{ width: `${sk.pct}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tech badge cloud */}
        <div className="fade-up" style={{ textAlign: "center" }}>
          <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.82rem", marginBottom: "1rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>
            Core Stack
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem", justifyContent: "center" }}>
            {techs.map((t) => (
              <span key={t} className="tech-badge">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
