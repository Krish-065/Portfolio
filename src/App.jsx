import React, { useState, useEffect, useRef } from 'react';
import './App.css';

// Import portfolio components
import Header from '../components/Header';
import About from '../components/About';
import Skills from '../components/Skills';
import Footer from '../components/Footer';

// ----------------------------------------------------
// 1. NEURAL BACKGROUND CANVAS COMPONENT
// Draws moving particles that connect to each other and the mouse
// ----------------------------------------------------
function NeuralBackground() {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: null, y: null, radius: 150 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    // Adjust canvas size to window boundaries
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);
    handleResize();

    // Generate random particle array
    const particles = [];
    const particleCount = Math.min(60, Math.floor((canvas.width * canvas.height) / 25000));
    
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        size: Math.random() * 2 + 1
      });
    }

    // Capture mouse positions
    const handleMouseMove = (e) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouseRef.current.x = null;
      mouseRef.current.y = null;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    // Core drawing loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      particles.forEach((p) => {
        // Apply magnetic attraction to mouse if mouse is close
        if (mouseRef.current.x !== null) {
          const dx = mouseRef.current.x - p.x;
          const dy = mouseRef.current.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 180) {
            const force = (180 - dist) / 180;
            const strength = 0.22;
            p.x += (dx / dist) * force * strength;
            p.y += (dy / dist) * force * strength;
          }
        }

        p.x += p.vx;
        p.y += p.vy;

        // Bounce checks
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0, 242, 254, 0.4)';
        ctx.fill();
      });

      // Draw lines between close particles (including the mouse pointer)
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 100) {
            const alpha = (1 - dist / 100) * 0.15;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(192, 132, 252, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }

        // Draw line to mouse pointer
        if (mouseRef.current.x !== null) {
          const mdx = particles[i].x - mouseRef.current.x;
          const mdy = particles[i].y - mouseRef.current.y;
          const mDist = Math.sqrt(mdx * mdx + mdy * mdy);

          if (mDist < mouseRef.current.radius) {
            const alpha = (1 - mDist / mouseRef.current.radius) * 0.25;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(mouseRef.current.x, mouseRef.current.y);
            ctx.strokeStyle = `rgba(0, 242, 254, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="neural-canvas" />;
}

// ----------------------------------------------------
// Custom Trailing Cursor Tracker Component
// ----------------------------------------------------
function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [ringPosition, setRingPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Apply hover states to all actionable DOM elements
    const addHoverEvents = () => {
      const elements = document.querySelectorAll(
        'a, button, select, input, [role="button"], .slider-input'
      );
      elements.forEach((el) => {
        el.addEventListener('mouseenter', () => setIsHovered(true));
        el.addEventListener('mouseleave', () => setIsHovered(false));
      });
    };

    // Delayed trigger to ensure dynamically loaded elements are scanned
    const timer = setTimeout(addHoverEvents, 800);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(timer);
    };
  }, []);

  // Animate the outer ring coordinate using requestAnimationFrame for smooth latency
  useEffect(() => {
    let reqId;
    const updateRing = () => {
      setRingPosition((prev) => {
        const dx = position.x - prev.x;
        const dy = position.y - prev.y;
        return {
          x: prev.x + dx * 0.16,
          y: prev.y + dy * 0.16
        };
      });
      reqId = requestAnimationFrame(updateRing);
    };
    reqId = requestAnimationFrame(updateRing);
    return () => cancelAnimationFrame(reqId);
  }, [position]);

  if (typeof window !== 'undefined' && window.innerWidth < 768) return null;

  return (
    <>
      <div 
        className={`custom-cursor-dot ${isHovered ? 'hovered' : ''}`} 
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      />
      <div 
        className={`custom-cursor-ring ${isHovered ? 'hovered' : ''}`} 
        style={{ left: `${ringPosition.x}px`, top: `${ringPosition.y}px` }}
      />
    </>
  );
}

// ----------------------------------------------------
// 2. LIVE DATA SCIENCE DATA-FITTING CANVAS VISUALIZATION
// Animates a curve fit to random scatter data based on training accuracy
// ----------------------------------------------------
function DataFittingCanvas({ accuracy, modelType }) {
  const canvasRef = useRef(null);
  const dataPointsRef = useRef([]);

  // Generate a static random dataset on mount
  useEffect(() => {
    const points = [];
    const size = 35;
    for (let i = 0; i < size; i++) {
      const x = 50 + (i / size) * 260; // scale to canvas fit width
      // Sine wave with randomized normal noise distribution
      const trueY = 90 - Math.sin((i / size) * Math.PI * 1.5) * 45;
      const noise = (Math.random() - 0.5) * 25;
      points.push({ x, y: trueY + noise });
    }
    dataPointsRef.current = points;
  }, []);

  // Redraw when accuracy or architecture shifts
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    // Scale for high DPI displays
    canvas.width = 360;
    canvas.height = 180;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw grid lines
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
    ctx.lineWidth = 0.5;
    for (let i = 20; i < canvas.width; i += 40) {
      ctx.beginPath();
      ctx.moveTo(i, 0);
      ctx.lineTo(i, canvas.height);
      ctx.stroke();
    }
    for (let j = 20; j < canvas.height; j += 40) {
      ctx.beginPath();
      ctx.moveTo(0, j);
      ctx.lineTo(canvas.width, j);
      ctx.stroke();
    }

    // Draw Scatter Data Points
    dataPointsRef.current.forEach((pt) => {
      ctx.beginPath();
      ctx.arc(pt.x, pt.y, 3, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
      ctx.fill();
    });

    // Draw fitting decision boundary based on simulated accuracy
    ctx.beginPath();
    ctx.lineWidth = 2.5;
    ctx.strokeStyle = accuracy > 85 ? 'var(--accent-green)' : accuracy > 50 ? 'var(--accent-cyan)' : 'var(--accent-purple)';
    ctx.shadowBlur = 10;
    ctx.shadowColor = ctx.strokeStyle;

    const steps = 100;
    const accuracyFactor = accuracy / 100; // 0 to 1

    for (let i = 0; i <= steps; i++) {
      const px = 50 + (i / steps) * 260;
      
      // Calculate true curve target
      const trueCurveY = 90 - Math.sin((i / steps) * Math.PI * 1.5) * 45;
      
      // Calculate bad fit line (underfitted flat line)
      const flatLineY = 90;
      
      // Calculate neural model overfitting wiggle
      const overfitWiggle = modelType === 'Transformer' ? Math.sin((i / steps) * Math.PI * 8) * 8 : 0;

      // Linear blend between raw flat line and fit curve depending on accuracy state
      let fitY = flatLineY + (trueCurveY - flatLineY) * accuracyFactor + overfitWiggle * (1 - accuracyFactor * 0.5);

      if (i === 0) {
        ctx.moveTo(px, fitY);
      } else {
        ctx.lineTo(px, fitY);
      }
    }
    ctx.stroke();
    ctx.shadowBlur = 0; // reset shadows

    // Label indicator in canvas corner
    ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
    ctx.font = '9px monospace';
    ctx.fillText(`loss_fit: ${(1 - accuracyFactor).toFixed(4)}`, 12, 20);
    ctx.fillText(`opt_solver: adam`, 12, 32);

  }, [accuracy, modelType]);

  return <canvas ref={canvasRef} className="fit-canvas" />;
}

// ----------------------------------------------------
// 3. MAIN COMPONENT IMPLEMENTATION
// ----------------------------------------------------
function App() {
  const [learningRate, setLearningRate] = useState(0.015);
  const [epochs, setEpochs] = useState(150);
  const [datasetSize, setDatasetSize] = useState(3000);
  const [modelType, setModelType] = useState('Deep Neural Network');

  const [accuracy, setAccuracy] = useState(0);
  const [loss, setLoss] = useState(0.5);
  const [trainingTime, setTrainingTime] = useState(0);
  const [isTraining, setIsTraining] = useState(false);

  // Recompute simulation outputs when hyperparameters shift
  useEffect(() => {
    setIsTraining(true);
    const timer = setTimeout(() => {
      const complexity = modelType === 'Transformer' ? 2.5 : modelType === 'Deep Neural Network' ? 1.2 : 0.5;
      const maxAcc = modelType === 'Transformer' ? 99.4 : modelType === 'Deep Neural Network' ? 96.8 : 88.5;
      
      const baseFactor = 1 - Math.exp(-epochs * learningRate * (datasetSize / 3000));
      const simulatedAccuracy = Math.max(10, Math.min(maxAcc, maxAcc * baseFactor - (learningRate > 0.08 ? (learningRate * 35) : 0)));
      const simulatedLoss = Math.max(0.005, 1.8 * Math.exp(-simulatedAccuracy / 22));
      const simulatedTime = (datasetSize * epochs * complexity * 0.00001);

      setAccuracy(Number(simulatedAccuracy.toFixed(2)));
      setLoss(Number(simulatedLoss.toFixed(4)));
      setTrainingTime(Number(simulatedTime.toFixed(2)));
      setIsTraining(false);
    }, 250); // latency trigger

    return () => clearTimeout(timer);
  }, [learningRate, epochs, datasetSize, modelType]);

  return (
    <>
      {/* Custom smooth trailing cursor */}
      <CustomCursor />

      {/* Dynamic interactive background canvas */}
      <NeuralBackground />

      <div className="app-container">
        {/* Header navigation bar */}
        <Header />

        {/* About profile card with automated typewriter headings */}
        <About />

        {/* Skills categorizations */}
        <Skills />

        {/* Interactive ML Simulator Lab block */}
        <section id="ml-playground" style={styles.playgroundSection}>
          <h2 className="section-title">
            <span>03_</span>Interactive ML Simulator
          </h2>
          <div className="glass-card glow-green-hover">
            <div style={styles.playgroundIntro}>
              <h3 style={styles.title}>Model Training Laboratory</h3>
              <p style={styles.description}>
                Adjust the hyperparameters below to simulate training an ML model in real-time. Watch the decision boundary canvas bend to fit the data points as accuracy increases.
              </p>
            </div>

            <div className="ml-playground">
              {/* Sliders Area */}
              <div className="ml-inputs">
                <div className="input-group">
                  <div className="input-label-row">
                    <span className="input-name">Model Architecture</span>
                    <span className="input-val">{modelType}</span>
                  </div>
                  <select 
                    value={modelType} 
                    onChange={(e) => setModelType(e.target.value)}
                    style={styles.selectInput}
                  >
                    <option value="Simple Linear Regression">Simple Linear Regression</option>
                    <option value="Deep Neural Network">Deep Neural Network (ReLU)</option>
                    <option value="Transformer">Transformer (Attention Block)</option>
                  </select>
                </div>

                <div className="input-group">
                  <div className="input-label-row">
                    <span className="input-name">Learning Rate (α)</span>
                    <span className="input-val">{learningRate}</span>
                  </div>
                  <input 
                    type="range" 
                    min="0.001" 
                    max="0.100" 
                    step="0.005"
                    value={learningRate} 
                    onChange={(e) => setLearningRate(parseFloat(e.target.value))}
                    className="slider-input"
                  />
                </div>

                <div className="input-group">
                  <div className="input-label-row">
                    <span className="input-name">Epochs</span>
                    <span className="input-val">{epochs}</span>
                  </div>
                  <input 
                    type="range" 
                    min="10" 
                    max="500" 
                    step="10"
                    value={epochs} 
                    onChange={(e) => setEpochs(parseInt(e.target.value))}
                    className="slider-input"
                  />
                </div>

                <div className="input-group">
                  <div className="input-label-row">
                    <span className="input-name">Dataset Cardinality (Rows)</span>
                    <span className="input-val">{datasetSize.toLocaleString()}</span>
                  </div>
                  <input 
                    type="range" 
                    min="500" 
                    max="10000" 
                    step="500"
                    value={datasetSize} 
                    onChange={(e) => setDatasetSize(parseInt(e.target.value))}
                    className="slider-input"
                  />
                </div>
              </div>

              {/* Data Fitting Graph and Live Metrics */}
              <div className="ml-results" style={{ position: 'relative' }}>
                {isTraining && (
                  <div style={styles.trainingOverlay}>
                    <div style={styles.trainingSpinner}></div>
                    <div style={styles.trainingText}>Re-fitting parameters...</div>
                  </div>
                )}
                
                {/* Custom fitting line graph */}
                <DataFittingCanvas accuracy={accuracy} modelType={modelType} />

                <div className="prediction-gauge">
                  <div style={styles.accuracyHeader}>SIMULATED VAL_ACCURACY</div>
                  <div className="gauge-value">{accuracy}%</div>
                  <div className="gauge-label">
                    {accuracy > 95 ? "🔥 Excellent Generalization" : accuracy > 80 ? "⚡ Good Convergence" : "⚠️ Underfitting (High Loss)"}
                  </div>
                  <div className="gauge-track">
                    <div className="gauge-fill" style={{ width: `${accuracy}%` }}></div>
                  </div>
                </div>

                <div className="prediction-metrics">
                  <div>
                    <div className="pred-stat-label">LOSS</div>
                    <div className="pred-stat-val">{loss}</div>
                  </div>
                  <div>
                    <div className="pred-stat-label">TRAIN TIME</div>
                    <div className="pred-stat-val">{trainingTime}s</div>
                  </div>
                  <div>
                    <div className="pred-stat-label">CONVERGED</div>
                    <div className="pred-stat-val" style={{ color: accuracy > 80 ? 'var(--accent-green)' : 'var(--accent-purple)' }}>
                      {accuracy > 80 ? 'TRUE' : 'FALSE'}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer info coordinates */}
        <Footer />
      </div>
    </>
  );
}

const styles = {
  playgroundSection: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'left',
  },
  playgroundIntro: {
    marginBottom: '24px',
    borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
    paddingBottom: '16px',
  },
  title: {
    fontSize: '1.4rem',
    margin: '0 0 8px 0',
    color: 'var(--text-primary)',
  },
  description: {
    color: 'var(--text-secondary)',
    fontSize: '0.95rem',
    lineHeight: '1.6',
    margin: 0,
  },
  selectInput: {
    backgroundColor: '#0c101a',
    border: '1px solid var(--border-color)',
    color: 'var(--text-primary)',
    padding: '10px',
    borderRadius: '8px',
    outline: 'none',
    fontFamily: 'var(--sans)',
    cursor: 'pointer',
    fontSize: '0.9rem',
    width: '100%',
  },
  accuracyHeader: {
    fontSize: '0.75rem',
    color: 'var(--text-secondary)',
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
  },
  trainingOverlay: {
    position: 'absolute',
    inset: 0,
    backgroundColor: 'rgba(5, 8, 17, 0.85)',
    borderRadius: '12px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
    gap: '12px',
  },
  trainingSpinner: {
    width: '32px',
    height: '32px',
    border: '3px solid rgba(0, 242, 254, 0.1)',
    borderTop: '3px solid var(--accent-cyan)',
    borderRadius: '50%',
    animation: 'spin 0.8s linear infinite',
  },
  trainingText: {
    fontFamily: 'var(--mono)',
    fontSize: '0.8rem',
    color: 'var(--accent-cyan)',
  }
};

export default App;