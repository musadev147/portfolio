"use client";

export default function LoadingOverlay({ loaded }: { loaded: boolean }) {
  return (
    <div id="loading" className={loaded ? "hide" : ""}>
      <div className="loader-ring" />
      <p style={{ 
        marginTop: "1.5rem", 
        color: "rgba(255,255,255,0.7)", 
        letterSpacing: "0.2em", 
        fontSize: "0.8rem",
        fontWeight: 600,
        textTransform: "uppercase"
      }}>
        Initialising MusaDev...
      </p>
    </div>
  );
}
