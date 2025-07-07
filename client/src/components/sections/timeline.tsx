import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const timelineItems = [
  {
    year: "2023-Present",
    title: "Tech Entrepreneur",
    description: "Building EdTech solutions, consulting on product strategy, and scaling my educational impact through technology.",
    type: "Current",
    highlight: true
  },
  {
    year: "2022",
    title: "MBA in Business",
    description: "Completed MBA with thesis on crowdsourced knowledge institutes, bridging technology and business strategy.",
    type: "Education"
  },
  {
    year: "2021",
    title: "Python Instructor",
    description: "Started teaching Python programming and began freelancing, training over 200 students in various bootcamps.",
    type: "Education"
  },
  {
    year: "2020",
    title: "DCPC 1st Place",
    description: "Won first place in the Damascus Collegiate Programming Contest, showcasing algorithmic thinking skills.",
    type: "Achievement"
  },
  {
    year: "2019",
    title: "Python Developer",
    description: "Transitioned to full-time Python development, building automation tools and web applications.",
    type: "Pivot"
  },
  {
    year: "2017",
    title: "Core Network Engineer",
    description: "Started my professional journey in telecommunications, focusing on PS core automation and network optimization.",
    type: "Career"
  },
  {
    year: "2016",
    title: "B.Sc. Engineering",
    description: "Graduated with honors in Telecommunications Engineering, laying the foundation for my technical career.",
    type: "Education"
  }
];

const getTypeColor = (type: string) => {
  switch (type) {
    case "Current": return "bg-primary text-primary-foreground";
    case "Education": return "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200";
    case "Career": return "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200";
    case "Achievement": return "bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200";
    case "Pivot": return "bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200";
    default: return "bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200";
  }
};

export function Timeline() {
  return (
    <section id="timeline" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Professional Timeline</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My journey through education, career pivots, and professional growth over the years.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-border"></div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {timelineItems.map((item, index) => (
              <div key={index} className="relative flex items-center">
                <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg"></div>
                <div className={`ml-16 md:ml-0 ${index % 2 === 0 ? 'md:w-5/12 md:pr-8' : 'md:w-5/12 md:ml-auto md:pl-8'}`}>
                  <Card className={item.highlight ? "bg-gradient-to-r from-primary to-primary/80 text-primary-foreground" : ""}>
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <span className={`font-semibold text-lg ${item.highlight ? 'text-primary-foreground' : 'text-primary'}`}>
                          {item.year}
                        </span>
                        <Badge className={`ml-4 ${getTypeColor(item.type)}`}>
                          {item.type}
                        </Badge>
                      </div>
                      <h3 className={`text-xl font-bold mb-2 ${item.highlight ? 'text-primary-foreground' : 'text-foreground'}`}>
                        {item.title}
                      </h3>
                      <p className={item.highlight ? 'text-primary-foreground/90' : 'text-muted-foreground'}>
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
