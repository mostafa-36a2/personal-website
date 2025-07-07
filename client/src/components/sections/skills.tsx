import { useState } from "react";
import { Code, Server, Database, Network, TrendingUp, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    id: "software",
    title: "Software & Data",
    icon: Code,
    description: "Full-stack Python development with Django, Flask, FastAPI, and data science libraries.",
    skills: ["Django", "Flask", "FastAPI", "Pandas", "NumPy"],
    color: "bg-blue-500"
  },
  {
    id: "engineering",
    title: "DevOps & Infrastructure", 
    icon: Server,
    description: "Linux system administration, containerization, and CI/CD pipeline implementation.",
    skills: ["Linux", "Docker", "CI/CD", "AWS"],
    color: "bg-green-500"
  },
  {
    id: "database",
    title: "Database & Analytics",
    icon: Database,
    description: "SQL/NoSQL database design, optimization, and machine learning fundamentals.",
    skills: ["PostgreSQL", "MongoDB", "Redis", "ML Basics"],
    color: "bg-purple-500"
  },
  {
    id: "network",
    title: "Network Engineering",
    icon: Network,
    description: "Core network protocols, telecom systems, and packet switching automation.",
    skills: ["TCP/IP", "BGP", "MPLS", "Automation"],
    color: "bg-orange-500"
  },
  {
    id: "business",
    title: "Business Strategy",
    icon: TrendingUp,
    description: "Strategic planning, financial analysis, and product management methodologies.",
    skills: ["Strategy", "Accounting", "PMP", "Feasibility"],
    color: "bg-red-500"
  },
  {
    id: "soft",
    title: "Communication & Leadership",
    icon: Users,
    description: "Bilingual communication, technical writing, and educational content creation.",
    skills: ["Teaching", "Public Speaking", "AR/EN Writing", "Copywriting"],
    color: "bg-pink-500"
  }
];

const filters = [
  { id: "all", label: "All Skills" },
  { id: "software", label: "Software & Data" },
  { id: "engineering", label: "Engineering" },
  { id: "business", label: "Business" },
  { id: "soft", label: "Soft Skills" }
];

export function Skills() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredSkills = skillCategories.filter(skill => 
    activeFilter === "all" || 
    skill.id === activeFilter ||
    (activeFilter === "engineering" && (skill.id === "engineering" || skill.id === "network" || skill.id === "database"))
  );

  return (
    <section id="skills" className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Skills & Domains</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            A comprehensive overview of my technical expertise and domain knowledge across multiple disciplines.
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <Button
                key={filter.id}
                variant={activeFilter === filter.id ? "default" : "outline"}
                onClick={() => setActiveFilter(filter.id)}
                className={activeFilter === filter.id ? "bg-primary text-primary-foreground" : ""}
              >
                {filter.label}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSkills.map((skill, index) => (
            <Card 
              key={skill.id} 
              className="hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
            >
              <CardHeader>
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 ${skill.color} rounded-lg flex items-center justify-center mr-4`}>
                    <skill.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{skill.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{skill.description}</p>
                <div className="flex flex-wrap gap-2">
                  {skill.skills.map((skillName, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary">
                      {skillName}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
