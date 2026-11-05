import { useEffect, useState, type CSSProperties } from "react";
import { Pause, Play } from "lucide-react";

const particles = Array.from({ length: 22 }, (_, index) => ({
  left: `${(index * 47 + 7) % 100}%`,
  top: `${(index * 31 + 11) % 100}%`,
  size: `${3 + index % 4 * 2}px`,
  delay: `${-index * 1.7}s`,
  duration: `${16 + index % 5 * 4}s`,
  tone: ["blue", "teal", "amber", "violet"][index % 4],
}));

export default function ParticleBackdrop() {
  const [paused, setPaused] = useState(() => {
    try { return localStorage.getItem("mca-motion-paused") === "true"; }
    catch { return false; }
  });
  useEffect(() => {
    document.documentElement.dataset.motion = paused ? "paused" : "running";
    try { localStorage.setItem("mca-motion-paused", String(paused)); } catch { /* Motion controls also work without storage. */ }
    return () => { delete document.documentElement.dataset.motion; };
  }, [paused]);

  return <>
    <div className="particle-backdrop" aria-hidden="true">{particles.map((particle, index) => <span key={index} data-tone={particle.tone} style={{ left: particle.left, top: particle.top, "--particle-size": particle.size, animationDelay: particle.delay, animationDuration: particle.duration } as CSSProperties} />)}</div>
    <button type="button" className="motion-control" onClick={() => setPaused(value => !value)} aria-label={paused ? "Resume decorative animations" : "Pause decorative animations"} title={paused ? "Resume animations" : "Pause animations"}>{paused ? <Play size={14} /> : <Pause size={14} />}<span>{paused ? "Motion off" : "Motion on"}</span></button>
  </>;
}
