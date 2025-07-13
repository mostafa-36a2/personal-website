import { useState } from "react";
import { ExternalLink, Github, Star, Users, BookOpen, Award, Play, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    id: "android-pin",
    title: "Android PIN Unlocker",
    description: "Open-source Android application for PIN pattern unlocking with advanced security features. Gained significant community adoption and contributions.",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=400",
    tags: ["Android", "Java", "Security"],
    category: "code",
    stats: "2.3k stars",
    icon: Star,
    links: {
      github: "#",
      demo: "#"
    }
  },
  {
    id: "postgresql-guide",
    title: "PostgreSQL Arabic Guide",
    description: "Comprehensive PostgreSQL guide in Arabic, making advanced database concepts accessible to Arabic-speaking developers and students.",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=400",
    tags: ["PostgreSQL", "Arabic", "Education"],
    category: "research",
    stats: "Published",
    icon: BookOpen,
    links: {
      download: "#",
      preview: "#"
    }
  },
  {
    id: "mba-thesis",
    title: "MBA Thesis Research",
    description: "Crowdsourced Knowledge Institutes: A Framework for Collaborative Learning - exploring innovative approaches to educational technology.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=400",
    tags: ["EdTech", "Research", "Innovation"],
    category: "research",
    stats: "MBA",
    icon: Award,
    links: {
      paper: "#",
      abstract: "#"
    }
  },
  {
    id: "edtech-bootcamp",
    title: "EdTech Bootcamp",
    description: "Comprehensive programming bootcamp focusing on Python, data science, and career development for aspiring developers.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=400",
    tags: ["Education", "Python", "Career"],
    category: "entrepreneurship",
    stats: "500+ students",
    icon: Users,
    links: {
      watch: "#",
      enroll: "#"
    }
  },
  {
    id: "automation-framework",
    title: "Python Automation Framework",
    description: "Enterprise-grade automation framework for network operations, reducing manual tasks by 80% and improving system reliability.",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=400",
    tags: ["Python", "Automation", "Network"],
    category: "code",
    stats: "Enterprise",
    icon: Star,
    links: {
      code: "#",
      case: "#"
    }
  },
  {
    id: "dcpc-achievement",
    title: "DCPC Champion",
    description: "First place winner in Damascus Collegiate Programming Contest 2020, demonstrating strong algorithmic problem-solving skills.",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=400",
    tags: ["Algorithms", "C++", "Competition"],
    category: "research",
    stats: "1st Place",
    icon: Trophy,
    links: {
      certificate: "#",
      solutions: "#"
    }
  }
];

const filters = [
  { id: "all", label: "All Projects" },
  { id: "code", label: "Code" },
  { id: "research", label: "Research" },
  { id: "entrepreneurship", label: "Entrepreneurship" }
];

export function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects = projects.filter(project => 
    activeFilter === "all" || project.category === activeFilter
  );

  return (
    <section id="projects" className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Projects & Achievements</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            A showcase of my technical projects, research contributions, and notable achievements across different domains.
          </p>

          {/* Project Filter Buttons */}
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
          {filteredProjects.map((project) => (
            <Card key={project.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <Badge variant="secondary" className="flex items-center gap-1">
                    <project.icon className="w-3 h-3" />
                    {project.stats}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <Badge key={index} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  {Object.entries(project.links).map(([key, href], index) => (
                    <Button key={index} variant="ghost" size="sm" asChild>
                      <a href={href} className="flex items-center gap-2">
                        {key === "github" && <Github className="w-4 h-4" />}
                        {key === "demo" && <ExternalLink className="w-4 h-4" />}
                        {key === "download" && <BookOpen className="w-4 h-4" />}
                        {key === "preview" && <ExternalLink className="w-4 h-4" />}
                        {key === "paper" && <BookOpen className="w-4 h-4" />}
                        {key === "abstract" && <ExternalLink className="w-4 h-4" />}
                        {key === "watch" && <Play className="w-4 h-4" />}
                        {key === "enroll" && <ExternalLink className="w-4 h-4" />}
                        {key === "code" && <Github className="w-4 h-4" />}
                        {key === "case" && <ExternalLink className="w-4 h-4" />}
                        {key === "certificate" && <Award className="w-4 h-4" />}
                        {key === "solutions" && <Github className="w-4 h-4" />}
                        <span className="capitalize">{key}</span>
                      </a>
                    </Button>
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
