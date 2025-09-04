import { Trophy, Star, Users, BookOpen, Award, Target } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Achievements = () => {
  const achievements = [
  {
    category: "College Clubs",
    icon: Users,
    color: "text-accent-cyan",
    bgColor: "bg-accent-cyan/10",
    items: [
      {
        title: "Member - Vegavath Racing Club",
        //description: "Participate in vehicle design, racing events, and technical workshops organized by the club.",
        year: "Oct 2023 – Present",
        level: "University Level"
      },
      {
        title: "Member - Rotaract Club of PES University",
        //description: "Engage in community service, event organization, and social initiatives with fellow members.",
        year: "Oct 2023 – Present",
        level: "University Level"
      }
    ]
  },
  {
    category: "Research & Publications",
    icon: Star,
    color: "text-success",
    bgColor: "bg-success/10",
    items: [
      {
        title: "Secure method of transferring confidential documents by leveraging Zero Trust Principles and Blockchain Technology",
        description: "Co-authored paper on secure document transfer leveraging Zero Trust and Blockchain principles.",
        year: "2024",
        level: "IEEE ICTBIG2023"
      }
    ]
  }
];

  const stats = [
    { label: "Students Mentored", value: "100+", icon: Users },
    { label: "Research Papers", value: "1", icon: BookOpen },
    { label: "Certifications", value: "1", icon: Award },
    { label: "Badges Earned (Credly & Microsoft)", value: "50+", icon: Badge } // for Credly, Microsoft, etc.
  ];


  return (
    <section id="achievements" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-foreground">
            Achievements & Recognition
          </h2>

          {/* Stats Overview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <Card 
                key={index}
                className="shadow-card hover:shadow-card-hover transition-smooth border-0 bg-card text-center group hover:-translate-y-1"
              >
                <CardContent className="p-6">
                  <div className="p-3 bg-primary/10 rounded-lg w-fit mx-auto mb-4 group-hover:bg-primary/20 transition-smooth">
                    <stat.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-2xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Achievement Categories */}
          <div className="space-y-12">
            {achievements.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-3 ${category.bgColor} rounded-lg`}>
                    <category.icon className={`h-6 w-6 ${category.color}`} />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground">{category.category}</h3>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {category.items.map((item, itemIndex) => (
                    <Card 
                      key={itemIndex}
                      className="shadow-card hover:shadow-card-hover transition-smooth border-0 bg-card group"
                    >
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <CardTitle className="text-lg text-foreground group-hover:text-primary transition-smooth mb-2">
                              {item.title}
                            </CardTitle>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <span>{item.year}</span>
                              <span>•</span>
                              <Badge 
                                variant="secondary"
                                className={`${category.bgColor} ${category.color} border-0 text-xs`}
                              >
                                {item.level}
                              </Badge>
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      
                      <CardContent>
                        <p className="text-muted-foreground leading-relaxed">
                          {item.description}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;