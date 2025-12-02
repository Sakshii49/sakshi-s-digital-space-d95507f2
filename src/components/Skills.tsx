import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    category: "Backend",
    skills: ["Java", "Spring Framework", "Python", "MySQL", "API Development"],
  },
  {
    category: "Frontend",
    skills: ["React", "JavaScript", "HTML", "CSS", "Responsive Design"],
  },
  {
    category: "DevOps & Tools",
    skills: ["GitHub", "CI/CD Pipelines", "Git", "Version Control"],
  },
  {
    category: "Additional",
    skills: ["Data Science Basics", "Problem Solving", "Agile"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto space-y-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center">Skills & Technologies</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category) => (
              <div key={category.category} className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="px-4 py-2 text-sm hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
