import React, { useState, useEffect } from 'react';
import { BackgroundLattice } from './components/BackgroundLattice';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeaturedProjects } from './components/FeaturedProjects';
import { ResearchSection } from './components/ResearchSection';
import { SecondaryProjects } from './components/SecondaryProjects';
import { SkillsSection } from './components/SkillsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { CertificationsSection } from './components/CertificationsSection';
import { CodingProfiles } from './components/CodingProfiles';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CaseStudyModal } from './components/CaseStudyModal';
import { Project } from './types';

export const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeSection, setActiveSection] = useState<string>('hero');

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['projects', 'research', 'skills', 'experience', 'coding', 'about', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            return;
          }
        }
      }
      if (window.scrollY < 300) {
        setActiveSection('hero');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-canvas text-charcoal-900 font-sans selection:bg-cobalt selection:text-white relative">
      {/* Background Interactive Lattice (Low Alpha Canvas) */}
      <BackgroundLattice />

      {/* Sticky Editorial Navbar */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero />
        <FeaturedProjects onSelectProject={(project) => setSelectedProject(project)} />
        <ResearchSection />
        <SecondaryProjects />
        <SkillsSection />
        <ExperienceSection />
        <CertificationsSection />
        <CodingProfiles />
        <AboutSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* In-depth Interactive Case Study Modal */}
      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
};

export default App;

