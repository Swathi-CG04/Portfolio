import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: "💻",
      skills: ["Python", "Java ","C","Golang (Beginner)", "JavaScript"]
    },
    {
      title: "Web/Frameworks",
      icon: "🌐",
      skills: ["ReactJS", "Vue.Spring Boot", "CSS3", "Tailwind CSS"]
    },
    {
      title: "Backend Development", 
      icon: "⚙️",
      skills: ["Node.js", "Express.js", "REST APIs"]
    },
    {
      title: "Databases",
      icon: "🗄️",
      skills: ["MongoDB", "MySQL"]
    },
    {
      title: "Cloud & DevOps",
      icon: "☁️",
      skills: ["Azure", "GCP", "Docker", "Git", "Kubernetes"]
    },
    {
      title: "AI/ML & Blockchain",
      icon: "🤖",
      skills: ["TensorFlow", "PyTorch", "Ethereum", "Web3.js", "Smart Contracts", "IPFS"]
    },
    {
      title: "Quantum",
      icon: "⚛️",
      skills: ["Qiskit", "Quantum Key Distribution (QKD)", "Post-Quantum Cryptography (PQC)"]
    },
    {
      title: "Core CS",
      icon: "🖥️",
      skills: ["Data Structures & Algorithms", "OOP", "Applied Cryptography", "Computer Network Security", "Blockchain", "Robotics"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-foreground">
            Skills & Technologies
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <Card 
                key={index}
                className="shadow-card hover:shadow-card-hover transition-smooth border-0 bg-card group hover:-translate-y-1"
              >
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-3 text-lg">
                    <span className="text-2xl">{category.icon}</span>
                    <span className="text-foreground group-hover:text-primary transition-smooth">
                      {category.title}
                    </span>
                  </CardTitle>
                </CardHeader>
                
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex}
                        variant="secondary"
                        className="bg-primary/10 text-primary border-0 hover:bg-primary hover:text-primary-foreground transition-smooth cursor-default"
                      >
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
};

export default Skills;