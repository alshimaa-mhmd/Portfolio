import { RoughNotation } from "react-rough-notation";
import { Button } from "./ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

export function Hero() {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="container mx-auto text-center">
        
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl mb-6 bg-gradient-to-r from-primary to-muted-foreground bg-clip-text text-white/70">
          <RoughNotation
          type="highlight"
          show={true}
          color="#FF2E63"
          animationDuration={1500}
        >
          Frontend Developer
        </RoughNotation> 
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            I create beautiful, {" "} <RoughNotation
          type="circle"
          show={true}
          color="#F9F871"
          animationDuration={1500}
          animationDelay={1500}
        >
          responsive
        </RoughNotation> {" "} {" "} web applications with modern technologies. 
            Passionate about clean code, user experience, and bringing ideas to life.
          </p>
          <div className="flex items-center justify-center gap-4 mb-12">
            <Button onClick={scrollToProjects} size="lg" className="cursor-pointer">
              View My Work
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="/ProfessionalResume.pdf" download="Alshimaa-CV.pdf" className=''>
                Download Resume
              </a>
            </Button>
          </div>
          <div className="flex items-center justify-center gap-6">
            <a 
              href="https://github.com" 
              className="text-muted-foreground hover:text-foreground transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="https://linkedin.com" 
              className="text-muted-foreground hover:text-foreground transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="mailto:john@example.com" 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <ArrowDown className="w-6 h-6 text-muted-foreground animate-bounce" />
        </div>
      </div>
    </section>
  );
}