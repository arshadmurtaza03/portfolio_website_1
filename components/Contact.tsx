'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Linkedin, Github, MessageSquare } from 'lucide-react';
import { personalDetails } from '@/data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    const formspreeKey = process.env.NEXT_PUBLIC_FORMSPREE_KEY || 'xknl...';

    try {
      const response = await fetch(`https://formspree.io/f/${formspreeKey}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        const data = await response.json();
        throw new Error(data.error || 'Failed to submit form. Please email directly.');
      }
    } catch (err: any) {
      // If Formspree key is unconfigured or failed, present user-friendly notification
      setStatus('error');
      setErrorMessage(err.message || 'Error submitting message. Feel free to reach out directly via email!');
    }
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-3 mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>LET'S CONNECT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Get In <span className="gradient-text-blue">Touch</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
            Have an exciting AI engineering opportunity or project? Send a message or reach out directly.
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Direct Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="glass-panel rounded-2xl p-6 sm:p-8 space-y-6">
              <h3 className="text-xl font-bold text-white tracking-tight">
                Contact Details
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                I am actively seeking roles in AI Engineering, Generative AI, Deep Learning, and MLOps.
              </p>

              <div className="space-y-4 pt-2">
                {/* Email */}
                <a
                  href={`mailto:${personalDetails.email}`}
                  className="flex items-center gap-4 p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-blue-500/40 transition-colors group"
                >
                  <div className="p-3 rounded-lg bg-blue-500/10 text-cyan-400 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-mono">Email</div>
                    <div className="text-sm font-semibold text-white group-hover:text-cyan-300">
                      {personalDetails.email}
                    </div>
                  </div>
                </a>

                {/* Phone */}
                <div className="flex items-center gap-4 p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
                  <div className="p-3 rounded-lg bg-blue-500/10 text-cyan-400">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-mono">Phone</div>
                    <div className="text-sm font-semibold text-white">
                      {personalDetails.phone}
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-4 p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
                  <div className="p-3 rounded-lg bg-blue-500/10 text-cyan-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-mono">Location</div>
                    <div className="text-sm font-semibold text-white">
                      {personalDetails.location}
                    </div>
                  </div>
                </div>
              </div>

              {/* Social links */}
              <div className="pt-4 border-t border-slate-800 flex items-center gap-3">
                <a
                  href={personalDetails.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-xs font-semibold text-slate-200 border border-slate-800 transition-colors"
                >
                  <Linkedin className="w-4 h-4 text-blue-400" />
                  LinkedIn
                </a>
                <a
                  href={personalDetails.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-xs font-semibold text-slate-200 border border-slate-800 transition-colors"
                >
                  <Github className="w-4 h-4 text-cyan-400" />
                  GitHub
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Formspree Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <form
              onSubmit={handleSubmit}
              className="glass-panel rounded-2xl p-6 sm:p-8 space-y-5 border border-slate-800"
            >
              <h3 className="text-xl font-bold text-white tracking-tight">
                Send a Message
              </h3>

              {status === 'success' && (
                <div className="flex items-center gap-3 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm">
                  <CheckCircle2 className="w-5 h-5 shrink-0" />
                  <span>Thank you! Your message has been sent successfully. I will get back to you soon.</span>
                </div>
              )}

              {status === 'error' && (
                <div className="flex items-center gap-3 p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 text-sm">
                  <AlertCircle className="w-5 h-5 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-xs font-mono text-slate-300">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full px-4 py-2.5 rounded-xl text-sm glass-input transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-xs font-mono text-slate-300">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full px-4 py-2.5 rounded-xl text-sm glass-input transition-all"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="subject" className="text-xs font-mono text-slate-300">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="AI Engineering Inquiry / Opportunity"
                  className="w-full px-4 py-2.5 rounded-xl text-sm glass-input transition-all"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="message" className="text-xs font-mono text-slate-300">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Hi Arshad, I saw your portfolio and would like to discuss..."
                  className="w-full px-4 py-2.5 rounded-xl text-sm glass-input transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 shadow-lg shadow-blue-500/25 transition-all duration-300 disabled:opacity-50"
              >
                {status === 'loading' ? (
                  <span>Sending Message...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
