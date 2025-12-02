import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "sakshi.khatavkar@email.com",
    href: "mailto:sakshi.khatavkar@email.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 XXXXXXXXXX",
    href: "tel:+91XXXXXXXXXX",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/sakshikhatavkar",
    href: "https://github.com/sakshikhatavkar",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/sakshikhatavkar",
    href: "https://linkedin.com/in/sakshikhatavkar",
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto space-y-12 text-center">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Get In Touch</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, collaborations, or just connecting with fellow developers.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {contactLinks.map((contact) => {
              const Icon = contact.icon;
              return (
                <Button
                  key={contact.label}
                  asChild
                  variant="outline"
                  className="h-auto py-4 px-6 justify-start hover:bg-muted hover:border-primary transition-colors"
                >
                  <a href={contact.href} target="_blank" rel="noopener noreferrer">
                    <Icon className="h-5 w-5 mr-3 text-primary" />
                    <div className="text-left">
                      <p className="text-xs text-muted-foreground">{contact.label}</p>
                      <p className="text-sm font-medium">{contact.value}</p>
                    </div>
                  </a>
                </Button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
