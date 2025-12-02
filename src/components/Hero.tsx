import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in-up">
          <div className="space-y-2">
            <p className="text-sm uppercase tracking-wider text-muted-foreground font-medium">
              Software Developer
            </p>
            <h1 className="text-5xl md:text-7xl font-bold text-foreground">
              Sakshi Khatavkar
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Building efficient, scalable solutions with modern tech
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-6">
            <Button asChild className="bg-primary hover:bg-primary/90">
              <a href="#projects">
                View Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="outline">
              <a href="#contact">Get in Touch</a>
            </Button>
          </div>

          <div className="flex items-center justify-center gap-4 pt-4">
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
    </section>
  );
};

export default Hero;
