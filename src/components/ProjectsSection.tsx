import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";
import { projects } from "@/src/data";

export default function ProjectsSection() {
  return (
    <div style={{ marginBottom: 8 }}>
      <SectionHeading>Projects</SectionHeading>
      <ul style={{
        listStyle: "none",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        marginBottom: 28,
      }}>
        {projects.map(p => (
          <ProjectCard key={p.name} {...p} />
        ))}
      </ul>
    </div>
  );
}
