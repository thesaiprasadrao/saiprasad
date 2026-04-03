import SectionHeading from "./SectionHeading";
import ExperienceCard from "./ExperienceCard";
import { experiences } from "@/src/data";

export default function ExperienceSection() {
  return (
    <div style={{ marginBottom: 8 }}>
      <SectionHeading>Experience</SectionHeading>
      <ul style={{
        listStyle: "none",
        display: "flex",
        flexDirection: "column",
        gap: 16,
        marginBottom: 28,
        padding: 0,
        margin: 0,
      }}>
        {experiences.map((exp, i) => (
          <ExperienceCard key={i} {...exp} />
        ))}
      </ul>
    </div>
  );
}
