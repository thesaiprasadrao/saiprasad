import Tags from "./Tags";
import type { Project } from "@/src/data";

export default function ProjectCard({ name, href, desc, tags, badge, live }: Project) {
  return (
    <li style={{ fontSize: "0.92rem", lineHeight: 1.6, fontWeight: 300 }}>
      {badge && <>{badge} </>}
      <a href={href} target="_blank" rel="noopener" style={{ fontWeight: 500 }}>
        {name}
      </a>
      {" — "}
      {desc}
      {live && live !== "#" && (
        <>
          {" "}
          <a href={live} target="_blank" rel="noopener noreferrer" style={{ color: "var(--muted)", fontSize: "0.88rem" }}>
            Live ↗
          </a>
        </>
      )}
      <Tags tags={tags} />
    </li>
  );
}
