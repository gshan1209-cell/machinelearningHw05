import { ExternalLink, Github, MonitorPlay } from "lucide-react";

import type { PortfolioCourse } from "../lib/courses";

export default function DemoAdapter({ course }: { course: PortfolioCourse }) {
  const { demo } = course;

  return (
    <section className="glass-panel" style={{ padding: "28px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px" }}>
        {demo.kind === "external" ? <MonitorPlay size={24} color="var(--accent-cyan)" /> : <Github size={24} color="var(--accent-cyan)" />}
        <h2 className="heading-3">互動 Demo</h2>
      </div>

      <p style={{ color: "var(--text-secondary)", lineHeight: 1.75, marginBottom: "20px" }}>{demo.note}</p>

      {demo.url ? (
        <a href={demo.url} target="_blank" rel="noreferrer" className="btn btn-primary" style={{ display: "inline-flex" }}>
          {demo.label} <ExternalLink size={16} />
        </a>
      ) : (
        <div style={{ padding: "18px", borderRadius: "var(--radius-md)", background: "rgba(245, 158, 11, 0.08)", border: "1px solid rgba(245, 158, 11, 0.2)", color: "var(--status-warning)" }}>
          {demo.label}
        </div>
      )}

      <div style={{ marginTop: "18px", paddingTop: "18px", borderTop: "1px solid var(--panel-border)", fontSize: "0.85rem", color: "var(--text-muted)" }}>
        Adapter 類型：{demo.kind} · 來源：{course.sourceRepo}
      </div>
    </section>
  );
}
