import React, { useState } from 'react';
import { Code2, BrainCircuit, BarChart3, Layout, Server, Database, CheckCircle2 } from 'lucide-react';
import { skillGroups } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const categories = ['All', ...skillGroups.map((g) => g.category)];

  const filteredGroups = activeFilter === 'All'
    ? skillGroups
    : skillGroups.filter((g) => g.category === activeFilter);

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2': return <Code2 className="w-5 h-5 text-cobalt" />;
      case 'BrainCircuit': return <BrainCircuit className="w-5 h-5 text-cobalt" />;
      case 'BarChart3': return <BarChart3 className="w-5 h-5 text-cobalt" />;
      case 'Layout': return <Layout className="w-5 h-5 text-cobalt" />;
      case 'Server': return <Server className="w-5 h-5 text-cobalt" />;
      case 'Database': return <Database className="w-5 h-5 text-cobalt" />;
      default: return <Code2 className="w-5 h-5 text-cobalt" />;
    }
  };

  return (
    <section id="skills" className="py-24 border-t border-canvas-border bg-canvas relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-canvas-surface border border-canvas-border text-xs font-mono uppercase tracking-wider text-charcoal-700 shadow-subtle mb-3">
              <span className="w-2 h-2 rounded-full bg-cobalt" />
              <span>Verified Engineering Competencies</span>
            </div>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-charcoal-900 tracking-tight">
              Skills & Technical Stack.
            </h2>
            <p className="text-base text-charcoal-500 mt-2 font-normal leading-relaxed">
              Grounded exclusively in tools, frameworks, and architectures verified across my GitHub repositories, machine learning research pipelines, and hackathon deployments.
            </p>
          </div>

          <div className="text-xs font-mono text-charcoal-400">
            [ ZERO FAKE PERCENTAGES • EVIDENCE BASED ]
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveFilter(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeFilter === cat
                  ? 'bg-charcoal-900 text-canvas font-semibold shadow-sm'
                  : 'bg-canvas-surface border border-canvas-border text-charcoal-600 hover:border-charcoal-400'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Groups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGroups.map((group, gIdx) => (
            <div
              key={gIdx}
              className="p-6 rounded-2xl bg-canvas-surface border border-canvas-border shadow-subtle hover:border-canvas-borderHover transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 rounded-xl bg-canvas border border-canvas-border">
                    {getCategoryIcon(group.iconName)}
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-base text-charcoal-900">
                      {group.category}
                    </h3>
                  </div>
                </div>

                <p className="text-xs text-charcoal-500 mb-5 leading-relaxed">
                  {group.description}
                </p>

                <div className="space-y-2.5">
                  {group.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-2.5 rounded-lg bg-canvas border border-canvas-border hover:border-canvas-borderHover transition-colors"
                    >
                      <div className="font-mono text-xs font-semibold text-charcoal-900">
                        {skill.name}
                      </div>
                      {skill.context && (
                        <div className="text-[11px] text-charcoal-500 mt-0.5 leading-normal">
                          {skill.context}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

