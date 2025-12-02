import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, GraduationCap } from "lucide-react";

const experiences = [
  {
    type: "training",
    icon: GraduationCap,
    title: "Full Stack Java Developer Training",
    organization: "Coding Institute",
    period: "2023 - 2024",
    description: "Intensive training in Java, Spring Framework, React, and full-stack development. Built multiple projects covering authentication, databases, and RESTful APIs.",
  },
  {
    type: "project",
    icon: Briefcase,
    title: "Internship / Project Experience",
    organization: "Tech Solutions",
    period: "2024",
    description: "Developed and deployed production-ready applications. Collaborated on CI/CD pipelines, API development, and frontend optimization.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center">Experience & Training</h2>
          
          <div className="space-y-6">
            {experiences.map((exp, index) => {
              const Icon = exp.icon;
              return (
                <Card key={index} className="shadow-card hover:shadow-card-hover transition-shadow">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-primary/10">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-1">{exp.title}</CardTitle>
                        <div className="flex flex-col md:flex-row md:items-center gap-2 text-sm text-muted-foreground">
                          <span>{exp.organization}</span>
                          <span className="hidden md:inline">•</span>
                          <span>{exp.period}</span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{exp.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
