import Link from "next/link";
import { ArrowRight, Clock3, ExternalLink } from "lucide-react";

import type { PortfolioCourse } from "../lib/courses";

export default function CourseCard({ course }: { course: PortfolioCourse }) {
  const available = course.status === "available";

  return (
    <article className="glass-panel" style={{ padding: "24px", display: "flex", flexDirection: "column", gap: "18px", minHeight: "310px" }}>
      <div className="flex-between" style={{ alignItems: "flex-start", gap: "16px" }}>
        <div>
          <div style={{ color: "var(--accent-cyan)", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.08em", marginBottom: "8px" }}>
            {course.id} · {course.category}
          </div>
          <h3 className="heading-3" style={{ fontSize: "1.35rem", marginBottom: "8px" }}>{course.title}</h3>
        </div>
        <span style={{
          whiteSpace: "nowrap",
          padding: "4px 10px",
          borderRadius: "999px",
          fontSize: "0.75rem",
          fontWeight: 700,
          background: available ? "rgba(16, 185, 129, 0.12)" : "rgba(245, 158, 11, 0.12)",
          color: available ? "var(--status-success)" : "var(--status-warning)",
          border: `1px solid ${available ? "rgba(16, 185, 129, 0.25)" : "rgba(245, 158, 11, 0.25)"}`
        }}>
          {available ? "可開始學習" : "等待轉製"}
        </span>
      </div>

      <p style={{ color: "var(--text-secondary)", lineHeight: 1.75, flex: 1 }}>{course.subtitle}</p>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
        <span className="nav-badge">{course.level}</span>
        <span className="nav-badge" style={{ display: "inline-flex", alignItems: "center", gap: "5px" }}>
          <Clock3 size={13} /> {course.duration}
        </span>
        {course.technologies.slice(0, 3).map((technology) => (
          <span key={technology} className="nav-badge">{technology}</span>
        ))}
      </div>

      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        {available ? (
          <Link href={`/courses/${course.slug}`} className="btn btn-primary" style={{ flex: 1, justifyContent: "center", minWidth: "170px" }}>
            開始這堂課 <ArrowRight size={16} />
          </Link>
        ) : (
          <span className="btn btn-secondary" style={{ flex: 1, justifyContent: "center", minWidth: "170px", opacity: 0.65, cursor: "default" }}>
            課程建置中
          </span>
        )}
        <a href={course.sourceUrl} target="_blank" rel="noreferrer" className="btn btn-secondary" aria-label={`開啟 ${course.sourceRepo}`}>
          <ExternalLink size={16} /> 原 Repo
        </a>
      </div>
    </article>
  );
}
