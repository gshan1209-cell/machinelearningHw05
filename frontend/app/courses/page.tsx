import { BookOpenCheck, Boxes, GraduationCap, Route } from "lucide-react";

import CourseCard from "../../components/CourseCard";
import { getAvailableCourses, getCourseCategories, getCourses } from "../../lib/courses";

export default function CoursesPage() {
  const courses = getCourses();
  const availableCourses = getAvailableCourses();
  const categories = getCourseCategories();

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "32px", paddingBottom: "80px" }}>
      <section className="glass-panel" style={{ padding: "48px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: "auto -100px -180px auto", width: "420px", height: "420px", borderRadius: "50%", background: "rgba(99, 102, 241, 0.16)", filter: "blur(90px)" }} />
        <div style={{ position: "relative", zIndex: 1 }}>
          <div style={{ color: "var(--accent-cyan)", fontWeight: 800, letterSpacing: "0.08em", marginBottom: "12px" }}>COURSE LIBRARY</div>
          <h1 className="heading-1" style={{ fontSize: "clamp(2.4rem, 5vw, 3.6rem)" }}>把作業變成真正看得懂的課</h1>
          <p className="subtitle" style={{ maxWidth: "760px", marginBottom: 0 }}>
            每個原始作業都保留 Git 歷史與獨立 Demo，中央網站則重新整理成白話原理、生活比喻、操作流程、程式解析、測驗與延伸挑戰。
          </p>
        </div>
      </section>

      <section style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))", gap: "16px" }}>
        {[
          { icon: <Boxes size={24} />, value: courses.length, label: "已登錄作業" },
          { icon: <BookOpenCheck size={24} />, value: availableCourses.length, label: "可學習課程" },
          { icon: <Route size={24} />, value: categories.length, label: "知識分類" },
          { icon: <GraduationCap size={24} />, value: "6 段式", label: "統一教學模板" }
        ].map((item) => (
          <div key={item.label} className="glass-panel" style={{ padding: "22px", display: "flex", alignItems: "center", gap: "14px" }}>
            <div style={{ color: "var(--accent-cyan)" }}>{item.icon}</div>
            <div>
              <div style={{ fontSize: "1.45rem", fontWeight: 900 }}>{item.value}</div>
              <div style={{ color: "var(--text-muted)", fontSize: "0.85rem" }}>{item.label}</div>
            </div>
          </div>
        ))}
      </section>

      <section>
        <div style={{ marginBottom: "20px" }}>
          <h2 className="heading-2">現在可以開始的課</h2>
          <p style={{ color: "var(--text-secondary)" }}>第一階段先用三種不同型態的作業驗證統一課程架構。</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "18px" }}>
          {availableCourses.map((course) => <CourseCard key={course.id} course={course} />)}
        </div>
      </section>

      <section>
        <div style={{ marginBottom: "20px" }}>
          <h2 className="heading-2">完整作業轉製清單</h2>
          <p style={{ color: "var(--text-secondary)" }}>來源 Repo 已登錄；後續依優先順序補上教學內容與 Demo Adapter。</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "18px" }}>
          {courses.filter((course) => course.status === "planned").map((course) => <CourseCard key={course.id} course={course} />)}
        </div>
      </section>
    </div>
  );
}
