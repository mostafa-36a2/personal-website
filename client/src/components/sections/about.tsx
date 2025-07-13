import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const stats = [
  { value: "7+", label: "Years Experience" },
  { value: "1st", label: "DCPC Contest" },
  { value: "95", label: "WPM Typing" },
  { value: "500+", label: "Students Trained" },
];

const skills = [
  "Python", "DevOps", "ML", "PostgreSQL", 
  "Linux", "PMP", "Teaching", "Strategy"
];

export function About() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">About in 60 Seconds</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A snapshot of my journey, personality, and the numbers that define my professional life.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">My Story</h3>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    I'm a software engineer who found his calling at the intersection of technology, education, and business strategy. With a background spanning from telecommunications to Python development, I've always been driven by the challenge of solving complex problems and sharing knowledge with others.
                  </p>
                  <p>
                    My journey began in the engineering world, where I developed a passion for automation and systems thinking. This evolved into a love for software development, particularly in Python, where I've built everything from automation tools to educational platforms.
                  </p>
                  <p>
                    As an educator at heart, I've trained hundreds of students in programming, contributed to open-source projects, and published technical guides. My entrepreneurial spirit drives me to identify market opportunities and build solutions that make a real impact.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            {/* MBTI Badge */}
            <Card className="bg-primary/10">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-foreground font-bold text-xl">INTP</span>
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">The Thinker</h4>
                <p className="text-muted-foreground text-sm">
                  Logical, creative, and always curious about how things work
                </p>
              </CardContent>
            </Card>

            {/* Key Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <Card key={index}>
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Quick Skills */}
            <Card>
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold text-foreground mb-4">Quick Skills Overview</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <Badge key={index} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
