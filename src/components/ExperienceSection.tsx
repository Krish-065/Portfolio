import React from 'react';
import { Trophy, Award, Users, Briefcase, GraduationCap, Calendar, MapPin, CheckCircle, Sparkles } from 'lucide-react';
import { experienceItems, educationData } from '../data/portfolioData';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-24 border-t border-canvas-border bg-canvas relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-canvas-surface border border-canvas-border text-xs font-mono uppercase tracking-wider text-charcoal-700 shadow-subtle mb-3">
            <span className="w-2 h-2 rounded-full bg-cobalt" />
            <span>Leadership & Athletic Discipline</span>
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-charcoal-900 tracking-tight">
            Experience & Achievements.
          </h2>
          <p className="text-base text-charcoal-500 mt-2 font-normal leading-relaxed">
            A track record of high-stakes collegiate leadership, national-level athletic representation for Charusat University in basketball, and technical hackathon engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Timeline of Experience & Hackathons */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="font-heading font-bold text-xl text-charcoal-900 flex items-center gap-2 mb-6">
              <Users className="w-5 h-5 text-cobalt" />
              <span>Positions of Responsibility & Teams</span>
            </h3>

            <div className="space-y-6 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-canvas-border">
              {experienceItems.map((item) => (
                <div
                  key={item.id}
                  className={`relative pl-9 ${
                    item.isPlaceholder ? 'opacity-90' : ''
                  }`}
                >
                  {/* Timeline Node Dot */}
                  <div
                    className={`absolute left-2 top-1.5 w-3.5 h-3.5 rounded-full border-2 bg-canvas-surface -translate-x-1/2 ${
                      item.isPlaceholder
                        ? 'border-dashed border-cobalt'
                        : item.type === 'Leadership & Sports'
                        ? 'border-emerald-600 bg-emerald-50'
                        : 'border-cobalt bg-cobalt-light'
                    }`}
                  />

                  {/* Card Content */}
                  <div
                    className={`p-6 rounded-2xl border shadow-subtle ${
                      item.isPlaceholder
                        ? 'bg-cobalt-light/20 border-dashed border-cobalt/40'
                        : 'bg-canvas-surface border-canvas-border hover:border-canvas-borderHover'
                    } transition-all`}
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="text-xs font-mono text-charcoal-500 flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        {item.period}
                      </span>
                      {item.badge && (
                        <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium bg-canvas border border-canvas-border text-charcoal-700">
                          {item.badge}
                        </span>
                      )}
                    </div>

                    <h4 className="font-heading font-bold text-lg text-charcoal-900">
                      {item.role}
                    </h4>
                    <div className="text-xs font-medium text-cobalt mb-4">
                      {item.organization}
                    </div>

                    <ul className="space-y-2">
                      {item.highlights.map((h, hIdx) => (
                        <li key={hIdx} className="text-xs sm:text-sm text-charcoal-600 flex items-start gap-2.5 leading-relaxed">
                          <span className="text-cobalt font-bold mt-0.5">•</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>

                    {item.isPlaceholder && (
                      <div className="mt-4 pt-3 border-t border-cobalt-border/60 text-[11px] font-mono text-charcoal-500">
                        ⚡ <em>Editable Placement Placeholder</em> — Update your upcoming corporate role in <code className="bg-canvas px-1 py-0.5 rounded text-charcoal-800">src/data/portfolioData.ts</code>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Verified Academic Foundation & Athletics Focus */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="font-heading font-bold text-xl text-charcoal-900 flex items-center gap-2 mb-6">
              <GraduationCap className="w-5 h-5 text-cobalt" />
              <span>Academic Foundation</span>
            </h3>

            {/* University Card */}
            <div className="p-6 rounded-2xl bg-canvas-surface border border-canvas-border shadow-subtle space-y-4">
              <div>
                <div className="text-xs font-mono text-cobalt uppercase font-semibold">
                  Undergraduate Degree
                </div>
                <h4 className="font-heading font-bold text-lg text-charcoal-900 mt-1">
                  {educationData.degree}
                </h4>
                <div className="text-xs text-charcoal-600 mt-1">
                  {educationData.institution}
                </div>
              </div>

              <div className="flex items-center gap-4 text-xs font-mono text-charcoal-500 pt-2 border-t border-canvas-border">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  {educationData.duration}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5" />
                  {educationData.location}
                </span>
              </div>

              {/* Semester SGPA Breakdown */}
              <div className="pt-2">
                <div className="flex items-center justify-between text-xs font-mono text-charcoal-700 font-semibold mb-2">
                  <span>Cumulative CGPA:</span>
                  <span className="text-cobalt font-bold">{educationData.cgpa}</span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-[11px] font-mono">
                  {educationData.semesterHistory.map((s, idx) => (
                    <div key={idx} className="p-2 rounded bg-canvas border border-canvas-border flex justify-between">
                      <span className="text-charcoal-500">{s.sem}:</span>
                      <span className="font-semibold text-charcoal-900">{s.sgpa} SGPA</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Core Coursework */}
              <div className="pt-3 border-t border-canvas-border">
                <div className="text-xs font-mono text-charcoal-400 uppercase font-semibold mb-2">
                  Completed Coursework
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {educationData.coreSubjects.map((sub, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2 py-0.5 rounded bg-canvas border border-canvas-border text-[11px] font-mono text-charcoal-700"
                    >
                      {sub}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* National Basketball Athlete Callout */}
            <div className="p-6 rounded-2xl bg-emerald-50/60 border border-emerald-200/80 shadow-subtle">
              <div className="flex items-center gap-3 mb-2">
                <Trophy className="w-5 h-5 text-emerald-700" />
                <h4 className="font-heading font-bold text-base text-emerald-950">
                  National Athletic Representation
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-emerald-900/90 leading-relaxed">
                Selected for the <strong>All India University Team</strong> representing Charusat University for <strong>two consecutive years</strong>. Collegiate basketball has instilled extreme resilience, split-second tactical communication, and calm execution under pressure.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

