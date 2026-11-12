import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, FileText } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Projects', href: '#projects' },
    { name: 'Research', href: '#research' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Coding', href: '#coding' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-canvas/90 backdrop-blur-md border-b border-canvas-border shadow-subtle py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Monogram */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-cobalt rounded-lg"
          >
            <div className="w-10 h-10 rounded-lg bg-charcoal-900 text-canvas flex items-center justify-center font-heading font-bold text-sm tracking-wider shadow-sm group-hover:bg-cobalt transition-colors">
              KS
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-base tracking-tight text-charcoal-900 leading-none">
                {personalInfo.name}
              </span>
              <span className="text-[11px] font-mono uppercase tracking-wider text-charcoal-500 mt-1">
                AI/ML • Quant • Dev
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-1.5 text-xs lg:text-sm font-medium rounded-md transition-colors relative ${
                    isActive
                      ? 'text-cobalt font-semibold bg-cobalt-light/60'
                      : 'text-charcoal-700 hover:text-charcoal-900 hover:bg-canvas-subtle'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Desktop Actions & Status */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-[12px] font-medium text-emerald-800">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Available for Roles</span>
            </div>

            {/* Resume Button */}
            <a
              href={personalInfo.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-lg bg-charcoal-900 text-canvas hover:bg-cobalt transition-colors shadow-sm"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Résumé</span>
              <ArrowUpRight className="w-3 h-3 text-canvas/70" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={personalInfo.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-charcoal-700 hover:text-charcoal-900"
              title="View Resume"
            >
              <FileText className="w-4 h-4" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-charcoal-700 hover:text-charcoal-900 hover:bg-canvas-subtle focus:outline-none focus:ring-2 focus:ring-cobalt"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-canvas-border bg-canvas/98 backdrop-blur-xl px-4 pt-3 pb-6 shadow-floating animate-in fade-in duration-200">
          <div className="flex flex-col gap-1.5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium rounded-lg text-charcoal-800 hover:bg-canvas-subtle hover:text-cobalt transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 mt-2 border-t border-canvas-border flex flex-col gap-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-50 text-xs font-medium text-emerald-800">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Available for AI/ML & Dev Roles</span>
              </div>
              <a
                href={personalInfo.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 text-xs font-semibold rounded-lg bg-charcoal-900 text-canvas hover:bg-cobalt transition-colors"
              >
                <FileText className="w-4 h-4" />
                <span>Download Résumé (PDF)</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

