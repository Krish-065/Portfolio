import React, { useState, useEffect, useRef } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('about');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  
  const dropdownRef = useRef(null);

  const navLinks = [
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'ML Lab', href: '#ml-playground', id: 'ml-playground' }
  ];

  const pageLinks = [
    { label: 'About Page', href: '#about', id: 'about' },
    { label: 'Projects Page', href: '#projects', id: 'projects' },
    { label: 'Skills Page', href: '#skills', id: 'skills' },
    { label: 'ML Lab Page', href: '#ml-playground', id: 'ml-playground' },
    { label: 'Contact Page', href: '#contact', id: 'contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Toggle glassy background on scroll
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // ScrollSpy: check which section is in view
      const scrollPosition = window.scrollY + 200;

      const allSections = ['about', 'projects', 'skills', 'ml-playground', 'contact'];
      for (let i = allSections.length - 1; i >= 0; i--) {
        const id = allSections[i];
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    // Close dropdown when clicking outside
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    setDropdownOpen(false);
    
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 90; // offset to account for sticky navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className={`navbar-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Logo Section */}
        <div className="navbar-logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <span className="logo-code">const</span>
          <span className="logo-name">krishShah</span>
          <span className="logo-access">.ai()</span>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="navbar-desktop-links">
          {/* Pages Dropdown */}
          <div className="navbar-dropdown-wrapper" ref={dropdownRef}>
            <button 
              className={`navbar-link navbar-dropdown-btn ${dropdownOpen ? 'open' : ''}`}
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              [📂] Pages <span className="dropdown-arrow">▼</span>
            </button>
            <div className={`navbar-dropdown-menu ${dropdownOpen ? 'show' : ''}`}>
              {pageLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`dropdown-item ${activeSection === link.id ? 'active' : ''}`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className={`navbar-link ${activeSection === link.id ? 'active' : ''}`}
            >
              [{activeSection === link.id ? '●' : '○'}] {link.label}
            </a>
          ))}
        </nav>

        {/* Active Status Badge */}
        <div className="navbar-status-badge">
          <span className="pulse-dot"></span>
          <span className="status-text">active: data_pipeline.py</span>
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          className={`navbar-hamburger ${mobileMenuOpen ? 'open' : ''}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <div className={`navbar-mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <nav className="navbar-mobile-links">
          <div className="mobile-section-header">// Pages</div>
          {pageLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className={`navbar-mobile-link ${activeSection === link.id ? 'active' : ''}`}
            >
              {link.label}
            </a>
          ))}
          <div className="navbar-mobile-status">
            <span className="pulse-dot"></span>
            <span className="status-text">active: data_pipeline.py</span>
          </div>
        </nav>
      </div>
    </header>
  );
}
