import React from 'react';

export default function Footer() {
  return (
    <footer id="contact" style={styles.footer}>
      <div className="glass-card glow-cyan-hover" style={styles.contactCard}>
        <div style={styles.leftCol}>
          <h2 style={styles.ctaTitle}>Let's build something intelligent together.</h2>
          <p style={styles.ctaDesc}>
            Whether you want to build predictive pipelines, deploy deep learning models, or just talk about clean code and algorithms—my inbox is always open.
          </p>
          <a href="mailto:krishshah8201@gmail.com" style={styles.emailBtn}>
            krishshah8201@gmail.com
          </a>
        </div>
        
        <div style={styles.rightCol}>
          <div style={styles.linksHeader}>// CONNECT_METADATA</div>
          <div style={styles.socialGrid}>
            <a href="https://github.com/Krish-065" target="_blank" rel="noreferrer" style={styles.socialLink}>
              <svg style={styles.icon} viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub (Krish-065)
            </a>
            
            <a href="https://www.linkedin.com/in/krishshah065/" target="_blank" rel="noreferrer" style={styles.socialLink}>
              <svg style={styles.icon} viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              LinkedIn (krishshah065)
            </a>
          </div>
        </div>
      </div>
      
      <div style={styles.copyrightRow}>
        <div style={styles.license}>
          <span style={styles.terminalPrompt}>$</span>echo $LICENSE 
          <span style={styles.licenseVal}> &gt; MIT_License (Krish Shah)</span>
        </div>
<<<<<<< HEAD
=======
        <div style={styles.author}>
          Made with ⚛ React & Vite • © {new Date().getFullYear()}
        </div>
>>>>>>> 2f050853313dbe04190aac999127b2270c44282b
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '40px',
    marginTop: '60px',
  },
  contactCard: {
    display: 'grid',
    gridTemplateColumns: '1.2fr 0.8fr',
    gap: '40px',
    textAlign: 'left',
    padding: '40px',
    borderColor: 'rgba(255, 255, 255, 0.04)',
  },
  leftCol: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  ctaTitle: {
    fontSize: '1.8rem',
    margin: 0,
    background: 'linear-gradient(90deg, #fff 50%, var(--accent-purple) 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    color: 'transparent',
  },
  ctaDesc: {
    color: 'var(--text-secondary)',
    lineHeight: '1.6',
    fontSize: '1rem',
    margin: 0,
  },
  emailBtn: {
    alignSelf: 'flex-start',
    backgroundColor: 'var(--accent-purple)',
    color: '#070a13',
    padding: '12px 24px',
    borderRadius: '8px',
    fontWeight: '600',
    fontFamily: 'var(--mono)',
    boxShadow: '0 4px 14px rgba(192, 132, 252, 0.4)',
    transition: 'all 0.3s ease',
  },
  rightCol: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    borderLeft: '1px solid rgba(255, 255, 255, 0.05)',
    paddingLeft: '40px',
  },
  linksHeader: {
    fontFamily: 'var(--mono)',
    color: 'var(--accent-cyan)',
    fontSize: '0.85rem',
  },
  socialGrid: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  socialLink: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    color: 'var(--text-primary)',
    fontSize: '1.05rem',
    transition: 'color 0.2s ease',
  },
  icon: {
    width: '20px',
    height: '20px',
  },
  copyrightRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTop: '1px solid var(--border-color)',
    paddingTop: '24px',
    fontFamily: 'var(--mono)',
    fontSize: '0.8rem',
    color: 'var(--text-secondary)',
  },
  terminalPrompt: {
    color: 'var(--accent-cyan)',
    marginRight: '6px',
  },
  license: {
    display: 'flex',
    alignItems: 'center',
  },
  licenseVal: {
    color: 'var(--accent-purple)',
  },
  author: {
    color: 'var(--text-secondary)',
  }
};
