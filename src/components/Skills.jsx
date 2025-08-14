import { RoughNotation } from "react-rough-notation";
import { Badge } from "./ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "Next.js", "Bootstrap", "Tailwind CSS", "HTML5", "CSS3", "JavaScript"]
    },
    {
      title: "Tools & Technologies",
      skills: ["Git", "Vite", "npm", "VS Code", "Figma", "Chrome DevTools"]
    },
    {
      title: "Backend & Database",
      skills: ["SupaBase", "SQL", ".Net", "REST APIs"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-muted/20">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-center mb-16">
              <RoughNotation type="underline" show={true} color="#FF4D6D" animate={false}>Skills & Technologies</RoughNotation></h2>
          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <CardTitle className="text-center">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}