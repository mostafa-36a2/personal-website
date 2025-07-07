import { ArrowRight, Download, MessageCircle, Github, Linkedin, Twitter, Youtube, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const socialLinks = [
  { name: "GitHub", href: "#", icon: Github },
  { name: "LinkedIn", href: "#", icon: Linkedin },
  { name: "Twitter", href: "#", icon: Twitter },
  { name: "YouTube", href: "#", icon: Youtube },
  { name: "Telegram", href: "#", icon: Send },
];

export function Hero() {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              <span className="block">Mostafa</span>
              <span className="block text-primary">Alayesh</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Engineer · Product Strategist · Lifelong Learner
            </p>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
              Building the future through code, education, and innovation. Passionate about creating scalable solutions and empowering others through technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button onClick={scrollToContact} size="lg" className="bg-primary hover:bg-primary/90">
                <span>Hire Me</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="outline" size="lg">
                <Download className="w-5 h-5 mr-2" />
                Download CV
              </Button>
              <Button variant="ghost" size="lg" onClick={scrollToContact}>
                <MessageCircle className="w-5 h-5 mr-2" />
                Let's Talk
              </Button>
            </div>
            <div className="flex justify-center lg:justify-start space-x-6">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label={link.name}
                >
                  <link.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
          <div className="flex justify-center lg:justify-end animate-float">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=800"
                alt="Mostafa Alayesh - Professional Portrait"
                className="rounded-2xl shadow-2xl w-80 h-80 object-cover border-4 border-background"
              />
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl shadow-lg">
                <span className="font-mono">{"}"}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
