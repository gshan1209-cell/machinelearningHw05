"use client";

import { useState } from "react";
import { CheckCircle2, CircleHelp, XCircle } from "lucide-react";

import type { CourseQuiz } from "../lib/courses";

export default function CourseQuizCard({ quiz }: { quiz: CourseQuiz }) {
  const [selected, setSelected] = useState<string | null>(null);
  const isCorrect = selected === quiz.answer;

  return (
    <section className="glass-panel" style={{ padding: "28px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px" }}>
        <CircleHelp size={24} color="var(--accent-purple)" />
        <h2 className="heading-3">快速測驗</h2>
      </div>

      <p style={{ fontSize: "1.05rem", fontWeight: 700, marginBottom: "18px" }}>{quiz.question}</p>

      <div style={{ display: "grid", gap: "10px" }}>
        {quiz.options.map((option) => {
          const active = selected === option;
          return (
            <button
              key={option}
              type="button"
              onClick={() => setSelected(option)}
              style={{
                width: "100%",
                textAlign: "left",
                padding: "14px 16px",
                borderRadius: "var(--radius-md)",
                border: active ? "1px solid var(--accent-cyan)" : "1px solid var(--panel-border)",
                background: active ? "rgba(6, 182, 212, 0.12)" : "rgba(255, 255, 255, 0.03)",
                color: "var(--text-primary)",
                cursor: "pointer"
              }}
            >
              {option}
            </button>
          );
        })}
      </div>

      {selected && (
        <div style={{
          marginTop: "18px",
          padding: "16px",
          borderRadius: "var(--radius-md)",
          background: isCorrect ? "rgba(16, 185, 129, 0.1)" : "rgba(239, 68, 68, 0.1)",
          border: `1px solid ${isCorrect ? "rgba(16, 185, 129, 0.25)" : "rgba(239, 68, 68, 0.25)"}`
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", color: isCorrect ? "var(--status-success)" : "var(--status-error)", fontWeight: 800, marginBottom: "8px" }}>
            {isCorrect ? <CheckCircle2 size={20} /> : <XCircle size={20} />}
            {isCorrect ? "答對了" : "再想一下"}
          </div>
          <p style={{ color: "var(--text-secondary)" }}>{quiz.explanation}</p>
        </div>
      )}
    </section>
  );
}
