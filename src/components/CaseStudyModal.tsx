import React, { useEffect } from 'react';
import { X, ExternalLink, Github, CheckCircle2, ShieldCheck, ArrowRight, Layers, Cpu, Database, Eye } from 'lucide-react';
import { Project } from '../types';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-charcoal-900/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 lg:p-8 animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="relative w-full max-w-4xl bg-canvas rounded-2xl border border-canvas-border shadow-floating overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header Bar */}
        <div className="flex items-center justify-between px-6 sm:px-8 py-5 border-b border-canvas-border bg-canvas-surface sticky top-0 z-10">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 rounded-full bg-cobalt-light text-cobalt text-xs font-mono font-medium">
              {project.category}
            </span>
            <span className="text-xs font-mono text-charcoal-500">
              {project.date}
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-lg text-charcoal-500 hover:text-charcoal-900 hover:bg-canvas-subtle transition-colors focus:outline-none focus:ring-2 focus:ring-cobalt"
            aria-label="Close Case Study"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="px-6 sm:px-8 py-8 space-y-10 max-h-[80vh] overflow-y-auto">
          
          {/* Title & Tagline */}
          <div>
            <h2 id="modal-title" className="font-heading font-bold text-3xl sm:text-4xl text-charcoal-900 tracking-tight">
              {project.title}
            </h2>
            <p className="text-base sm:text-lg text-charcoal-600 mt-2 font-medium">
              {project.tagline}
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-4 text-xs font-mono text-charcoal-500">
              <div>
                <span className="text-charcoal-400">MY ROLE:</span>{' '}
                <span className="text-charcoal-900 font-semibold">{project.role}</span>
              </div>
            </div>
          </div>

          {/* Quick Metrics Strip */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-5 rounded-xl bg-canvas-surface border border-canvas-border">
              {project.metrics.map((m, idx) => (
                <div key={idx}>
                  <div className="text-xs text-charcoal-500 font-mono uppercase tracking-wider">{m.label}</div>
                  <div className="text-sm font-semibold text-charcoal-900 mt-1">{m.value}</div>
                </div>
              ))}
            </div>
          )}

          {/* Problem vs Solution Split */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-canvas-surface border border-canvas-border">
              <h3 className="font-heading font-bold text-base text-charcoal-900 flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-amber-500" />
                The Real-World Challenge
              </h3>
              <p className="text-sm text-charcoal-600 leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="p-6 rounded-xl bg-canvas-surface border border-canvas-border">
              <h3 className="font-heading font-bold text-base text-charcoal-900 flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                The Engineered Solution
              </h3>
              <p className="text-sm text-charcoal-600 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Verified Contribution */}
          <div className="p-6 rounded-xl bg-cobalt-light/40 border border-cobalt-border">
            <h3 className="font-heading font-bold text-base text-charcoal-900 flex items-center gap-2 mb-2">
              <ShieldCheck className="w-4 h-4 text-cobalt" />
              My Verified Role & Direct Contribution
            </h3>
            <p className="text-sm text-charcoal-700 leading-relaxed">
              {project.myContribution}
            </p>
          </div>

          {/* Architecture & Workflow Diagram Visualizer */}
          {project.architecture && (
            <div className="space-y-4">
              <h3 className="font-heading font-bold text-lg text-charcoal-900 flex items-center gap-2">
                <Layers className="w-4 h-4 text-cobalt" />
                System Architecture & Dataflow
              </h3>
              <p className="text-xs sm:text-sm text-charcoal-500">
                {project.architecture.overview}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-2">
                {project.architecture.steps.map((step, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-canvas-surface border border-canvas-border flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[11px] font-mono font-bold text-cobalt bg-cobalt-light px-2 py-0.5 rounded">
                          0{idx + 1}
                        </span>
                        {idx < 3 && <ArrowRight className="w-3.5 h-3.5 text-charcoal-400 hidden lg:block" />}
                      </div>
                      <h4 className="text-xs font-bold text-charcoal-900 mb-1">{step.title}</h4>
                      <p className="text-[11px] text-charcoal-500 leading-normal">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Key Verified Features */}
          <div className="space-y-4">
            <h3 className="font-heading font-bold text-lg text-charcoal-900 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-cobalt" />
              Core Capabilities & Features
            </h3>
            <ul className="space-y-2.5">
              {project.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm text-charcoal-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-cobalt mt-2 shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Verified Technologies Used */}
          <div className="space-y-3">
            <h3 className="font-heading font-bold text-sm text-charcoal-900 uppercase font-mono tracking-wider">
              Verified Tech Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.verifiedTech.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-md bg-canvas-surface border border-canvas-border text-xs font-mono text-charcoal-800"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer Actions */}
        <div className="px-6 sm:px-8 py-5 border-t border-canvas-border bg-canvas-surface flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-cobalt text-white text-xs font-semibold hover:bg-cobalt-hover transition-colors shadow-sm"
              >
                <span>Visit Live Platform</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-canvas border border-canvas-border text-charcoal-800 text-xs font-medium hover:border-charcoal-700 transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>View Repository</span>
              </a>
            )}
          </div>

          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-xs font-mono text-charcoal-500 hover:text-charcoal-900"
          >
            [Close Window Esc]
          </button>
        </div>

      </div>
    </div>
  );
};

