import Intro from "@/src/components/Intro";
import Divider from "@/src/components/Divider";
import ProjectsSection from "@/src/components/ProjectsSection";
import StackSection from "@/src/components/StackSection";
import WinsSection from "@/src/components/WinsSection";
import Footer from "@/src/components/Footer";

export default function Home() {
  return (
    <div
      className="container"
      style={{ maxWidth: 600, margin: "0 auto", padding: "56px 24px 80px" }}
    >
      

      <Intro />
      <Divider />
      <ProjectsSection />
      <Divider />
      <StackSection />
      <Divider />
      <WinsSection />
      <Divider />
      <Footer />
    </div>
  );
}
