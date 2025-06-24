import Header from '@/components/Header';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import SkillsSection from '@/components/sections/SkillsSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import ContactSection from '@/components/sections/ContactSection';
import AnimatedSection from '@/components/ui/AnimatedSection';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <HeroSection />

        <AnimatedSection id="about" className="bg-white">
          <AboutSection />
        </AnimatedSection>
        
        <AnimatedSection id="skills" className="bg-gray-50">
          <SkillsSection />
        </AnimatedSection>

        <section id="projects" className="py-16 sm:py-20 md:py-24 bg-white">
          <ProjectsSection />
        </section>
        
        <section id="experience" className="py-16 sm:py-20 md:py-24 bg-gray-50">
          <ExperienceSection />
        </section>

        <AnimatedSection id="contact" className="bg-white">
          <ContactSection />
        </AnimatedSection>
      </main>
    </div>
  );
}
