import React from 'react';
import { Award, CheckCircle2, Lock, ExternalLink, HelpCircle, FileCheck } from 'lucide-react';
import { certificationItems, personalInfo } from '../data/portfolioData';

export const CertificationsSection: React.FC = () => {
  return (
    <section className="py-20 border-t border-canvas-border bg-canvas relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-canvas-surface border border-canvas-border text-xs font-mono uppercase tracking-wider text-charcoal-700 shadow-subtle mb-3">
            <span className="w-2 h-2 rounded-full bg-cobalt" />
            <span>Academic & Professional Credentials</span>
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-charcoal-900 tracking-tight">
            Certifications & Specializations.
          </h2>
          <p className="text-base text-charcoal-500 mt-2 font-normal leading-relaxed">
            Verified academic credentials and specialized curriculum completions. Reusable data structure allowing immediate addition of further Coursera course certificates.
          </p>
        </div>

        {/* Coursera SSO Transparency Note */}
        <div className="mb-10 p-5 rounded-xl bg-canvas-surface border border-canvas-border flex flex-col sm:flex-row items-start gap-3 text-xs sm:text-sm text-charcoal-600">
          <HelpCircle className="w-5 h-5 text-cobalt shrink-0 mt-0.5" />
          <div className="space-y-1">
            <span className="font-semibold text-charcoal-900">Coursera Institution Auth Note:</span>
            <p className="text-charcoal-500 text-xs leading-relaxed">
              University Coursera dashboards (<code className="text-charcoal-700 bg-canvas px-1 py-0.5 rounded">coursera.org/organizations/charusat</code>) are gated by private student SSO. To display additional certificates, simply paste their titles into <code className="text-charcoal-700 bg-canvas px-1 py-0.5 rounded">src/data/portfolioData.ts</code>.
            </p>
          </div>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certificationItems.map((cert) => (
            <div
              key={cert.id}
              className={`p-6 rounded-2xl border shadow-subtle flex flex-col justify-between transition-all ${
                cert.isPlaceholder
                  ? 'bg-canvas border-dashed border-canvas-border'
                  : 'bg-canvas-surface border-canvas-border hover:border-canvas-borderHover'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-2.5 rounded-xl border ${
                    cert.verified ? 'bg-cobalt-light border-cobalt-border text-cobalt' : 'bg-canvas border-canvas-border text-charcoal-400'
                  }`}>
                    {cert.verified ? <FileCheck className="w-5 h-5" /> : <Lock className="w-5 h-5" />}
                  </div>

                  <span className={`text-[11px] font-mono font-medium px-2.5 py-0.5 rounded-full ${
                    cert.verified ? 'bg-emerald-50 text-emerald-800 border border-emerald-200' : 'bg-canvas text-charcoal-500 border border-canvas-border'
                  }`}>
                    {cert.verified ? 'Verified Credential' : 'Editable Slot'}
                  </span>
                </div>

                <h3 className="font-heading font-bold text-lg text-charcoal-900 tracking-tight mb-1">
                  {cert.title}
                </h3>
                <div className="text-xs font-semibold text-cobalt mb-1">
                  {cert.issuer}
                </div>
                <div className="text-[11px] font-mono text-charcoal-500 mb-4">
                  Platform: {cert.platform}
                </div>

                <div className="space-y-1.5 pt-3 border-t border-canvas-border">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-charcoal-400 font-semibold mb-1">
                    Key Competencies
                  </div>
                  {cert.skillsLearned.map((s, idx) => (
                    <div key={idx} className="text-xs text-charcoal-600 flex items-start gap-1.5 leading-snug">
                      <span className="text-cobalt font-bold mt-0.5">•</span>
                      <span>{s}</span>
                    </div>
                  ))}
                </div>
              </div>

              {cert.verified && (
                <div className="pt-4 mt-6 border-t border-canvas-border">
                  <a
                    href={personalInfo.socialLinks.coursera}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-cobalt hover:underline"
                  >
                    <span>Coursera Institution Portal</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

