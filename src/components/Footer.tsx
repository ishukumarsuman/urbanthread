import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Check, FileCode, Compass } from 'lucide-react';
import { BASE_CANONICAL_URL } from '../config/seo';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@') || !email.includes('.')) {
      setError('Please enter a valid email address.');
      return;
    }
    setError('');
    setSubscribed(true);
  };

  return (
    <footer className="w-full bg-[#080808] border-t border-neutral-800 text-neutral-400 text-sm">
      {/* Editorial Slogan Banner */}
      <div className="border-b border-neutral-850 py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-7">
            <span className="text-xs uppercase tracking-widest text-neutral-400 block mb-3">
              Independent Fashion Journal
            </span>
            <p className="text-2xl sm:text-3xl lg:text-4xl font-display font-medium text-neutral-100 max-w-2xl leading-tight">
              Curating the dialogue between high fashion craftsmanship and raw street culture.
            </p>
          </div>

          <div className="lg:col-span-5">
            <form onSubmit={handleSubscribe} className="space-y-2">
              <span className="text-xs uppercase tracking-wider text-neutral-300 font-semibold block">
                The Editorial Dispatch
              </span>
              <p className="text-xs text-neutral-400 mb-2">
                Receive weekly streetwear trend breakdowns, silhouette guides, and styling blueprints.
              </p>
              {subscribed ? (
                <div className="p-3 bg-neutral-900 border border-neutral-700 text-neutral-200 text-xs flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>Subscribed to UrbanThread Weekly Dispatch. Welcome aboard.</span>
                </div>
              ) : (
                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    aria-label="Email address for weekly dispatch"
                    className="flex-1 bg-[#141414] border border-neutral-800 px-3.5 py-2 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-500"
                  />
                  <button
                    type="submit"
                    className="px-5 py-2 bg-neutral-200 hover:bg-white text-black text-xs font-semibold uppercase tracking-wider transition-colors shrink-0 cursor-pointer"
                  >
                    Subscribe
                  </button>
                </div>
              )}
              {error && <span className="text-xs text-red-400 block">{error}</span>}
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          
          {/* Col 1: Brand & Academic Statement */}
          <div className="space-y-4">
            <Link to="/" className="text-xl font-display font-bold text-white block">
              UrbanThread
            </Link>
            <p className="text-xs text-neutral-400 leading-relaxed">
              A contemporary fashion and streetwear editorial platform engineered for a college SEO assignment, showcasing on-page metadata optimization, semantic HTML5 hierarchy, and client-side routing.
            </p>
            <div className="text-xs text-neutral-400 flex items-center gap-2 pt-2">
              <span className="w-1.5 h-1.5 bg-neutral-400" />
              <span>Canonical Domain: <code className="text-neutral-400">{BASE_CANONICAL_URL}</code></span>
            </div>
          </div>

          {/* Col 2: Editorial Pages */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-neutral-300">
              Editorial Sections
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Home Overview
                </Link>
              </li>
              <li>
                <Link to="/streetwear-trends" className="hover:text-white transition-colors">
                  Streetwear Trends 2026
                </Link>
              </li>
              <li>
                <Link to="/outfit-ideas" className="hover:text-white transition-colors">
                  Curated Outfit Ideas
                </Link>
              </li>
              <li>
                <Link to="/sneaker-guide" className="hover:text-white transition-colors">
                  Sneaker Silhouette Guide
                </Link>
              </li>
              <li>
                <Link to="/style-tips" className="hover:text-white transition-colors">
                  Style Tips & Layering
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  About Us & SEO Mission
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Topics & Focus Keywords */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-neutral-300">
              Target SEO Topics
            </h3>
            <ul className="space-y-2 text-xs text-neutral-400">
              <li>
                <span className="text-neutral-300">Oversized Silhouettes</span> · Proportion balance
              </li>
              <li>
                <span className="text-neutral-300">Technical Gorpcore</span> · Utility outerwear
              </li>
              <li>
                <span className="text-neutral-300">College Campus Style</span> · Durable layering
              </li>
              <li>
                <span className="text-neutral-300">Retro Runner Footwear</span> · Trouser break guide
              </li>
              <li>
                <span className="text-neutral-300">Monochromatic Palettes</span> · Contrast textures
              </li>
            </ul>
          </div>

          {/* Col 4: Crawl & Technical Resources */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-neutral-300">
              Crawler & Bot Directives
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href="/sitemap.xml"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  <FileCode className="w-3.5 h-3.5" />
                  <span>XML Sitemap Index (/sitemap.xml)</span>
                  <ArrowUpRight className="w-3 h-3 text-neutral-500" />
                </a>
              </li>
              <li>
                <a
                  href="/robots.txt"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  <Compass className="w-3.5 h-3.5" />
                  <span>Robots.txt Directives (/robots.txt)</span>
                  <ArrowUpRight className="w-3 h-3 text-neutral-500" />
                </a>
              </li>
              <li>
                <span className="text-neutral-400 block pt-1">
                  Vercel SPA Config: <code className="text-neutral-300 bg-neutral-900 px-1 py-0.5 border border-neutral-800">vercel.json</code> rewrites enabled.
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-neutral-850 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <p>© 2026 UrbanThread Editorial. All rights reserved. Academic Project for College SEO Assignment.</p>
          <div className="flex items-center gap-4 text-neutral-400">
            <span>WCAG AA Accessible</span>
            <span>·</span>
            <span>Schema.org Validated</span>
            <span>·</span>
            <span>OpenGraph 2.0</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
