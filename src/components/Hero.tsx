import React, { useState } from 'react';
import { ArrowDown, FileText, Github, Linkedin, ExternalLink, Code2, Sparkles, Image as ImageIcon } from 'lucide-react';
import { personalInfo, verifiedLeetCode, verifiedGitHub } from '../data/portfolioData';

export const Hero: React.FC = () => {
  // Allows user to toggle between editorial blueprint placeholder and verified GitHub avatar
  const [useAvatar, setUseAvatar] = useState(false);

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

          {/* Right Column: Editorial Portrait Placeholder with Replacement Guide */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-[380px] aspect-[4/5] rounded-2xl p-3 bg-canvas-surface border border-canvas-border shadow-elevated">
              
              {/* Inner Frame */}
              <div className="relative w-full h-full rounded-xl overflow-hidden bg-gradient-to-b from-canvas-subtle via-canvas to-canvas-border/40 border border-canvas-border flex flex-col items-center justify-between p-6 text-center select-none">
                
                {/* Header status bar inside portrait card */}
                <div className="w-full flex items-center justify-between text-[11px] font-mono text-charcoal-500">
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-cobalt" />
                    PORTRAIT FRAME
                  </span>
                  <span className="px-2 py-0.5 rounded bg-canvas border border-canvas-border text-[10px]">
                    4 : 5 RATIO
                  </span>
                </div>

                {/* Center Visual: Avatar vs Placeholder */}
                {useAvatar ? (
                  <div className="relative w-36 h-36 rounded-full overflow-hidden border-2 border-cobalt shadow-md my-auto">
                    <img
                      src="https://avatars.githubusercontent.com/u/183746928?v=4"
                      alt="Krish Shah GitHub Avatar"
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center my-auto">
                    {/* Architectural Monogram Icon */}
                    <div className="relative w-28 h-28 rounded-2xl bg-charcoal-900 text-canvas flex flex-col items-center justify-center mb-4 shadow-elevated group">
                      <div className="font-heading font-bold text-4xl tracking-tight text-white">
                        KS
                      </div>
                      <div className="w-6 h-0.5 bg-cobalt rounded-full mt-1" />
                      <div className="absolute -bottom-2 -right-2 px-2 py-0.5 rounded-md bg-cobalt text-white text-[10px] font-mono font-semibold shadow-sm">
                        AI/ML
                      </div>
                    </div>

                    <div className="font-heading font-semibold text-charcoal-900 text-base">
                      Krish Shah
                    </div>
                    <div className="text-xs text-charcoal-500 mt-1 max-w-[220px]">
                      DEPSTAR, Charusat University
                    </div>
                  </div>
                )}

                {/* Footer Replacement Instruction Pill */}
                <div className="w-full pt-3 border-t border-canvas-border/80 flex flex-col gap-2">
                  <div className="text-[11px] text-charcoal-500 font-mono leading-tight">
                    {useAvatar ? 'Displaying GitHub Profile Avatar' : 'Ready for your headshot photo'}
                  </div>
                  
                  {/* Quick Toggle for user convenience */}
                  <button
                    type="button"
                    onClick={() => setUseAvatar(!useAvatar)}
                    className="inline-flex items-center justify-center gap-1.5 py-1 px-2.5 rounded-md text-[11px] font-medium bg-canvas border border-canvas-border hover:border-cobalt text-charcoal-700 hover:text-cobalt transition-colors"
                  >
                    <ImageIcon className="w-3 h-3" />
                    <span>{useAvatar ? 'Switch to Editorial Monogram' : 'Preview with GitHub Avatar'}</span>
                  </button>
                </div>

              </div>

              {/* Decorative Corner Editorial Accents */}
              <div className="absolute -top-1.5 -left-1.5 w-3 h-3 border-t-2 border-l-2 border-charcoal-400" />
              <div className="absolute -top-1.5 -right-1.5 w-3 h-3 border-t-2 border-r-2 border-charcoal-400" />
              <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 border-b-2 border-l-2 border-charcoal-400" />
              <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 border-b-2 border-r-2 border-charcoal-400" />
            </div>

            {/* Quick Caption */}
            <div className="text-[11px] text-charcoal-400 font-mono mt-3 text-center">
              Replace file at <code className="text-charcoal-700 bg-canvas-subtle px-1 py-0.5 rounded">public/avatar.jpg</code> or toggle above
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

