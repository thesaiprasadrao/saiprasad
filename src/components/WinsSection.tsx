import SectionHeading from "./SectionHeading";
import { wins } from "@/src/data";

export default function WinsSection() {
  return (
    <div style={{ marginBottom: 8 }}>
      <SectionHeading>Wins</SectionHeading>
      <ul style={{
        listStyle: "none",
        display: "flex",
        flexDirection: "column",
        gap: 8,
      }}>
        {wins.map(w => (
          <li key={w} style={{ fontSize: "0.92rem", fontWeight: 300 }}>{w}</li>
        ))}
      </ul>
    </div>
  );
}
