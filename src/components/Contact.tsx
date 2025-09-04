import { Mail, Linkedin, Github, MapPin, Phone, Send, MessageCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "swathicg.2004@gmail.com",
      // Open Gmail compose in a new tab
      href: "https://mail.google.com/mail/?view=cm&to=swathicg.2004@gmail.com",
      target: "_blank", // ensure it opens in new tab
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "in/swathi-c-g-162063249",
      href: "https://www.linkedin.com/in/swathi-c-g-162063249/",
      color: "text-accent",
      bgColor: "bg-accent/10"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "@Swathi-CG04",
      href: "https://github.com/Swathi-CG04",
      color: "text-foreground",
      bgColor: "bg-muted"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Bangalore, India",
      href: "#",
      color: "text-accent-cyan",
      bgColor: "bg-accent-cyan/10"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-foreground">
            Let's Connect
          </h2>
          
          <div className="flex justify-center">
            <div className="max-w-2xl w-full space-y-8">

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="hero-gradient-subtle p-8 rounded-2xl">
                <h3 className="text-2xl font-semibold mb-6 text-foreground">Get in Touch</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  I’m always excited to explore new opportunities, collaborations, and conversations around
                  technology. Whether it’s brainstorming ideas, working on something creative, or just 
                  chatting about shared interests, I’d love to connect.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Outside of tech, I enjoy exploring new places, trying out different hobbies, and having 
                  meaningful conversations—so don’t hesitate to reach out even if it’s not strictly 
                  work-related. Building genuine connections matters to me just as much as professional ones.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Feel free to drop me a message through any of the channels below—I’ll be happy to respond!
                </p>
              </div>

              {/* Contact Cards */}
              <div className="grid sm:grid-cols-2 gap-4">
                {contactInfo.map((contact, index) => (
                  <Card 
                    key={index}
                    className="shadow-card hover:shadow-card-hover transition-smooth border-0 bg-card group hover:-translate-y-1"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className={`p-3 ${contact.bgColor} rounded-lg group-hover:scale-110 transition-smooth`}>
                          <contact.icon className={`h-5 w-5 ${contact.color}`} />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-foreground mb-1">{contact.label}</h4>
                          <a 
                            href={contact.href}
                            className={`text-sm ${contact.color} hover:underline transition-smooth`}
                            target={contact.href.startsWith('http') ? '_blank' : undefined}
                            rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          >
                            {contact.value}
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Quick Actions */}
              <div className="flex flex-wrap gap-4">
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary/90 transition-smooth"
                asChild
              >
              <a 
                href="https://mail.google.com/mail/?view=cm&to=swathicg.2004@gmail.com" 
                target="_blank" 
                rel="noopener noreferrer"
              >
              <MessageCircle className="w-5 h-5 mr-2" />
                Send Email
              </a>
              </Button>

                
                <Button 
                  variant="outline"
                  size="lg" 
                  className="border-primary/20 hover:bg-primary hover:text-primary-foreground transition-smooth"
                  asChild
                >
                  <a href="https://linkedin.com/in/swathi-c-g-162063249" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-5 h-5 mr-2" />
                    Connect on LinkedIn
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Contact;