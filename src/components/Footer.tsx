import React, { useState, useEffect } from 'react';
import { ArrowUp, Heart, Github, Linkedin, Code2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const [currentTime, setCurrentTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Format time in Indian Standard Time (IST)
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      setCurrentTime(new Intl.DateTimeFormat('en-IN', options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-canvas-border bg-canvas-surface py-14 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between pb-10 border-b border-canvas-border gap-6">
          
          {/* Brand Info */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-charcoal-900 text-canvas flex items-center justify-center font-heading font-bold text-sm tracking-wider">
              KS
            </div>
            <div>
              <div className="font-heading font-bold text-base text-charcoal-900 leading-none">
                {personalInfo.name}
              </div>
              <div className="text-[11px] font-mono text-charcoal-500 mt-1">
                AI/ML Engineer • Software Developer • Entrepreneur
              </div>
            </div>
          </div>

          {/* Local IST Clock */}
          <div className="flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-canvas border border-canvas-border text-xs font-mono text-charcoal-700">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>ANAND / AHMEDABAD (IST):</span>
            <span className="font-bold text-charcoal-900">{currentTime || '18:30:00 PM'}</span>
          </div>

          {/* Social Links & Back to Top */}
          <div className="flex items-center gap-4">
            <a
              href={personalInfo.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-charcoal-500 hover:text-charcoal-900 hover:bg-canvas transition-colors"
              title="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-charcoal-500 hover:text-charcoal-900 hover:bg-canvas transition-colors"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.socialLinks.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-charcoal-500 hover:text-charcoal-900 hover:bg-canvas transition-colors"
              title="LeetCode"
            >
              <Code2 className="w-4 h-4" />
            </a>
            <button
              type="button"
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-canvas border border-canvas-border hover:border-cobalt text-charcoal-700 hover:text-cobalt transition-colors ml-2"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom Footer Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-charcoal-500 gap-4">
          <div>
            © {new Date().getFullYear()} Krish Shah. All rights reserved.
          </div>
          <div className="flex items-center gap-1.5">
            <span>Built with React 18, Vite, TypeScript & Tailwind CSS</span>
          </div>
          <div className="text-charcoal-400">
            Strict Empirical Evidence • No Fabricated Metrics
          </div>
        </div>

      </div>
    </footer>
  );
};

