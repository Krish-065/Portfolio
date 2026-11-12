import React, { useState } from 'react';
import { BookOpen, AlertTriangle, GitFork, ArrowUpRight, BarChart2, ShieldAlert, Cpu, Sparkles } from 'lucide-react';
import { researchModels } from '../data/portfolioData';

export const ResearchSection: React.FC = () => {
  const [selectedModelId, setSelectedModelId] = useState<string>(researchModels[0].id);
  const activeModel = researchModels.find((m) => m.id === selectedModelId) || researchModels[0];

  return (
    <section id="research" className="py-24 border-t border-canvas-border bg-canvas relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-canvas-surface border border-canvas-border text-xs font-mono uppercase tracking-wider text-charcoal-700 shadow-subtle mb-4">
            <span className="w-2 h-2 rounded-full bg-cobalt" />
            <span>Quantitative Machine Learning Research</span>
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-charcoal-900 tracking-tight">
            Financial ML & Market Dynamics.
          </h2>
          <p className="text-base text-charcoal-500 mt-3 font-normal leading-relaxed">
            Empirical research across the Indian equity universe (NSE NIFTY 50). Investigating heterogeneous market relational graphs, temporal sentiment NLP, and regime-adaptive Mixture-of-Experts with strict chronological validation.
          </p>
        </div>

        {/* Scientific Transparency Callout Banner */}
        <div className="mb-12 p-5 sm:p-6 rounded-2xl bg-amber-50/70 border border-amber-200/90 text-amber-900 flex flex-col sm:flex-row sm:items-start gap-4">
          <ShieldAlert className="w-6 h-6 text-amber-700 shrink-0 mt-0.5" />
          <div className="space-y-1 text-sm">
            <h3 className="font-heading font-bold text-base text-amber-950">
              Scientific Rigor & Out-of-Sample Empirical Honesty
            </h3>
            <p className="text-amber-900/90 leading-relaxed text-xs sm:text-sm">
              These implementations represent academic and experimental research pipelines, not proven trading alpha. In high-efficiency financial markets, statistical correlations frequently decay due to non-stationarity, regime shifts, and structural market noise. All models are evaluated strictly with forward-walk chronological splits to eliminate lookahead bias.
            </p>
          </div>
        </div>

        {/* Interactive Model Selection Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-8">
          {researchModels.map((model) => {
            const isSelected = model.id === selectedModelId;
            return (
              <button
                key={model.id}
                type="button"
                onClick={() => setSelectedModelId(model.id)}
                className={`p-4 rounded-xl text-left transition-all border ${
                  isSelected
                    ? 'bg-canvas-surface border-cobalt shadow-subtle ring-1 ring-cobalt/20'
                    : 'bg-canvas-surface/60 border-canvas-border hover:border-canvas-borderHover hover:bg-canvas-surface'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-mono text-cobalt font-semibold">
                    {model.badge}
                  </span>
                </div>
                <h3 className="font-heading font-bold text-sm text-charcoal-900 leading-snug">
                  {model.title}
                </h3>
              </button>
            );
          })}
        </div>

        {/* Active Model In-Depth Dossier */}
        <div className="rounded-2xl bg-canvas-surface border border-canvas-border shadow-subtle p-6 sm:p-8 lg:p-10 space-y-8">
          
          {/* Top Title & Repository Link */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-canvas-border gap-4">
            <div>
              <div className="text-xs font-mono text-cobalt uppercase font-semibold">
                {activeModel.badge}
              </div>
              <h3 className="font-heading font-bold text-2xl sm:text-3xl text-charcoal-900 tracking-tight mt-1">
                {activeModel.title}
              </h3>
            </div>

            <a
              href={activeModel.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-canvas border border-canvas-border hover:border-charcoal-700 text-charcoal-800 text-xs font-mono font-medium transition-colors shrink-0"
            >
              <span>Inspect Code Repository</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-cobalt" />
            </a>
          </div>

          {/* Research Objective */}
          <div>
            <h4 className="text-xs font-mono text-charcoal-400 uppercase tracking-wider mb-2 font-semibold">
              Research Objective
            </h4>
            <p className="text-sm sm:text-base text-charcoal-700 leading-relaxed font-normal">
              {activeModel.objective}
            </p>
          </div>

          {/* Empirical Methodology */}
          <div>
            <h4 className="text-xs font-mono text-charcoal-400 uppercase tracking-wider mb-3 font-semibold">
              Empirical Methodology & Feature Pipeline
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {activeModel.methodology.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-lg bg-canvas border border-canvas-border text-xs text-charcoal-700 leading-relaxed flex items-start gap-2.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-cobalt mt-1.5 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Repository Modules */}
          <div>
            <h4 className="text-xs font-mono text-charcoal-400 uppercase tracking-wider mb-3 font-semibold">
              Documented Repository Architecture Modules
            </h4>
            <div className="flex flex-wrap gap-2">
              {activeModel.keyComponents.map((comp, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-md bg-canvas border border-canvas-border text-xs font-mono text-charcoal-800"
                >
                  {comp}
                </span>
              ))}
            </div>
          </div>

          {/* Documented Limitations & Scientific Learnings */}
          <div className="p-5 sm:p-6 rounded-xl bg-canvas border border-canvas-border space-y-3">
            <h4 className="font-heading font-bold text-sm text-charcoal-900 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-amber-600" />
              Documented Limitations & Out-of-Sample Learnings
            </h4>
            <ul className="space-y-2">
              {activeModel.limitationsAndLearnings.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-charcoal-600 leading-relaxed">
                  <span className="text-amber-600 font-mono font-bold mr-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
};

