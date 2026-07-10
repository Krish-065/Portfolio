import React, { useState, useEffect } from 'react';

export default function About() {
  // Roles for typewriter effect
  const roles = [
    "Krish Shah",
    "IT Engineering Student",
    "Data Scientist & ML Enthusiast",
    "Full-Stack Developer"
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    let timer;
    const currentFullText = roles[currentRoleIndex];

    if (!isDeleting) {
      timer = setTimeout(() => {
        setDisplayText(currentFullText.slice(0, displayText.length + 1));
        setTypingSpeed(80 + Math.random() * 40);
      }, typingSpeed);

      if (displayText === currentFullText) {
        timer = setTimeout(() => setIsDeleting(true), 2500);
      }
    } else {
      timer = setTimeout(() => {
        setDisplayText(currentFullText.slice(0, displayText.length - 1));
        setTypingSpeed(35);
      }, typingSpeed);

      if (displayText === '') {
        setIsDeleting(false);
        setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
        setTypingSpeed(150);
      }
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentRoleIndex]);

  // Real projects list fetched from Krish-065's GitHub profile
  const projects = [
    {
      title: "NyayMitra (AI Legal Assistant)",
      type: "AI & Fullstack Dev",
      description: "An AI-powered legal assistant for Indian laws featuring an interactive general chatbot and a specialized Pro Case Strategy Room for structural analysis.",
      github: "https://github.com/Krish-065/nyaymitra",
      tags: ["React.js", "Node.js", "AI Integration", "MongoDB"]
    },
    {
      title: "Space Data Science Analytics",
      type: "Data Science & ML",
      description: "Practical implementations of core data science concepts and predictive modeling on real-life space exploration and astronomical datasets.",
      github: "https://github.com/Krish-065/Learning-Data-Science-with-Space",
      tags: ["Jupyter", "Pandas", "Scikit-Learn", "Data Viz"]
    },
    {
      title: "NonStock PricePulse",
      type: "Quantitative Web App",
      description: "A high-performance stock and market intelligence terminal dashboard providing price polling and algorithmic visualization strategies.",
      github: "https://github.com/Krish-065/NonStock-prisepulse-",
      tags: ["React", "TradingView API", "WebSocket", "Lightweight Charts"]
    },
    {
      title: "Sales Trend Analyzer",
      type: "Business Intelligence",
      description: "A data analytics pipeline designed to explore e-commerce sales trends, cluster consumer behaviors, and forecast seasonal sales metrics.",
      github: "https://github.com/Krish-065/Sales-analyzer",
      tags: ["Python", "Jupyter Notebook", "Regression Models"]
    }
  ];

  return (
    <div style={styles.container}>
      {/* Bio Segment */}
      <section id="about" className="glass-card glow-cyan-hover" style={styles.aboutSection}>
        <div style={styles.headerArea}>
          <div style={styles.introText}>
            <span style={styles.subtext}>// System.out.println("Hello, World!");</span>
            <div style={styles.titleContainer}>
              <h1 style={styles.title}>
                Hi, I'm <br />
                <span style={styles.roleText}>{displayText}</span>
                <span className="typewriter-cursor"></span>
              </h1>
            </div>
            <p style={styles.bio}>
              I am **Krish Shah**, an ambitious **B.Tech Information Technology** student at **Charusat University (Anand, Gujarat)**, looking forward to building a career in **Data Science and Machine Learning**. I specialize in creating software solutions that integrate intelligence, scalable backend architectures, and clean user interfaces.
            </p>
            <div style={styles.btnRow}>
              <a 
                href="/Krish_Shah_Resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={styles.resumeBtn}
              >
                <svg style={styles.btnIcon} viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM17 13l-5 5-5-5h3V9h4v4h3z"/>
                </svg>
                View Resume (PDF)
              </a>
            </div>
          </div>
          
          <div style={styles.terminalSide}>
            <div className="terminal-box">
              <div className="terminal-header">
                <span className="terminal-dot dot-red"></span>
                <span className="terminal-dot dot-yellow"></span>
                <span className="terminal-dot dot-green"></span>
                <span className="terminal-title">krish_shah.json</span>
              </div>
              <div className="terminal-body">
                <p><span className="terminal-prompt">$</span>cat developer.json</p>
                <pre style={styles.jsonContent}>
{`{
  "name": "Krish Shah",
  "education": "B.Tech IT @ Charusat University",
  "location": "Anand, Gujarat",
  "cgpa": "7.50 / 10.0",
  "sgpa_record": {
    "sem_1": 8.11,
    "sem_2": 7.25,
    "sem_3": 7.27,
    "sem_4": 7.36
  },
  "aims": ["Deep Learning", "Data Pipelines", "AI Dashboards"]
}`}
                </pre>
              </div>
            </div>
          </div>
        </div>

        {/* Core metrics */}
        <div className="metrics-grid">
          <div className="metric-card">
            <div className="metric-value">7.50</div>
            <div className="metric-label">Cumulative CGPA</div>
          </div>
          <div className="metric-card">
            <div className="metric-value">10+</div>
            <div className="metric-label">Git Repositories</div>
          </div>
          <div className="metric-card">
            <div className="metric-value">25+</div>
            <div className="metric-label">Models Trained</div>
          </div>
          <div className="metric-card">
            <div className="metric-value">600+</div>
            <div className="metric-label">Code Commits</div>
          </div>
        </div>
      </section>

      {/* Featured Projects Segment */}
      <section id="projects" style={styles.projectsSection}>
        <h2 className="section-title">
          <span>02_</span>Featured Repositories & Work
        </h2>
        
        <div style={styles.projectsGrid}>
          {projects.map((proj, idx) => (
            <div 
              key={idx} 
              className="glass-card glow-purple-hover" 
              style={styles.projectCard}
            >
              <div style={styles.projHeader}>
                <span style={styles.projBadge}>[{proj.type}]</span>
                <a 
                  href={proj.github} 
                  target="_blank" 
                  rel="noreferrer" 
                  style={styles.projGithubLink}
                >
                  <svg style={styles.gitIcon} viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </div>
              
              <h3 style={styles.projTitle}>{proj.title}</h3>
              <p style={styles.projDesc}>{proj.description}</p>
              
              <div style={styles.tagsContainer}>
                {proj.tags.map((tag, tIdx) => (
                  <span key={tIdx} style={styles.tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: '80px',
  },
  aboutSection: {
    display: 'flex',
    flexDirection: 'column',
    gap: '32px',
    marginTop: '40px',
  },
  headerArea: {
    display: 'grid',
    gridTemplateColumns: '1.25fr 0.75fr',
    gap: '40px',
    alignItems: 'center',
  },
  introText: {
    textAlign: 'left',
  },
  subtext: {
    fontFamily: 'var(--mono)',
    color: 'var(--accent-purple)',
    fontSize: '0.95rem',
  },
  titleContainer: {
    minHeight: '140px',
    display: 'flex',
    alignItems: 'center',
  },
  title: {
    fontSize: '2.5rem',
    margin: '12px 0 20px 0',
    color: '#fff',
    lineHeight: '1.2',
  },
  roleText: {
    background: 'linear-gradient(90deg, var(--accent-cyan) 0%, var(--accent-purple) 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    color: 'transparent',
  },
  bio: {
    fontSize: '1.05rem',
    lineHeight: '1.7',
    color: 'var(--text-secondary)',
    margin: 0,
  },
  terminalSide: {
    width: '100%',
  },
  jsonContent: {
    margin: '12px 0 0 0',
    color: '#34d399',
    fontFamily: 'var(--mono)',
    fontSize: '0.85rem',
    whiteSpace: 'pre-wrap',
  },
  projectsSection: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'left',
  },
  projectsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
    gap: '24px',
    marginTop: '20px',
  },
  projectCard: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    minHeight: '260px',
    padding: '24px',
    borderColor: 'rgba(255, 255, 255, 0.04)',
  },
  projHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '16px',
  },
  projBadge: {
    fontFamily: 'var(--mono)',
    color: 'var(--accent-cyan)',
    fontSize: '0.8rem',
    fontWeight: 'bold',
  },
  projGithubLink: {
    color: 'var(--text-secondary)',
    transition: 'color 0.2s',
  },
  gitIcon: {
    width: '20px',
    height: '20px',
  },
  projTitle: {
    fontSize: '1.25rem',
    margin: '0 0 10px 0',
    color: 'var(--text-primary)',
  },
  projDesc: {
    color: 'var(--text-secondary)',
    fontSize: '0.9rem',
    lineHeight: '1.6',
    flexGrow: 1,
    margin: '0 0 20px 0',
  },
  tagsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
  },
  tag: {
    fontSize: '0.75rem',
    fontFamily: 'var(--mono)',
    backgroundColor: 'rgba(255, 255, 255, 0.04)',
    color: 'var(--text-secondary)',
    padding: '4px 8px',
    borderRadius: '4px',
    border: '1px solid rgba(255, 255, 255, 0.05)',
  },
  btnRow: {
    marginTop: '24px',
  },
  resumeBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '10px',
    backgroundColor: 'transparent',
    color: 'var(--accent-cyan)',
    border: '2px solid var(--accent-cyan)',
    padding: '10px 20px',
    borderRadius: '8px',
    fontWeight: '600',
    fontFamily: 'var(--mono)',
    fontSize: '0.9rem',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 0 10px rgba(0, 242, 254, 0.1)',
  },
  btnIcon: {
    width: '18px',
    height: '18px',
  }
};
