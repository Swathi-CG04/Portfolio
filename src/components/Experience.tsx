import { MapPin, Calendar, Award, Building2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Experience = () => {
  const experiences = [
    {
      title: "Teaching Assistant - Mathematics for Computer Science Engineers",
      company: "PES University",
      location: "Bengaluru, India",
      period: "Jun 2025 – Present",
      type: "Part-time",
      description: "Design and facilitate experiential learning labs covering Web Scraping, Data Cleaning, Visualization, Normal Probability Plots, Confidence Intervals, Hypothesis Testing, Regression, and Optimization, helping students connect theory with real-world data applications.",
      achievements: [
        "Conducted interactive lab sessions for 50+ students",
        "Guided students to apply statistical and data concepts practically",
        "Assisted in improving lab completion and understanding rates"
      ]
    },
    {
      title: "Research Intern",
      company: "Center for Computer Networks and Cyber Security (CCNCS), PES University",
      location: "Bengaluru, India",
      period: "Jun 2024 – Jul 2024",
      type: "Internship",
      description: "Worked on a blockchain research project titled 'A Secure method of transferring confidential documents by leveraging Zero Trust Principles and Blockchain Technology'.",
      achievements: [
        "Presented research at IEEE’s ICTBIG2023",
        "Strengthened implementation skills with Hyperledger, Ethereum, and MFA protocols",
        "Developed secure document transfer proofs-of-concept"
      ]
    },
    {
      title: "Intern",
      company: "Consortium of Electronic Industries of Karnataka (CLIK)",
      location: "Bengaluru, India",
      period: "Jan 2025 – Feb 2025",
      type: "Internship",
      description: "Contributed to the successful execution of CLIKTRONIKA 2025, a major industry event. Managed databases and ensured smooth integration and system performance.",
      achievements: [
        "Handled data management efficiently for CLIKTRONIKA 2025",
        "Improved system performance and integration workflow",
        "Enhanced communication, teamwork, and organizational skills through hands-on experience"
      ]
    }
  ];
  const volunteering = [
    {
      title: "International Guest Management",
      company: "Bengluru Comic Con",
      location: "Bengaluru, India",
      period: "Oct 2024 – Jan 2025",
      type: "Volunteer",
      description: "Volunteered as part of the International Guest Management team at Bengaluru Comic Con, assisting with coordination, hospitality, and smooth interactions between international guests and event organizers, ensuring a seamless experience for both guests and attendees.",
      achievements: [
        "Supported the hospitality and scheduling needs of international guests",
        "Coordinated with the event team to manage guest requirements",
        "Contributed to creating a welcoming and professional environment for guests and fans"
      ]
    },
  ];


  const certifications = [
    {
      name: "Microsoft Certified: Azure AI Fundamentals",
      issuer: "Microsoft",
      date: "February 10, 2025",
      credentialId: "DD63BE751EED0AB0",
      
    }
  ];

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-foreground">
            Experience & Certifications
          </h2>
          
          {/* Experience Timeline */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-8 text-center text-foreground">Professional Experience</h3>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <Card 
                  key={index}
                  className="shadow-card hover:shadow-card-hover transition-smooth border-0 bg-card"
                >
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div>
                        <CardTitle className="text-xl text-foreground mb-2">{exp.title}</CardTitle>
                        <div className="flex items-center gap-2 text-muted-foreground mb-2">
                          <Building2 className="h-4 w-4" />
                          <span className="font-medium">{exp.company}</span>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            <span>{exp.location}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            <span>{exp.period}</span>
                          </div>
                        </div>
                      </div>
                      <Badge 
                        variant="secondary"
                        className="bg-primary/10 text-primary border-0 w-fit"
                      >
                        {exp.type}
                      </Badge>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {exp.description}
                    </p>
                    
                    <div>
                      <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                        <Award className="h-4 w-4 text-accent" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li 
                            key={achIndex}
                            className="text-muted-foreground text-sm flex items-start gap-2"
                          >
                            <span className="text-accent mt-1">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
            <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-8 text-center text-foreground">Volunteering Experience</h3>
            <div className="space-y-8">
              {volunteering.map((exp, index) => (
                <Card 
                  key={index}
                  className="shadow-card hover:shadow-card-hover transition-smooth border-0 bg-card"
                >
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div>
                        <CardTitle className="text-xl text-foreground mb-2">{exp.title}</CardTitle>
                        <div className="flex items-center gap-2 text-muted-foreground mb-2">
                          <Building2 className="h-4 w-4" />
                          <span className="font-medium">{exp.company}</span>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            <span>{exp.location}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            <span>{exp.period}</span>
                          </div>
                        </div>
                      </div>
                      <Badge 
                        variant="secondary"
                        className="bg-primary/10 text-primary border-0 w-fit"
                      >
                        {exp.type}
                      </Badge>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {exp.description}
                    </p>
                    
                    <div>
                      <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                        <Award className="h-4 w-4 text-accent" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li 
                            key={achIndex}
                            className="text-muted-foreground text-sm flex items-start gap-2"
                          >
                            <span className="text-accent mt-1">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-center text-foreground">Certifications</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <Card 
                  key={index}
                  className="shadow-card hover:shadow-card-hover transition-smooth border-0 bg-card group hover:-translate-y-1"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-smooth">
                          {cert.name}
                        </h4>
                        <p className="text-muted-foreground text-sm mb-2">{cert.issuer}</p>
                        <p className="text-muted-foreground text-xs">{cert.date}</p>
                      </div>
                    </div>
                    
                    <div className="text-xs text-muted-foreground">
                      ID: {cert.credentialId}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;