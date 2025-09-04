import { GraduationCap, Heart, Code, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-foreground">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="hero-gradient-subtle p-8 rounded-2xl">
                <h3 className="text-2xl font-semibold mb-4 text-primary">Hello! 👋</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  I’m Swathi, a Computer Science student at PES University with a passion for 
                  building practical tech solutions. I enjoy learning new technologies, tackling 
                  challenges, and collaborating on projects. 
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Beyond coding, I enjoy discovering new places, experiencing different cultures, and 
                  learning from everyday experiences. I like reading about a variety of topics, from 
                  technology to lifestyle, and I value moments that inspire creativity and curiosity in my 
                  daily life.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <Card className="shadow-card hover:shadow-card-hover transition-smooth border-0 bg-card">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg mr-4">
                      <GraduationCap className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg text-foreground">Education</h4>
                      <p className="text-muted-foreground">Computer Science Engineering, PES University</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-card hover:shadow-card-hover transition-smooth border-0 bg-card">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-accent/10 rounded-lg mr-4">
                      <Code className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg text-foreground">Interests</h4>
                      <p className="text-muted-foreground">Cyber Security, Blockchain, Cloud Computing, AI/ML</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-card hover:shadow-card-hover transition-smooth border-0 bg-card">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-accent-cyan/10 rounded-lg mr-4">
                      <Users className="h-6 w-6 text-accent-cyan" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg text-foreground">Leadership</h4>
                      <p className="text-muted-foreground">Teaching Assistant & Research Intern</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-card hover:shadow-card-hover transition-smooth border-0 bg-card">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-success/10 rounded-lg mr-4">
                      <Heart className="h-6 w-6 text-success" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg text-foreground">Hobbies</h4>
                      <p className="text-muted-foreground">Travel, Reading, Mentoring</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;