import { Code, TrendingUp, Settings, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const services = [
  {
    title: "Python Training",
    description: "Comprehensive Python courses for beginners to advanced developers",
    price: "$299",
    period: "/course",
    icon: Code,
    color: "from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20",
    iconColor: "bg-blue-500",
    features: [
      "Interactive coding sessions",
      "Real-world projects", 
      "Career guidance",
      "Certificate of completion"
    ]
  },
  {
    title: "Market Analysis",
    description: "Strategic market research and business feasibility studies",
    price: "$150",
    period: "/hour",
    icon: TrendingUp,
    color: "from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20",
    iconColor: "bg-green-500",
    features: [
      "Comprehensive market research",
      "Competitive analysis",
      "Financial projections",
      "Strategic recommendations"
    ]
  },
  {
    title: "Technical Consulting",
    description: "End-to-end technical solutions and system architecture",
    price: "$200",
    period: "/hour",
    icon: Settings,
    color: "from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20",
    iconColor: "bg-purple-500",
    features: [
      "System architecture design",
      "Code review & optimization",
      "DevOps implementation", 
      "Performance optimization"
    ]
  }
];

export function Services() {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">"Mostafa as a Service"</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional services tailored to help individuals and organizations leverage technology for growth and innovation.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`bg-gradient-to-br ${service.color} shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2`}
            >
              <CardHeader className="text-center">
                <div className={`w-16 h-16 ${service.iconColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                <p className="text-muted-foreground">{service.description}</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-foreground mb-2">
                    {service.price}
                    <span className="text-lg text-muted-foreground font-normal">{service.period}</span>
                  </div>
                </div>

                <Button 
                  className={`w-full ${service.iconColor} hover:opacity-90`}
                  onClick={scrollToContact}
                >
                  {service.title === "Python Training" ? "Get Started" : 
                   service.title === "Market Analysis" ? "Book Consultation" : 
                   "Start Project"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Custom Solutions CTA */}
        <div className="mt-16 text-center">
          <Card className="max-w-3xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">Need Something Custom?</h3>
              <p className="text-muted-foreground mb-6">
                Every project is unique. Let's discuss your specific requirements and create a tailored solution that fits your needs and budget.
              </p>
              <Button size="lg" onClick={scrollToContact}>
                <MessageCircle className="w-5 h-5 mr-2" />
                Let's Discuss Your Project
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
