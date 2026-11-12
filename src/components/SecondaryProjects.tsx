import React from 'react';
import { Github, FolderGit2, ArrowUpRight } from 'lucide-react';
import { secondaryProjects } from '../data/portfolioData';

export const SecondaryProjects: React.FC = () => {
  return (
    <section className="py-20 border-t border-canvas-border bg-canvas-subtle/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-canvas-surface border border-canvas-border text-xs font-mono uppercase tracking-wider text-charcoal-700 shadow-subtle mb-3">
            <span className="w-2 h-2 rounded-full bg-charcoal-400" />
            <span>Additional Repositories & Explorations</span>
          </div>
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-charcoal-900 tracking-tight">
            Secondary Works & Exploratory Code.
          </h2>
          <p className="text-sm text-charcoal-500 mt-2 font-normal leading-relaxed">
            Focused repositories in legal NLP backends, exploratory business analytics, space science datasets, and classical machine learning experimentation.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {secondaryProjects.map((project) => (
            <div
              key={project.id}
              className="p-6 sm:p-7 rounded-2xl bg-canvas-surface border border-canvas-border shadow-subtle hover:border-canvas-borderHover transition-all flex flex-col justify-between"
            >
              <div>
                {/* Meta Header */}
                <div className="flex items-center justify-between gap-3 mb-3">
                  <span className="px-2.5 py-0.5 rounded-full bg-canvas border border-canvas-border text-[11px] font-mono text-charcoal-600">
                    {project.category}
                  </span>
                  <span className="text-xs font-mono text-charcoal-400">
                    {project.date}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-heading font-bold text-xl text-charcoal-900 tracking-tight mb-1">
                  {project.title}
                </h3>
                <p className="text-xs font-medium text-cobalt mb-3">
                  {project.tagline}
                </p>

                {/* Summary */}
                <p className="text-xs sm:text-sm text-charcoal-500 leading-relaxed mb-4">
                  {project.summary}
                </p>

                {/* Features */}
                <ul className="space-y-1.5 mb-6">
                  {project.features.map((feat, fIdx) => (
                    <li key={fIdx} className="text-xs text-charcoal-600 flex items-start gap-2">
                      <span className="text-cobalt font-bold">•</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Tech & GitHub Link */}
              <div className="pt-4 border-t border-canvas-border flex items-center justify-between gap-4">
                <div className="flex flex-wrap gap-1.5">
                  {project.verifiedTech.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded bg-canvas border border-canvas-border text-[10px] font-mono text-charcoal-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-canvas border border-canvas-border text-charcoal-700 hover:text-cobalt hover:border-cobalt transition-colors shrink-0"
                    title="View GitHub Repository"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

