import type { Experience } from "@/src/data";

export default function ExperienceCard({ role, company, date, desc, badge, url }: Experience) {
  return (
    <li style={{ fontSize: "0.92rem", lineHeight: 1.6, fontWeight: 300 }}>
      {badge && <>{badge} </>}
      <span style={{ fontWeight: 500 }}>{role}</span>
      {" at "}
      {url ? (
        <a href={url} target="_blank" rel="noopener" style={{ fontWeight: 500 }}>
          {company}
        </a>
      ) : (
        <span style={{ fontWeight: 500 }}>{company}</span>
      )}
      <div style={{ color: "var(--muted)", fontSize: "0.85rem", marginTop: "2px", marginBottom: "4px" }}>
        {date}
      </div>
      <span dangerouslySetInnerHTML={{ __html: desc }} />
    </li>
  );
}
