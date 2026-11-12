import React, { useState } from 'react';
import { Mail, Copy, Check, Send, Linkedin, Github, Code2, ArrowUpRight, MessageSquare, Phone } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Honest, direct client mail integration: opens user's email client with pre-filled content
    const emailBody = `From: ${senderName} (${senderEmail})\n\nMessage:\n${message}`;
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
      subject || 'Inquiry from Krish Shah Portfolio'
    )}&body=${encodeURIComponent(emailBody)}`;
    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className="py-24 border-t border-canvas-border bg-canvas relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-canvas-surface border border-canvas-border text-xs font-mono uppercase tracking-wider text-charcoal-700 shadow-subtle mb-3">
            <span className="w-2 h-2 rounded-full bg-cobalt" />
            <span>Initiate Direct Contact</span>
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-charcoal-900 tracking-tight">
            Let’s Engineer Together.
          </h2>
          <p className="text-base text-charcoal-500 mt-2 font-normal leading-relaxed">
            Whether you are recruiting for AI/ML engineering, exploring technical co-founders, or looking for an impactful software developer, reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Direct Contact Details & Action Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary Email Card with 1-Click Copy */}
            <div className="p-7 rounded-2xl bg-canvas-surface border border-canvas-border shadow-subtle space-y-4">
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-xl bg-cobalt-light text-cobalt border border-cobalt-border">
                  <Mail className="w-6 h-6" />
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-canvas border border-canvas-border hover:border-cobalt text-xs font-mono text-charcoal-700 hover:text-cobalt transition-colors"
                  title="Copy email address"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700 font-semibold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
              </div>

              <div>
                <div className="text-xs font-mono text-charcoal-400 uppercase tracking-wider">
                  Direct Email Address
                </div>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="font-heading font-bold text-lg sm:text-xl text-charcoal-900 hover:text-cobalt transition-colors block mt-1"
                >
                  {personalInfo.email}
                </a>
              </div>

              <p className="text-xs text-charcoal-500 leading-relaxed pt-2 border-t border-canvas-border">
                Guaranteed response within 24 hours. Feel free to attach engineering project proposals or interview schedules.
              </p>
            </div>

            {/* Direct Phone Card */}
            <div className="p-6 rounded-2xl bg-canvas-surface border border-canvas-border shadow-subtle flex items-center justify-between">
              <div className="flex items-center gap-3.5">
                <div className="p-2.5 rounded-xl bg-canvas border border-canvas-border text-charcoal-700">
                  <Phone className="w-5 h-5 text-cobalt" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-charcoal-400 uppercase tracking-wider">
                    Direct Phone / WhatsApp
                  </div>
                  <div className="font-heading font-bold text-sm text-charcoal-900">
                    {personalInfo.phone}
                  </div>
                </div>
              </div>
              <a
                href={`tel:${personalInfo.phone.replace(/[\s-]/g, '')}`}
                className="px-3 py-1.5 rounded-lg bg-canvas border border-canvas-border hover:border-cobalt text-xs font-mono text-charcoal-700 hover:text-cobalt transition-colors"
              >
                Call
              </a>
            </div>

            {/* Verified Social Media Channels */}
            <div className="p-6 rounded-2xl bg-canvas-surface border border-canvas-border shadow-subtle space-y-3">
              <div className="text-xs font-mono text-charcoal-400 uppercase tracking-wider">
                Connected Networks
              </div>

              <div className="grid grid-cols-1 gap-2">
                <a
                  href={personalInfo.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-canvas border border-canvas-border hover:border-cobalt flex items-center justify-between group transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <Linkedin className="w-4 h-4 text-cobalt" />
                    <span className="text-xs font-semibold text-charcoal-800">LinkedIn Profile</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-charcoal-400 group-hover:text-cobalt transition-colors" />
                </a>

                <a
                  href={personalInfo.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-canvas border border-canvas-border hover:border-cobalt flex items-center justify-between group transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <Github className="w-4 h-4 text-charcoal-900" />
                    <span className="text-xs font-semibold text-charcoal-800">GitHub Profile (@Krish-065)</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-charcoal-400 group-hover:text-cobalt transition-colors" />
                </a>

                <a
                  href={personalInfo.socialLinks.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-canvas border border-canvas-border hover:border-cobalt flex items-center justify-between group transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <Code2 className="w-4 h-4 text-amber-600" />
                    <span className="text-xs font-semibold text-charcoal-800">LeetCode (@krish_-_24)</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-charcoal-400 group-hover:text-cobalt transition-colors" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Transparent Direct Message Dispatcher (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-9 rounded-2xl bg-canvas-surface border border-canvas-border shadow-subtle">
              <div className="flex items-center gap-2.5 mb-2">
                <MessageSquare className="w-5 h-5 text-cobalt" />
                <h3 className="font-heading font-bold text-xl text-charcoal-900">
                  Compose Direct Message
                </h3>
              </div>
              <p className="text-xs text-charcoal-500 mb-6">
                Fills and launches your default email client with structured message parameters to prevent deliverability loss.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-charcoal-600 mb-1.5 font-medium">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={senderName}
                      onChange={(e) => setSenderName(e.target.value)}
                      placeholder="e.g. Elena Rostova"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-canvas border border-canvas-border text-xs sm:text-sm text-charcoal-900 focus:outline-none focus:ring-2 focus:ring-cobalt focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-charcoal-600 mb-1.5 font-medium">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={senderEmail}
                      onChange={(e) => setSenderEmail(e.target.value)}
                      placeholder="e.g. elena@company.com"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-canvas border border-canvas-border text-xs sm:text-sm text-charcoal-900 focus:outline-none focus:ring-2 focus:ring-cobalt focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-charcoal-600 mb-1.5 font-medium">
                    Subject Line *
                  </label>
                  <input
                    type="text"
                    required
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="e.g. AI/ML Engineering Role / Collaboration Inquiry"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-canvas border border-canvas-border text-xs sm:text-sm text-charcoal-900 focus:outline-none focus:ring-2 focus:ring-cobalt focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-charcoal-600 mb-1.5 font-medium">
                    Your Message *
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Describe your project, team opportunity, timeline, or engineering challenge..."
                    className="w-full px-3.5 py-2.5 rounded-lg bg-canvas border border-canvas-border text-xs sm:text-sm text-charcoal-900 focus:outline-none focus:ring-2 focus:ring-cobalt focus:border-transparent transition-all resize-y"
                  />
                </div>

                <div className="pt-2 flex items-center justify-between flex-wrap gap-4">
                  <div className="text-[11px] font-mono text-charcoal-400">
                    Direct route: <span className="text-charcoal-700">{personalInfo.email}</span>
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-charcoal-900 text-canvas text-xs sm:text-sm font-semibold hover:bg-cobalt transition-colors shadow-sm"
                  >
                    <span>Launch Email Client</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

