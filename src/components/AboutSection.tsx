import React from 'react';
import { User, Target, Compass, Award, Shield, CheckCircle2 } from 'lucide-react';
import { personalInfo, educationData } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 border-t border-canvas-border bg-canvas relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-canvas-surface border border-canvas-border text-xs font-mono uppercase tracking-wider text-charcoal-700 shadow-subtle mb-3">
            <span className="w-2 h-2 rounded-full bg-cobalt" />
            <span>Personal Narrative & Engineering Philosophy</span>
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-charcoal-900 tracking-tight">
            About Krish Shah.
          </h2>
          <p className="text-base text-charcoal-500 mt-2 font-normal leading-relaxed">
            AI/ML engineer, software developer, collegiate athlete, and entrepreneurial builder.
          </p>
        </div>

        {/* Editorial Split Narrative Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Story Text (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-charcoal-700 text-sm sm:text-base leading-relaxed">
            <p>
              I am an Information Technology undergraduate at <strong>Charusat University (DEPSTAR)</strong> with a focused ambition: building software systems that integrate applied machine learning, scalable architectures, and tangible real-world utility.
            </p>

            <p>
              Rather than confining myself to isolated theoretical exercises or beginner toy tutorials, I focus on shipping end-to-end products. When I saw the lack of realistic, zero-risk strategy validation tools for retail market participants, I architected <strong>StocksOperator</strong> — a quantitative paper-trading and market simulation platform with tick replay and algorithmic backtesting.
            </p>

            <p>
              Similarly, for <strong>Smart India Hackathon 2026 (Problem Statement #18)</strong>, my team and I engineered <strong>BhoomiSetu</strong> to tackle India’s century-old land record crisis: combining computer-vision deskewing, multilingual Indic OCR (Devanagari, Gujarati, Marathi), deterministic revenue syntax validation, and PostGIS cadastral polygon mapping with 14-digit ULPIN tracking. In the <strong>Odoo x Parul Hackathon</strong>, we advanced as finalists and built <strong>CafeCanopy</strong>, a real-time WebSocket POS and kitchen display system.
            </p>

            <p>
              I am also currently working as a Data Analyst Intern at <strong>Bluestock™</strong> (and previously as a Data Analyst Intern at <strong>YoungBrainz Infotech Pvt. Ltd.</strong>), building data pipelines, statistical predictive forecasting models, and financial market analytics for active participants.
            </p>

            <p>
              Beyond the terminal, I believe that high-performance engineering requires uncompromising personal discipline. I have served as the official <strong>University Sports Coordinator</strong> at Charusat and have been selected for the <strong>All India University Team</strong> representing my university in basketball at the national collegiate level for both consecutive years. Competing on the court has taught me split-second decision-making, resilience under pressure, and how to communicate effectively across diverse teams.
            </p>

            <div className="pt-4 border-t border-canvas-border grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-canvas-surface border border-canvas-border">
                <div className="font-heading font-bold text-charcoal-900 text-sm mb-1 flex items-center gap-2">
                  <Target className="w-4 h-4 text-cobalt" />
                  Engineering Pragmatism
                </div>
                <p className="text-xs text-charcoal-500 leading-normal">
                  I prioritize reproducible out-of-sample empirical results over synthetic marketing hype.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-canvas-surface border border-canvas-border">
                <div className="font-heading font-bold text-charcoal-900 text-sm mb-1 flex items-center gap-2">
                  <Compass className="w-4 h-4 text-cobalt" />
                  Full-Cycle Execution
                </div>
                <p className="text-xs text-charcoal-500 leading-normal">
                  From research formulation and data wrangling to backend services and frontend polish.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Key Principles & Quick Dossier (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Dossier Card */}
            <div className="p-7 rounded-2xl bg-canvas-surface border border-canvas-border shadow-subtle space-y-5">
              <div className="font-heading font-bold text-lg text-charcoal-900 border-b border-canvas-border pb-3">
                Quick Facts & Status
              </div>

              <div className="space-y-3 font-mono text-xs">
                <div className="flex justify-between py-1.5 border-b border-canvas-border/60">
                  <span className="text-charcoal-500">Full Name:</span>
                  <span className="text-charcoal-900 font-semibold">{personalInfo.name}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-canvas-border/60">
                  <span className="text-charcoal-500">Degree:</span>
                  <span className="text-charcoal-900 font-semibold">B.Tech in IT (2024–2028)</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-canvas-border/60">
                  <span className="text-charcoal-500">Institution:</span>
                  <span className="text-charcoal-900 font-semibold">Charusat University</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-canvas-border/60">
                  <span className="text-charcoal-500">Academic Standing:</span>
                  <span className="text-cobalt font-semibold">{educationData.cgpa}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-canvas-border/60">
                  <span className="text-charcoal-500">Location:</span>
                  <span className="text-charcoal-900 font-semibold">{personalInfo.location}</span>
                </div>
                <div className="flex justify-between py-1.5">
                  <span className="text-charcoal-500">Status:</span>
                  <span className="text-emerald-700 font-semibold">Open to Work</span>
                </div>
              </div>
            </div>

            {/* Core Values Card */}
            <div className="p-7 rounded-2xl bg-canvas-surface border border-canvas-border shadow-subtle space-y-4">
              <div className="font-heading font-bold text-base text-charcoal-900">
                Core Working Principles
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-charcoal-600">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-cobalt shrink-0 mt-0.5" />
                  <span><strong>Build What Solves Real Friction:</strong> Software exists to create measurable leverage, not just showcase syntax.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-cobalt shrink-0 mt-0.5" />
                  <span><strong>Respect Empirical Truth:</strong> Never claim fabricated accuracies, inflated metrics, or simulated live trading success.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-cobalt shrink-0 mt-0.5" />
                  <span><strong>Maintain Athletic Discipline:</strong> Consistency in daily problem solving (132 LeetCode problems, 50 Days Streak) mirrors consistency on the court.</span>
                </li>
              </ul>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

