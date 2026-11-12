import React from 'react';
import { ArrowDown, FileText, Github, Linkedin, ExternalLink, Code2 } from 'lucide-react';
import { personalInfo, verifiedLeetCode, verifiedGitHub } from '../data/portfolioData';

export const Hero: React.FC = () => {

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Editorial Headline, Bio, and CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Editorial Category Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-canvas-surface border border-canvas-border text-xs font-mono uppercase tracking-wider text-charcoal-700 shadow-subtle mb-6">
              <span className="w-2 h-2 rounded-full bg-cobalt" />
              <span>{personalInfo.roleTitle}</span>
            </div>

            {/* Main Editorial Headline */}
            <h1 className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl text-charcoal-900 tracking-tight leading-[1.08] mb-6">
              Building intelligent systems.{' '}
              <span className="text-cobalt inline-block">
                Turning ideas into impact.
              </span>
            </h1>

            {/* Polished Supporting Narrative */}
            <p className="text-base sm:text-lg text-charcoal-500 font-normal leading-relaxed max-w-2xl mb-8">
              {personalInfo.secondaryBio}
            </p>

            {/* Key Verified Highlights Strip */}
            <div className="grid grid-cols-3 gap-3 sm:gap-6 w-full max-w-xl py-4 px-5 rounded-xl bg-canvas-surface border border-canvas-border shadow-subtle mb-8">
              <div>
                <div className="text-xl sm:text-2xl font-heading font-bold text-charcoal-900">
                  {verifiedLeetCode.totalSolved}
                </div>
                <div className="text-[11px] sm:text-xs text-charcoal-500 font-mono">
                  LeetCode Solved ({verifiedLeetCode.medium} Med)
                </div>
              </div>
              <div className="border-l border-canvas-border pl-3 sm:pl-6">
                <div className="text-xl sm:text-2xl font-heading font-bold text-charcoal-900">
                  {verifiedGitHub.publicRepos}
                </div>
                <div className="text-[11px] sm:text-xs text-charcoal-500 font-mono">
                  Public Repositories
                </div>
              </div>
              <div className="border-l border-canvas-border pl-3 sm:pl-6">
                <div className="text-xl sm:text-2xl font-heading font-bold text-cobalt">
                  SIH & Quant
                </div>
                <div className="text-[11px] sm:text-xs text-charcoal-500 font-mono">
                  GovTech & Trading AI
                </div>
              </div>
            </div>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-charcoal-900 text-canvas font-medium text-sm hover:bg-cobalt transition-all shadow-sm group"
              >
                <span>Explore Featured Projects</span>
                <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </a>

              <a
                href={personalInfo.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-lg bg-canvas-surface border border-canvas-border text-charcoal-800 font-medium text-sm hover:border-charcoal-700 hover:bg-canvas-subtle transition-all shadow-subtle"
              >
                <FileText className="w-4 h-4 text-cobalt" />
                <span>Download Résumé</span>
              </a>
            </div>

            {/* Verified Social Profile Links */}
            <div className="flex items-center gap-4 text-xs font-mono text-charcoal-500">
              <span className="text-charcoal-400">VERIFIED PROFILES:</span>
              <div className="flex items-center gap-3">
                <a
                  href={personalInfo.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-charcoal-700 hover:text-cobalt transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span className="underline decoration-canvas-borderHover underline-offset-4">GitHub</span>
                </a>
                <span className="text-canvas-border">•</span>
                <a
                  href={personalInfo.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-charcoal-700 hover:text-cobalt transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                  <span className="underline decoration-canvas-borderHover underline-offset-4">LinkedIn</span>
                </a>
                <span className="text-canvas-border">•</span>
                <a
                  href={personalInfo.socialLinks.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-charcoal-700 hover:text-cobalt transition-colors"
                >
                  <Code2 className="w-4 h-4" />
                  <span className="underline decoration-canvas-borderHover underline-offset-4">LeetCode</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Editorial Portrait Showcase with Krish's Photo */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-[380px] aspect-[4/5] rounded-2xl p-2.5 bg-canvas-surface border border-canvas-border shadow-elevated group">
              
              {/* Inner Image Frame */}
              <div className="relative w-full h-full rounded-xl overflow-hidden bg-canvas-subtle border border-canvas-border shadow-inner">
                <img
                  src="/krish-shah.jpg"
                  alt="Krish Shah — AI/ML Engineer & Software Developer"
                  className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
                />
                
                {/* Subtle vignette gradient overlay at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/80 via-charcoal-900/10 to-transparent pointer-events-none" />

                {/* Floating Nameplate & Active Status Card */}
                <div className="absolute bottom-3 left-3 right-3 p-3.5 rounded-xl bg-canvas-surface/95 backdrop-blur-md border border-canvas-border text-left shadow-subtle flex items-center justify-between">
                  <div>
                    <div className="font-heading font-bold text-sm text-charcoal-900 leading-tight">
                      Krish Shah
                    </div>
                    <div className="text-[11px] font-mono text-charcoal-500 mt-0.5">
                      AI/ML • SDE Intern @ Bluestock
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 text-[10px] font-mono text-emerald-800 border border-emerald-200 shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Active</span>
                  </div>
                </div>

              </div>

              {/* Decorative Corner Editorial Accents */}
              <div className="absolute -top-1.5 -left-1.5 w-3 h-3 border-t-2 border-l-2 border-charcoal-400" />
              <div className="absolute -top-1.5 -right-1.5 w-3 h-3 border-t-2 border-r-2 border-charcoal-400" />
              <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 border-b-2 border-l-2 border-charcoal-400" />
              <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 border-b-2 border-r-2 border-charcoal-400" />
            </div>

            {/* Subtitle Caption */}
            <div className="text-[11px] text-charcoal-500 font-mono mt-3 text-center">
              Krish Shah • B.Tech IT (Charusat University)
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

