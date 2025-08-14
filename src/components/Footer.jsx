import { Github, Instagram, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border py-12 px-6">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-6 mb-8">
            <a 
              href="https://github.com/alshimaa-mhmd" 
              className="text-muted-foreground hover:text-foreground transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="https://www.linkedin.com/in/alshimaa-mohamed-30268a306/" 
              className="text-muted-foreground hover:text-foreground transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="https://www.instagram.com/alshimaamhmd/" 
              className="text-muted-foreground hover:text-foreground transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a 
              href="mailto:alshimaa717@gmail.com" 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
          <p className="text-muted-foreground">
            © 2025 Shimaa Mohamed. Built with React and Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}