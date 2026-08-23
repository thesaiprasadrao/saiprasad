export default function Intro() {
  return (
    <>
      <div style={{ marginBottom: 32 }}>
        <img 
          src="/gifgif.gif" 
          alt="cool gif" 
          width={550}
          height={180}
          style={{ 
            borderRadius: "15px",
            objectFit: "cover",
            border: "1px solid var(--border)",
            maxWidth: "100%",
            
          }} 
        />
      </div>
      <p><strong>Hello world 👋</strong></p>

      <p>
        I'm <strong style={{ textDecoration: "underline" }}>Saiprasad Rao</strong>, a software developer based in Bengaluru.
      </p>

      <p>
        I build backends, frontends, and whatever sits between them. Lately that's been AI tooling, and self-hosted experiments that probably shouldn't be running on old hardware.
      </p>

      <p>
        Reach me at ✉️{" "}
        <a href="mailto:saiprasadrao1234@gmail.com">saiprasadrao1234@gmail.com</a>
        &nbsp;·&nbsp;
        <a href="https://github.com/thesaiprasadrao" target="_blank" rel="noopener">GitHub</a>
        &nbsp;·&nbsp;
        <a href="https://linkedin.com/in/saiprasadrao/" target="_blank" rel="noopener">LinkedIn</a>
      </p>

      <a href="https://drive.google.com/file/d/19ceHsb_AbPveL3kwAYlgHUKrBx-kWfWG/view?usp=sharing" target="_blank" rel="noopener">
        <p>📄 my resume {" "}</p>
      </a>
    </>
  );
}
