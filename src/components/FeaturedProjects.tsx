import React from 'react';
import { ExternalLink, Github, ArrowRight, ShieldCheck, Activity, MapPin, TrendingUp, Store, Scale, QrCode } from 'lucide-react';
import { featuredProjects } from '../data/portfolioData';
import { Project } from '../types';

interface FeaturedProjectsProps {
  onSelectProject: (project: Project) => void;
}

export const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({ onSelectProject }) => {
  return (
    <section id="projects" className="py-24 border-t border-canvas-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-canvas-surface border border-canvas-border text-xs font-mono uppercase tracking-wider text-charcoal-700 shadow-subtle mb-4">
              <span className="w-2 h-2 rounded-full bg-cobalt" />
              <span>Flagship & Featured Engineering</span>
            </div>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-charcoal-900 tracking-tight">
              Selected Works & Systems.
            </h2>
            <p className="text-base text-charcoal-500 mt-3 font-normal leading-relaxed">
              In-depth engineering projects across quantitative trading infrastructure, GovTech computer vision, predictive time-series forecasting, and maritime operations intelligence.
            </p>
          </div>

          <div className="text-xs font-mono text-charcoal-400">
            [ 05 VERIFIED FEATURED SYSTEMS ]
          </div>
        </div>

        {/* Featured Projects List */}
        <div className="space-y-16">
          {featuredProjects.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={project.id}
                className="rounded-2xl bg-canvas-surface border border-canvas-border shadow-subtle hover:border-canvas-borderHover transition-all overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-8 lg:p-10 items-center">
                  
                  {/* Left/Content Column */}
                  <div className={`lg:col-span-7 flex flex-col justify-between ${isEven ? 'order-1' : 'order-1 lg:order-2'}`}>
                    <div>
                      {/* Meta header */}
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        <span className="px-2.5 py-1 rounded-full bg-cobalt-light text-cobalt text-xs font-mono font-medium">
                          {project.category}
                        </span>
                        <span className="text-xs font-mono text-charcoal-400">
                          {project.date}
                        </span>
                        {project.isFlagship && (
                          <span className="px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-800 border border-amber-200 text-[11px] font-mono font-semibold">
                            Flagship Platform
                          </span>
                        )}
                      </div>

                      {/* Title & Tagline */}
                      <h3 className="font-heading font-bold text-2xl sm:text-3xl text-charcoal-900 tracking-tight mb-2">
                        {project.title}
                      </h3>
                      <p className="text-sm sm:text-base text-charcoal-600 font-medium mb-4">
                        {project.tagline}
                      </p>

                      {/* Summary */}
                      <p className="text-sm text-charcoal-500 leading-relaxed mb-6">
                        {project.summary}
                      </p>

                      {/* Verified Role Pill */}
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-canvas border border-canvas-border text-xs text-charcoal-700 font-medium mb-6">
                        <ShieldCheck className="w-3.5 h-3.5 text-cobalt" />
                        <span>Role: {project.role}</span>
                      </div>

                      {/* Key Tech Tags */}
                      <div className="flex flex-wrap gap-1.5 mb-8">
                        {project.verifiedTech.map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2.5 py-1 rounded bg-canvas border border-canvas-border text-[11px] font-mono text-charcoal-700"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-canvas-border">
                      <button
                        type="button"
                        onClick={() => onSelectProject(project)}
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-charcoal-900 text-canvas text-xs font-semibold hover:bg-cobalt transition-colors shadow-sm"
                      >
                        <span>Deep-Dive Case Study</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>

                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-lg bg-canvas border border-canvas-border text-charcoal-800 text-xs font-medium hover:border-charcoal-700 transition-colors"
                        >
                          <span>Live Site</span>
                          <ExternalLink className="w-3 h-3 text-cobalt" />
                        </a>
                      )}

                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-lg bg-canvas border border-canvas-border text-charcoal-800 text-xs font-medium hover:border-charcoal-700 transition-colors"
                        >
                          <Github className="w-3.5 h-3.5" />
                          <span>Code</span>
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Right/Schematic Visualizer Column */}
                  <div className={`lg:col-span-5 ${isEven ? 'order-2' : 'order-2 lg:order-1'}`}>
                    <div className="w-full rounded-xl bg-canvas border border-canvas-border p-5 shadow-subtle flex flex-col justify-between aspect-[4/3]">
                      
                      {/* Top Bar of Schematic */}
                      <div className="flex items-center justify-between pb-3 border-b border-canvas-border text-[11px] font-mono text-charcoal-500">
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-cobalt" />
                          <span className="font-semibold text-charcoal-800">SYSTEM SCHEMATIC</span>
                        </div>
                        <span>REV-2026</span>
                      </div>

                      {/* Center Graphic Representation specific to project */}
                      <div className="py-4 my-auto">
                        {project.id === 'stocksoperator' && (
                          <div className="space-y-3">
                            <div className="flex items-center justify-between text-xs font-mono text-charcoal-600 bg-canvas-surface p-2.5 rounded-lg border border-canvas-border">
                              <span className="flex items-center gap-2">
                                <Activity className="w-4 h-4 text-cobalt" />
                                <span>TICK REPLAY SIMULATOR</span>
                              </span>
                              <span className="text-emerald-700 font-semibold">STREAMING</span>
                            </div>
                            <div className="h-20 bg-canvas-surface rounded-lg border border-canvas-border p-2 flex items-end justify-between gap-1">
                              {[45, 60, 52, 78, 64, 88, 72, 95, 84, 110, 92, 120].map((h, i) => (
                                <div key={i} className="flex-1 flex flex-col items-center gap-1 h-full justify-end">
                                  <div
                                    className={`w-full rounded-sm ${i % 2 === 0 ? 'bg-cobalt/70' : 'bg-emerald-500/70'}`}
                                    style={{ height: `${h}%` }}
                                  />
                                </div>
                              ))}
                            </div>
                            <div className="flex justify-between text-[10px] font-mono text-charcoal-500">
                              <span>Multi-Asset Paper Engine</span>
                              <span>Zero Capital At Risk</span>
                            </div>
                          </div>
                        )}

                        {project.id === 'bhoomisetu' && (
                          <div className="space-y-3">
                            <div className="flex items-center justify-between text-xs font-mono text-charcoal-600 bg-canvas-surface p-2.5 rounded-lg border border-canvas-border">
                              <span className="flex items-center gap-2">
                                <MapPin className="w-4 h-4 text-emerald-600" />
                                <span>CADASTRAL GIS & INDIC OCR</span>
                              </span>
                              <span className="text-cobalt font-semibold">14-DIGIT ULPIN</span>
                            </div>
                            <div className="grid grid-cols-2 gap-2 text-[11px] font-mono">
                              <div className="p-2.5 bg-canvas-surface rounded border border-canvas-border">
                                <div className="text-charcoal-400 text-[10px]">DOCUMENT OCR</div>
                                <div className="text-charcoal-800 font-semibold mt-1">16 Legal Entities</div>
                              </div>
                              <div className="p-2.5 bg-canvas-surface rounded border border-canvas-border">
                                <div className="text-charcoal-400 text-[10px]">SPATIAL DB</div>
                                <div className="text-charcoal-800 font-semibold mt-1">PostGIS 16 Polygon</div>
                              </div>
                            </div>
                            <div className="text-[10px] font-mono text-charcoal-500 text-center">
                              SIH 2026 Problem Statement #18 Solution
                            </div>
                          </div>
                        )}

                        {project.id === 'futureskills-ai' && (
                          <div className="space-y-3">
                            <div className="flex items-center justify-between text-xs font-mono text-charcoal-600 bg-canvas-surface p-2.5 rounded-lg border border-canvas-border">
                              <span className="flex items-center gap-2">
                                <TrendingUp className="w-4 h-4 text-cobalt" />
                                <span>14-MONTH TIME-SERIES ML</span>
                              </span>
                              <span className="text-emerald-700 font-semibold">95% CI</span>
                            </div>
                            <div className="p-3 bg-canvas-surface rounded-lg border border-canvas-border space-y-1.5 font-mono text-[11px]">
                              <div className="flex justify-between">
                                <span className="text-charcoal-500">Gateway:</span>
                                <span className="text-charcoal-800">Node / Express (JWT)</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-charcoal-500">Forecasting:</span>
                                <span className="text-charcoal-800">FastAPI (Python ML)</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-charcoal-500">Data Store:</span>
                                <span className="text-charcoal-800">MongoDB Atlas</span>
                              </div>
                            </div>
                          </div>
                        )}

                        {project.id === 'cafecanopy' && (
                          <div className="space-y-3">
                            <div className="flex items-center justify-between text-xs font-mono text-charcoal-600 bg-canvas-surface p-2.5 rounded-lg border border-canvas-border">
                              <span className="flex items-center gap-2">
                                <Store className="w-4 h-4 text-amber-700" />
                                <span>POS & KITCHEN WEBSOCKETS</span>
                              </span>
                              <span className="text-emerald-700 font-semibold">DYNAMIC UPI</span>
                            </div>
                            <div className="grid grid-cols-2 gap-2 text-[11px] font-mono">
                              <div className="p-2.5 bg-canvas-surface rounded border border-canvas-border">
                                <div className="text-charcoal-400 text-[10px]">KITCHEN SYNC</div>
                                <div className="text-charcoal-800 font-semibold mt-1">Socket.io Dispatch</div>
                              </div>
                              <div className="p-2.5 bg-canvas-surface rounded border border-canvas-border">
                                <div className="text-charcoal-400 text-[10px]">FLOOR SYSTEM</div>
                                <div className="text-charcoal-800 font-semibold mt-1">Multi-Floor Seating</div>
                              </div>
                            </div>
                            <div className="text-[10px] font-mono text-charcoal-500 text-center">
                              Odoo x Parul Hackathon Finalist Project
                            </div>
                          </div>
                        )}

                        {project.id === 'ecourt' && (
                          <div className="space-y-3">
                            <div className="flex items-center justify-between text-xs font-mono text-charcoal-600 bg-canvas-surface p-2.5 rounded-lg border border-canvas-border">
                              <span className="flex items-center gap-2">
                                <Scale className="w-4 h-4 text-cobalt" />
                                <span>16-DIGIT CNR & STATUTORY RAG</span>
                              </span>
                              <span className="text-emerald-700 font-semibold">3,000+ COURTS</span>
                            </div>
                            <div className="p-3 bg-canvas-surface rounded-lg border border-canvas-border space-y-1.5 font-mono text-[11px]">
                              <div className="flex justify-between">
                                <span className="text-charcoal-500">Legal Corpus:</span>
                                <span className="text-charcoal-800">Constitution, BNS, BNSS, BSA</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-charcoal-500">Vector Search:</span>
                                <span className="text-charcoal-800">FastAPI & pgvector</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-charcoal-500">Evidence Vault:</span>
                                <span className="text-charcoal-800">SHA-256 & AES-256-GCM</span>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Bottom Visualizer Link */}
                      <button
                        type="button"
                        onClick={() => onSelectProject(project)}
                        className="w-full pt-2 border-t border-canvas-border text-[11px] font-mono text-cobalt hover:underline text-left flex items-center justify-between"
                      >
                        <span>Inspect Architecture Spec</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>

                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

