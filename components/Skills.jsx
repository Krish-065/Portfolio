import React from 'react';

export default function Skills() {
  const skillCategories = [
    {
      title: "Data Science & Analysis",
      color: "var(--accent-cyan)",
      glowClass: "glow-cyan-hover",
      skills: [
        { name: "SQL (PostgreSQL, MySQL)", level: "Advanced" },
        { name: "Pandas & NumPy", level: "Expert" },
        { name: "Data Visualization (Matplotlib, Seaborn)", level: "Advanced" },
        { name: "Statistical Analysis & Hypothesis Testing", level: "Advanced" },
        { name: "PowerBI & Tableau", level: "Intermediate" }
      ]
    },
    {
      title: "Machine & Deep Learning",
      color: "var(--accent-purple)",
      glowClass: "glow-purple-hover",
      skills: [
        { name: "Scikit-Learn", level: "Expert" },
        { name: "PyTorch & Neural Networks", level: "Advanced" },
        { name: "Supervised & Unsupervised Learning", level: "Expert" },
        { name: "Natural Language Processing (NLP)", level: "Intermediate" },
        { name: "Computer Vision (OpenCV, CNNs)", level: "Intermediate" }
      ]
    },
    {
      title: "Core IT Engineering",
      color: "var(--accent-green)",
      glowClass: "glow-green-hover",
      skills: [
        { name: "Python Programming", level: "Expert" },
        { name: "Data Structures & Algorithms", level: "Advanced" },
        { name: "Database Management Systems (DBMS)", level: "Advanced" },
        { name: "Object-Oriented Programming (Java/C++)", level: "Advanced" },
        { name: "Operating Systems & Networking", level: "Intermediate" }
      ]
    },
    {
      title: "Software Dev & DevOps",
      color: "var(--text-primary)",
      glowClass: "glow-cyan-hover", // reuse cyan hover for devops
      skills: [
        { name: "Git & Version Control", level: "Expert" },
        { name: "FastAPI & REST APIs", level: "Advanced" },
        { name: "Docker Containerization", level: "Intermediate" },
        { name: "React.js & Frontend Dev", level: "Advanced" },
        { name: "Linux Bash Scripting", level: "Intermediate" }
      ]
    }
  ];

  return (
    <section id="skills" style={styles.container}>
      <h2 className="section-title">
        <span>02_</span>Skills & Competencies
      </h2>
      <div style={styles.grid}>
        {skillCategories.map((category, idx) => (
          <div 
            key={idx} 
            className={`glass-card ${category.glowClass}`}
            style={{
              ...styles.card,
              borderColor: 'rgba(255, 255, 255, 0.04)',
            }}
          >
            <div style={styles.cardHeader}>
              <span style={{ ...styles.cardIndicator, backgroundColor: category.color }}></span>
              <h3 style={styles.cardTitle}>{category.title}</h3>
            </div>
            
            <div style={styles.skillsList}>
              {category.skills.map((skill, sIdx) => (
                <div key={sIdx} style={styles.skillItem}>
                  <div style={styles.skillNameRow}>
                    <span style={styles.skillName}>{skill.name}</span>
                    <span style={{ ...styles.skillLevel, color: category.color }}>
                      [{skill.level}]
                    </span>
                  </div>
                  <div style={styles.progressTrack}>
                    <div 
                      style={{ 
                        ...styles.progressBar, 
                        backgroundColor: category.color,
                        width: skill.level === "Expert" ? "95%" : skill.level === "Advanced" ? "80%" : "60%"
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'left',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))',
    gap: '24px',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  cardHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
    paddingBottom: '12px',
  },
  cardIndicator: {
    width: '10px',
    height: '10px',
    borderRadius: '50%',
  },
  cardTitle: {
    fontSize: '1.25rem',
    margin: 0,
    fontWeight: '600',
  },
  skillsList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  skillItem: {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
  },
  skillNameRow: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '0.95rem',
  },
  skillName: {
    color: 'var(--text-primary)',
  },
  skillLevel: {
    fontFamily: 'var(--mono)',
    fontSize: '0.75rem',
  },
  progressTrack: {
    width: '100%',
    height: '4px',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: '2px',
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    borderRadius: '2px',
    transition: 'width 1s ease-out',
  }
};
