import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail , Phone} from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  const [text, setText] = useState("");
  const fullText = "Full-Stack Web Developer";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-teal/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-coral/10 rounded-full blur-3xl animate-pulse delay-700" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto text-center space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
        {/* <div className="inline-block">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Available for opportunities
          </span>
        </div> */}

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
          <span className="block text-foreground">Hi, I'm</span>
          <span
            className="block bg-gradient-primary bg-clip-text text-transparent mt-2 animate-blur-in"
            style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}
          >
            Saiprasad Rao
          </span>
        </h1>

        <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed min-h-[2rem]">
          {text}
          <span className="animate-pulse">|</span>
        </p>

        <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
          Full-stack developer with an emphasis on creating tools that improve daily life.
          I write code with a purpose, making apps that help real people with real problems.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <Link to="/projects">
          <Button size="lg" className="group bg-gradient-primary hover:shadow-xl hover:shadow-primary/20 transition-all">
            View My Work
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
          </Link>
          <Link to="/contact">
          <Button size="lg" variant="outline" className="border-2">
            Contact Me
          </Button>
          </Link>
        </div>

        <div className="flex items-center justify-center gap-4 pt-8">
          <a
            href="mailto:saiprasadrao1234.com"
            className="p-3 rounded-full bg-card hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110 border border-border"
          >
            <Mail className="h-5 w-5" />
          </a>
          <a
            href="tel:+919902450514"
            className="p-3 rounded-full bg-card hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110 border border-border"
          >
            <Phone className="h-5 w-5" />
          </a>
          <a
            href="https://github.com/thesaiprasadrao"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-card hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110 border border-border"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="https://linkedin.com/in/saiprasadrao"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-card hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110 border border-border"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
