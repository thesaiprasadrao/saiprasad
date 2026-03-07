import SectionHeading from "./SectionHeading";
import { extras } from "@/src/data";

export default function WinsSection() {
  return (
    <div style={{ marginBottom: 8 }}>
      <SectionHeading>Extras</SectionHeading>
      <ul style={{
        listStyle: "none",
        display: "flex",
        flexDirection: "column",
        gap: 8,
      }}>
        {extras.map(w => (
          <li key={w} style={{ fontSize: "0.92rem", fontWeight: 300 }}>{w}</li>
        ))}
      </ul>
    </div>
  );
}
