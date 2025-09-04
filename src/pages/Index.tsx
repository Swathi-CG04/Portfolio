import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
//import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Achievements />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="bg-[#0d40a5] text-gray-300 py-8 mt-16">
      <div className="container mx-auto px-6 text-center space-y-4">
    

    {/* Signature Line */}
    <p className="text-sm italic">
      Crafted by Swathi with love ❤️, coffee ☕ and curiosity 💡
    </p>

    {/* Copyright */}
    <p className="text-xs text-gray-500">
      © {new Date().getFullYear()} Swathi C G. All rights reserved.
    </p>
  </div>
</footer>

    </div>
  );
};

export default Index;
