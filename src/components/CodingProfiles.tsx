import React from 'react';
import { Code2, Github, Linkedin, ExternalLink, Award, CheckCircle, Flame, GitCommit, Star } from 'lucide-react';
import { verifiedLeetCode, verifiedGitHub, personalInfo } from '../data/portfolioData';

export const CodingProfiles: React.FC = () => {
  return (
    <section id="coding" className="py-24 border-t border-canvas-border bg-canvas-subtle/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-canvas-surface border border-canvas-border text-xs font-mono uppercase tracking-wider text-charcoal-700 shadow-subtle mb-3">
            <span className="w-2 h-2 rounded-full bg-cobalt" />
            <span>Verifiable Engineering Footprint</span>
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-charcoal-900 tracking-tight">
            Coding Profiles & Activity.
          </h2>
          <p className="text-base text-charcoal-500 mt-2 font-normal leading-relaxed">
            Algorithmic problem-solving metrics, active open-source repositories, and professional engineering connections verified in real time.
          </p>
        </div>

        {/* Profiles Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* 1. LeetCode Profile Card */}
          <div className="p-7 rounded-2xl bg-canvas-surface border border-canvas-border shadow-subtle flex flex-col justify-between hover:border-canvas-borderHover transition-all">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-xl bg-amber-50 text-amber-700 border border-amber-200">
                  <Code2 className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-mono text-emerald-800 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full font-medium">
                  Verified Stats
                </span>
              </div>

              <div className="font-heading font-bold text-xl text-charcoal-900">
                LeetCode Profile
              </div>
              <div className="text-xs font-mono text-charcoal-500 mb-6">
                @{verifiedLeetCode.username}
              </div>

              {/* Solved Big Number */}
              <div className="p-4 rounded-xl bg-canvas border border-canvas-border mb-6 flex items-center justify-between">
                <div>
                  <div className="text-3xl font-heading font-bold text-charcoal-900">
                    {verifiedLeetCode.totalSolved}
                  </div>
                  <div className="text-xs font-mono text-charcoal-500">
                    Total Problems Solved
                  </div>
                </div>
                <div className="flex flex-col items-end text-right">
                  <span className="text-xs font-mono font-semibold text-emerald-700">
                    Active Solver
                  </span>
                  <span className="text-[10px] font-mono text-charcoal-400">
                    DSA & Optimization
                  </span>
                </div>
              </div>

              {/* Difficulty Breakdown Bars */}
              <div className="space-y-3 mb-6">
                <div>
                  <div className="flex justify-between text-xs font-mono mb-1">
                    <span className="text-charcoal-600 font-medium">Medium (Algorithmic Core)</span>
                    <span className="font-bold text-charcoal-900">{verifiedLeetCode.medium}</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-canvas-border overflow-hidden">
                    <div
                      className="h-full bg-amber-500 rounded-full"
                      style={{ width: `${(verifiedLeetCode.medium / verifiedLeetCode.totalSolved) * 100}%` }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-mono mb-1">
                    <span className="text-charcoal-600 font-medium">Easy (Fundamentals)</span>
                    <span className="font-bold text-charcoal-900">{verifiedLeetCode.easy}</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-canvas-border overflow-hidden">
                    <div
                      className="h-full bg-teal-500 rounded-full"
                      style={{ width: `${(verifiedLeetCode.easy / verifiedLeetCode.totalSolved) * 100}%` }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-mono mb-1">
                    <span className="text-charcoal-600 font-medium">Hard (Complex)</span>
                    <span className="font-bold text-charcoal-900">{verifiedLeetCode.hard}</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-canvas-border overflow-hidden">
                    <div
                      className="h-full bg-rose-500 rounded-full"
                      style={{ width: `${(verifiedLeetCode.hard / verifiedLeetCode.totalSolved) * 100}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Verified Badge */}
              <div className="p-3 rounded-lg bg-canvas border border-canvas-border flex items-center gap-3">
                <img
                  src={verifiedLeetCode.badgeIcon}
                  alt="50 Days Badge"
                  className="w-8 h-8 object-contain shrink-0"
                />
                <div className="text-xs">
                  <div className="font-semibold text-charcoal-900">{verifiedLeetCode.badge}</div>
                  <div className="text-[11px] text-charcoal-500">Consecutive Daily Problem-Solving</div>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-canvas-border">
              <a
                href={verifiedLeetCode.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-canvas border border-canvas-border hover:border-cobalt text-xs font-semibold text-charcoal-800 hover:text-cobalt transition-colors"
              >
                <span>View Public LeetCode Profile</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* 2. GitHub Profile Card */}
          <div className="p-7 rounded-2xl bg-canvas-surface border border-canvas-border shadow-subtle flex flex-col justify-between hover:border-canvas-borderHover transition-all">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-xl bg-charcoal-900 text-canvas">
                  <Github className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-mono text-emerald-800 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full font-medium">
                  Verified GitHub
                </span>
              </div>

              <div className="font-heading font-bold text-xl text-charcoal-900">
                GitHub Repositories
              </div>
              <div className="text-xs font-mono text-charcoal-500 mb-6">
                @{verifiedGitHub.username}
              </div>

              {/* Public Repos Big Number */}
              <div className="p-4 rounded-xl bg-canvas border border-canvas-border mb-6 flex items-center justify-between">
                <div>
                  <div className="text-3xl font-heading font-bold text-charcoal-900">
                    {verifiedGitHub.publicRepos}
                  </div>
                  <div className="text-xs font-mono text-charcoal-500">
                    Public Repositories
                  </div>
                </div>
                <div className="flex flex-col items-end text-right">
                  <span className="text-xs font-mono font-semibold text-cobalt">
                    Python & TypeScript
                  </span>
                  <span className="text-[10px] font-mono text-charcoal-400">
                    GovTech • Quant • AI
                  </span>
                </div>
              </div>

              {/* Language Breakdown */}
              <div className="space-y-2 mb-6">
                <div className="text-xs font-mono text-charcoal-400 uppercase tracking-wider mb-2 font-semibold">
                  Dominant Stack Languages
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {verifiedGitHub.topLanguages.map((lang, lIdx) => (
                    <span
                      key={lIdx}
                      className="px-2.5 py-1 rounded bg-canvas border border-canvas-border text-xs font-mono text-charcoal-700"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>

              {/* Verified Highlights */}
              <div className="space-y-2 text-xs text-charcoal-600">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-cobalt shrink-0" />
                  <span>Flagship Quant paper trading engine (StocksOperator)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-cobalt shrink-0" />
                  <span>Smart India Hackathon 2026 repository (BhoomiSetu)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-cobalt shrink-0" />
                  <span>Multimodal equity research models (STAGE-Net)</span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-canvas-border">
              <a
                href={verifiedGitHub.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-canvas border border-canvas-border hover:border-cobalt text-xs font-semibold text-charcoal-800 hover:text-cobalt transition-colors"
              >
                <span>Explore GitHub Profile</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* 3. LinkedIn Professional Network Card */}
          <div className="p-7 rounded-2xl bg-canvas-surface border border-canvas-border shadow-subtle flex flex-col justify-between hover:border-canvas-borderHover transition-all">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-xl bg-cobalt-light text-cobalt border border-cobalt-border">
                  <Linkedin className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-mono text-cobalt bg-cobalt-light/60 px-2.5 py-0.5 rounded-full font-medium">
                  Professional Network
                </span>
              </div>

              <div className="font-heading font-bold text-xl text-charcoal-900">
                LinkedIn Profile
              </div>
              <div className="text-xs font-mono text-charcoal-500 mb-6">
                in/krishshah065
              </div>

              <div className="p-4 rounded-xl bg-canvas border border-canvas-border mb-6">
                <div className="text-xs font-mono text-charcoal-400 uppercase tracking-wider mb-1">
                  CURRENT AFFILIATION
                </div>
                <div className="font-heading font-bold text-sm text-charcoal-900">
                  Charusat University (DEPSTAR)
                </div>
                <div className="text-xs text-charcoal-500 mt-0.5">
                  B.Tech Information Technology (2024–2028)
                </div>
              </div>

              <div className="space-y-3 text-xs text-charcoal-600">
                <div className="p-3 rounded-lg bg-canvas border border-canvas-border">
                  <div className="font-semibold text-charcoal-800">Sports Coordinator</div>
                  <div className="text-[11px] text-charcoal-500 mt-0.5">
                    Charusat University athletic leadership and national competition selection.
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-canvas border border-canvas-border">
                  <div className="font-semibold text-charcoal-800">Open for Opportunities</div>
                  <div className="text-[11px] text-charcoal-500 mt-0.5">
                    Seeking AI/ML Engineering, quantitative research, and full-stack software internships.
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-canvas-border">
              <a
                href={personalInfo.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-canvas border border-canvas-border hover:border-cobalt text-xs font-semibold text-charcoal-800 hover:text-cobalt transition-colors"
              >
                <span>Connect on LinkedIn</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

