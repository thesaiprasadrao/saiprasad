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
        I&apos;m <strong style={{ textDecoration: "underline" }}>Saiprasad Rao</strong>, a CS undergrad from
        Bengaluru  — welcome to my little corner on the Internet.
      </p>

      <p>
        i build things for the web. backends, frontends, whatever it takes to make an idea
        real. currently deep into real-time systems, AI tooling, and the occasional hackathon
        grind.
      </p>

      <p>started with curiosity, stayed for the craft. still learning every day.</p>

      <p>
        reach me at ✉️{" "}
        <a href="mailto:saiprasadrao1234@gmail.com">saiprasadrao1234@gmail.com</a>
        &nbsp;·&nbsp;
        <a href="https://github.com/thesaiprasadrao" target="_blank" rel="noopener">GitHub</a>
        &nbsp;·&nbsp;
        <a href="https://linkedin.com/in/saiprasadrao/" target="_blank" rel="noopener">LinkedIn</a>
      </p>

      <a href="https://drive.google.com/file/d/1xhov1dNYBnH3XvXFa4OWBqE9ZDeIIUgo/view?usp=sharing" target="_blank" rel="noopener">
        <p>📄 my resume {" "}</p>
      </a>
    </>
  );
}
