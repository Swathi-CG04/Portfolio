import { ExternalLink, Github } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import project1Image from '@/assets/project-1.jpg';
import project2Image from '@/assets/project-2.jpg';
import project3Image from '@/assets/project-3.jpg';

const Projects = () => {
  const projects = [
    {
      title: "Smart Analytics Dashboard",
      description: "A comprehensive data visualization platform built with React and D3.js, featuring real-time analytics, interactive charts, and machine learning insights for business intelligence.",
      image: project1Image,
      technologies: ["React", "TypeScript", "D3.js", "Node.js", "MongoDB"],
      githubUrl: "https://github.com",
      liveUrl: "https://demo.com",
      featured: true
    },
    {
      title: "Blockchain Voting System",
      description: "Decentralized voting application using Ethereum smart contracts, ensuring transparency and security in digital elections with React frontend and Web3 integration.",
      image: project2Image,
      technologies: ["Solidity", "React", "Web3.js", "Ethereum", "IPFS"],
      githubUrl: "https://github.com",
      liveUrl: "https://demo.com",
      featured: true
    },
    {
      title: "AI-Powered Study Assistant",
      description: "Machine learning application that helps students optimize their study patterns using natural language processing and predictive analytics for personalized learning.",
      image: project3Image,
      technologies: ["Python", "TensorFlow", "Flask", "React", "SQLite"],
      githubUrl: "https://github.com",
      liveUrl: "https://demo.com",
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-foreground">
            Featured Projects
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index}
                className="group shadow-card hover:shadow-card-hover transition-smooth border-0 bg-card overflow-hidden hover:-translate-y-2"
              >
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-48 object-cover transition-smooth group-hover:scale-105"
                    />
                    {project.featured && (
                      <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">
                        Featured
                      </Badge>
                    )}
                  </div>
                </CardHeader>

                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-smooth">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex}
                        variant="secondary"
                        className="text-xs bg-primary/10 text-primary border-0"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="p-6 pt-0 flex gap-3">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1 border-primary/20 hover:bg-primary hover:text-primary-foreground transition-smooth"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  
                  <Button 
                    size="sm" 
                    className="flex-1 bg-primary hover:bg-primary/90 transition-smooth"
                    asChild
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary/20 hover:bg-primary hover:text-primary-foreground transition-smooth"
              asChild
            >
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                View All Projects on GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;