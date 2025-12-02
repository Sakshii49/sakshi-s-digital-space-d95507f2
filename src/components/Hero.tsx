import { FileDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12 animate-fade-in-up">
            {/* Profile Photo */}
            <div className="flex-shrink-0">
              <div className="w-48 h-48 md:w-64 md:h-64 relative group">
                <img
                  src="/placeholder.svg"
                  alt="Sakshi Khatavkar - Software Developer"
                  className="w-full h-full object-cover border-4 border-primary shadow-card-hover"
                />
                <div className="absolute inset-0 border-4 border-primary/20 -translate-x-3 -translate-y-3 -z-10 transition-transform duration-300 group-hover:translate-x-0 group-hover:translate-y-0"></div>
              </div>
            </div>

            {/* Hero Content */}
            <div className="flex-1 text-center md:text-left space-y-6">
              <div className="space-y-2">
                <p className="text-sm uppercase tracking-wider text-muted-foreground font-medium">
                  Software Developer
                </p>
                <h1 className="text-4xl md:text-6xl font-bold text-foreground">
                  Sakshi Khatavkar
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground">
                  Building efficient, scalable solutions with modern tech
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start pt-4">
                <Button asChild className="bg-primary hover:bg-primary/90 gap-2">
                  <a href="/resume.pdf" download>
                    <FileDown className="h-4 w-4" />
                    Download Resume
                  </a>
                </Button>
                <Button asChild variant="outline">
                  <a href="#contact">Get in Touch</a>
                </Button>
              </div>

              <div className="flex items-center gap-4 justify-center md:justify-start pt-2">
                <a
                  href="https://github.com/sakshikhatavkar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full hover:bg-muted transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="https://linkedin.com/in/sakshikhatavkar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full hover:bg-muted transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="mailto:sakshi.khatavkar@email.com"
                  className="p-2 rounded-full hover:bg-muted transition-colors"
                  aria-label="Email"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
