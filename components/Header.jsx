import React from 'react';

export default function Header() {
  return (
    <header style={styles.header}>
      <div style={styles.logoContainer}>
        <span style={styles.logoCode}>const</span>
        <span style={styles.logoName}>krishShah</span>
        <span style={styles.logoAccess}>.ai()</span>
      </div>
      
      <nav style={styles.nav}>
        <a href="#about" style={styles.navLink}>[01] About</a>
        <a href="#projects" style={styles.navLink}>[02] Projects</a>
        <a href="#skills" style={styles.navLink}>[03] Skills</a>
        <a href="#ml-playground" style={styles.navLink}>[04] ML Lab</a>
        <a href="#contact" style={styles.navLink}>[05] Contact</a>
      </nav>

      <div style={styles.statusBadge}>
        <span className="pulse-dot"></span>
        <span style={styles.statusText}>active: data_pipeline.py</span>
      </div>
    </header>
  );
}

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px 0',
    borderBottom: '1px solid var(--border-color)',
    position: 'sticky',
    top: 0,
    backgroundColor: 'rgba(7, 10, 19, 0.85)',
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)',
    zIndex: 100,
  },
  logoContainer: {
    fontFamily: 'var(--mono)',
    fontSize: '1.2rem',
    fontWeight: 'bold',
  },
  logoCode: {
    color: 'var(--accent-purple)',
    marginRight: '6px',
  },
  logoName: {
    color: 'var(--text-primary)',
  },
  logoAccess: {
    color: 'var(--accent-cyan)',
  },
  nav: {
    display: 'flex',
    gap: '24px',
  },
  navLink: {
    fontFamily: 'var(--mono)',
    fontSize: '0.9rem',
    color: 'var(--text-secondary)',
    transition: 'color 0.2s ease',
  },
  statusBadge: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    backgroundColor: 'rgba(16, 185, 129, 0.1)',
    border: '1px solid rgba(16, 185, 129, 0.2)',
    padding: '6px 12px',
    borderRadius: '20px',
  },
  statusText: {
    fontFamily: 'var(--mono)',
    fontSize: '0.75rem',
    color: 'var(--accent-green)',
  }
};
