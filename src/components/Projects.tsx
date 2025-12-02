import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Full-stack shopping app with Spring Boot backend and React frontend. Features include product catalog, cart, and secure checkout.",
    tech: ["Java", "Spring", "React", "MySQL"],
    github: "#",
    demo: "#",
  },
  {
    title: "Task Management API",
    description: "RESTful API with authentication, CRUD operations, and role-based access control.",
    tech: ["Java", "Spring Boot", "JWT", "PostgreSQL"],
    github: "#",
  },
  {
    title: "Weather Dashboard",
    description: "Responsive React app fetching real-time weather data with geolocation support and forecast visualization.",
    tech: ["React", "JavaScript", "API Integration"],
    github: "#",
    demo: "#",
  },
  {
    title: "CI/CD Pipeline Setup",
    description: "Automated deployment pipeline for Java applications using GitHub Actions and Docker.",
    tech: ["GitHub Actions", "Docker", "CI/CD"],
    github: "#",
  },
  {
    title: "Data Analytics Tool",
    description: "Python-based tool for data cleaning, visualization, and basic statistical analysis.",
    tech: ["Python", "Pandas", "Matplotlib"],
    github: "#",
  },
  {
    title: "Portfolio Website",
    description: "Modern, responsive portfolio built with React and Tailwind CSS showcasing projects and skills.",
    tech: ["React", "Tailwind", "TypeScript"],
    github: "#",
    demo: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center">Featured Projects</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="group hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
              >
                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-sm line-clamp-2">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-1 bg-muted rounded-md text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" asChild className="flex-1">
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-1" />
                        Code
                      </a>
                    </Button>
                    {project.demo && (
                      <Button size="sm" variant="outline" asChild className="flex-1">
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-1" />
                          Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
