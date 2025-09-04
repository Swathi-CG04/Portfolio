import { ArrowDown, Download, Github, Linkedin, Mail, Award, Layers } from 'lucide-react'; 
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-bg.jpg';
import profileImage from '@/assets/profile.jpg'; // <-- replace with your actual image

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 hero-gradient opacity-80"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* LEFT SIDE - Text */}
          <div className="text-left">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
              Hi, I'm{' '}
              <span className="whitespace-nowrap text-5xl md:text-7xl font-bold text-white">
                Swathi C G
              </span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl font-semibold text-white/90 mb-8 animate-fade-in">
              Computer Science Major
            </h2>
            
            <p className="text-lg md:text-xl text-white/80 mb-12 max-w-xl leading-relaxed animate-fade-in">
              Computer Science student at PES University, curious about technology and how it connects with everyday
              life. I enjoy learning new things, exploring ideas, and discovering cool ways tech can make life easier.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-start gap-4 mb-12 animate-fade-in">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 transition-smooth shadow-card-hover font-semibold px-8"
              >
                <Download className="mr-2 h-5 w-5" />
                <a href="/Swathi_Resume.pdf" download>Download Resume</a>
              </Button>

              <div className="flex items-center gap-3">
                {/* GitHub */}
                <Button 
                  variant="outline" 
                  size="lg"
                  className="bg-white/10 border-white/30 text-white hover:bg-white/20 transition-smooth"
                  asChild
                >
                  <a href="https://github.com/Swathi-CG04" target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
                
                {/* LinkedIn */}
                <Button 
                  variant="outline" 
                  size="lg"
                  className="bg-white/10 border-white/30 text-white hover:bg-white/20 transition-smooth"
                  asChild
                >
                  <a href="https://www.linkedin.com/in/swathi-c-g-162063249" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
                
                {/* Mail */}
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-white/10 border-white/30 text-white hover:bg-white/20 transition-smooth"
                  onClick={() => window.open("https://mail.google.com/mail/?view=cm&to=swathicg.2004@gmail.com", "_blank")}
                >
                  <Mail className="h-5 w-5" />
                </Button>

                {/* Credly */}
                <Button 
                  variant="outline" 
                  size="lg"
                  className="bg-white/10 border-white/30 text-white hover:bg-white/20 transition-smooth"
                  asChild
                >
                  <a href="https://www.credly.com/users/swathi-c-g.39f8779e" target="_blank" rel="noopener noreferrer">
                    <Award className="h-5 w-5" />
                  </a>
                </Button>

                {/* Microsoft Learn */}
                <Button 
                  variant="outline" 
                  size="lg"
                  className="bg-white/10 border-white/30 text-white hover:bg-white/20 transition-smooth"
                  asChild
                >
                  <a href="https://learn.microsoft.com/en-us/users/swathicg-3055/" target="_blank" rel="noopener noreferrer">
                    <Layers className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>

            {/* Arrow down */}
            <button 
              onClick={scrollToAbout}
              className="animate-bounce text-white/70 hover:text-white transition-smooth"
              aria-label="Scroll to about section"
            >
              <ArrowDown size={32} />
            </button>
          </div>

          {/* RIGHT SIDE - Portrait Image */}
          <div className="flex justify-center">
            <img 
              src={profileImage} 
              alt="Swathi C G" 
              className="rounded-2xl shadow-xl w-72 h-[420px] object-cover border-4 border-white/30"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
