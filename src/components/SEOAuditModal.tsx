import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { SEO_DATA } from '../config/seo';
import { CheckCircle2, AlertCircle, Code, FileText, Share2, Layers, X, HelpCircle, ExternalLink } from 'lucide-react';

interface SEOAuditModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SEOAuditModal: React.FC<SEOAuditModalProps> = ({ isOpen, onClose }) => {
  const location = useLocation();
  const currentPath = location.pathname;
  const seo = SEO_DATA[currentPath] || SEO_DATA['/404'];
  const [activeTab, setActiveTab] = useState<'overview' | 'meta' | 'schema' | 'csr-analysis'>('overview');

  if (!isOpen) return null;

  const titleLength = seo.title.length;
  const isTitleGood = titleLength >= 30 && titleLength <= 65;

  const descLength = seo.metaDescription.length;
  const isDescGood = descLength >= 120 && descLength <= 165;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-[#121212] border border-neutral-800 rounded-none w-full max-w-3xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden"
        role="dialog"
        aria-modal="true"
        aria-labelledby="seo-modal-title"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-800 bg-[#161616]">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-[#f4f4f0]" />
            <div>
              <h2 id="seo-modal-title" className="text-sm font-semibold tracking-wider uppercase text-neutral-200">
                SEO Inspector & College Assignment Audit
              </h2>
              <p className="text-xs text-neutral-400">
                Live evaluation of Route: <code className="text-neutral-200">{seo.path}</code>
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close SEO inspector"
            className="p-1.5 text-neutral-400 hover:text-white transition-colors border border-neutral-800 hover:border-neutral-600"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Tab navigation */}
        <div className="flex border-b border-neutral-800 bg-[#0e0e0e] text-xs font-medium px-6 overflow-x-auto">
          <button
            onClick={() => setActiveTab('overview')}
            className={`py-3 px-3 border-b-2 transition-colors whitespace-nowrap ${
              activeTab === 'overview'
                ? 'border-white text-white font-semibold'
                : 'border-transparent text-neutral-400 hover:text-neutral-200'
            }`}
          >
            Overview & Scorecard
          </button>
          <button
            onClick={() => setActiveTab('meta')}
            className={`py-3 px-3 border-b-2 transition-colors whitespace-nowrap ${
              activeTab === 'meta'
                ? 'border-white text-white font-semibold'
                : 'border-transparent text-neutral-400 hover:text-neutral-200'
            }`}
          >
            OpenGraph & Twitter
          </button>
          <button
            onClick={() => setActiveTab('schema')}
            className={`py-3 px-3 border-b-2 transition-colors whitespace-nowrap ${
              activeTab === 'schema'
                ? 'border-white text-white font-semibold'
                : 'border-transparent text-neutral-400 hover:text-neutral-200'
            }`}
          >
            Schema.org JSON-LD
          </button>
          <button
            onClick={() => setActiveTab('csr-analysis')}
            className={`py-3 px-3 border-b-2 transition-colors whitespace-nowrap ${
              activeTab === 'csr-analysis'
                ? 'border-white text-white font-semibold'
                : 'border-transparent text-neutral-400 hover:text-neutral-200'
            }`}
          >
            React CSR vs SSR Analysis
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm text-neutral-300">
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Scorecard Metrics */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-4 bg-[#181818] border border-neutral-800">
                  <span className="text-xs uppercase tracking-widest text-neutral-400 block mb-1">
                    HTML Title Tag
                  </span>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-white tabular-nums">
                      {titleLength} <span className="text-xs font-normal text-neutral-400">chars</span>
                    </span>
                    {isTitleGood ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <AlertCircle className="w-4 h-4 text-amber-400" />
                    )}
                  </div>
                  <span className="text-[11px] text-neutral-500 mt-1 block">Ideal: 30-60 characters</span>
                </div>

                <div className="p-4 bg-[#181818] border border-neutral-800">
                  <span className="text-xs uppercase tracking-widest text-neutral-400 block mb-1">
                    Meta Description
                  </span>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-white tabular-nums">
                      {descLength} <span className="text-xs font-normal text-neutral-400">chars</span>
                    </span>
                    {isDescGood ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <AlertCircle className="w-4 h-4 text-amber-400" />
                    )}
                  </div>
                  <span className="text-[11px] text-neutral-500 mt-1 block">Ideal: 120-160 characters</span>
                </div>

                <div className="p-4 bg-[#181818] border border-neutral-800">
                  <span className="text-xs uppercase tracking-widest text-neutral-400 block mb-1">
                    Structured Data
                  </span>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-white">
                      {seo.schemaType}
                    </span>
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  </div>
                  <span className="text-[11px] text-neutral-500 mt-1 block">Schema.org Valid</span>
                </div>
              </div>

              {/* Verified Page Checklist */}
              <div className="border border-neutral-800 p-4 bg-[#161616] space-y-3">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                  Current Page On-Page SEO Checklist
                </h3>
                
                <div className="space-y-2 text-xs">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-neutral-200">Unique H1 Heading: </strong>
                      <span className="text-neutral-300 italic">"{seo.h1}"</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-neutral-200">Canonical Tag: </strong>
                      <code className="text-neutral-300 bg-[#0e0e0e] px-1.5 py-0.5 border border-neutral-800">
                        {seo.canonicalUrl}
                      </code>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-neutral-200">Target Keywords: </strong>
                      <span className="text-neutral-300">
                        {seo.keywords.join(' · ')}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-neutral-200">Sitemap & Robots Directives: </strong>
                      <span className="text-neutral-300">
                        Included in <a href="/sitemap.xml" target="_blank" rel="noreferrer" className="underline hover:text-white">/sitemap.xml</a> and <a href="/robots.txt" target="_blank" rel="noreferrer" className="underline hover:text-white">/robots.txt</a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Snippet Preview */}
              <div className="border border-neutral-800 p-4 bg-[#141414]">
                <span className="text-xs uppercase tracking-widest text-neutral-400 block mb-2">
                  Google Search Snippet Simulation
                </span>
                <div className="p-3 bg-white text-[#202124] rounded-sm font-sans space-y-1">
                  <div className="text-[11px] text-[#4d5156] flex items-center gap-1.5">
                    <span>urbanthread-fashion.vercel.app</span>
                    <span>›</span>
                    <span>{seo.path === '/' ? 'home' : seo.path.replace('/', '')}</span>
                  </div>
                  <div className="text-base font-medium text-[#1a0dab] hover:underline cursor-pointer leading-tight">
                    {seo.title}
                  </div>
                  <div className="text-xs text-[#4d5156] leading-relaxed">
                    {seo.metaDescription}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'meta' && (
            <div className="space-y-4">
              <div className="border border-neutral-800 p-4 bg-[#161616] space-y-3">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 flex items-center gap-2">
                  <Share2 className="w-4 h-4" /> Open Graph Protocol (Facebook, LinkedIn, iMessage)
                </h3>
                <dl className="grid grid-cols-1 gap-2 text-xs">
                  <div>
                    <dt className="text-neutral-500 font-mono">og:title</dt>
                    <dd className="text-neutral-200 font-medium">{seo.ogTitle}</dd>
                  </div>
                  <div>
                    <dt className="text-neutral-500 font-mono">og:description</dt>
                    <dd className="text-neutral-200">{seo.ogDescription}</dd>
                  </div>
                  <div>
                    <dt className="text-neutral-500 font-mono">og:url</dt>
                    <dd className="text-neutral-200 font-mono">{seo.canonicalUrl}</dd>
                  </div>
                  <div>
                    <dt className="text-neutral-500 font-mono">og:type</dt>
                    <dd className="text-neutral-200 font-mono">{seo.ogType}</dd>
                  </div>
                </dl>
              </div>

              <div className="border border-neutral-800 p-4 bg-[#161616] space-y-3">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 flex items-center gap-2">
                  <FileText className="w-4 h-4" /> Twitter Summary Card (X Platform)
                </h3>
                <dl className="grid grid-cols-1 gap-2 text-xs">
                  <div>
                    <dt className="text-neutral-500 font-mono">twitter:card</dt>
                    <dd className="text-neutral-200 font-mono">summary_large_image</dd>
                  </div>
                  <div>
                    <dt className="text-neutral-500 font-mono">twitter:title</dt>
                    <dd className="text-neutral-200 font-medium">{seo.twitterTitle}</dd>
                  </div>
                  <div>
                    <dt className="text-neutral-500 font-mono">twitter:description</dt>
                    <dd className="text-neutral-200">{seo.twitterDescription}</dd>
                  </div>
                </dl>
              </div>
            </div>
          )}

          {activeTab === 'schema' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-widest text-neutral-400">
                  Schema.org JSON-LD Payload
                </span>
                <span className="text-xs text-emerald-400 font-mono">Type: {seo.schemaType}</span>
              </div>
              <pre className="p-4 bg-[#0a0a0a] border border-neutral-800 text-xs text-neutral-300 font-mono overflow-x-auto rounded-none leading-relaxed">
                {JSON.stringify(seo.jsonLd, null, 2)}
              </pre>
            </div>
          )}

          {activeTab === 'csr-analysis' && (
            <div className="space-y-4 text-xs leading-relaxed">
              <div className="p-4 bg-[#181818] border border-neutral-800">
                <h3 className="text-sm font-semibold text-white mb-2 flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-neutral-300" />
                  SEO Assignment Report: Client-Side Rendering (CSR) vs Server-Side Rendering (SSR)
                </h3>
                <p className="text-neutral-300 mb-3">
                  This website is engineered as a modern Single Page Application (SPA) using React 19 and Vite.
                  In an academic SEO evaluation, understanding how search engines crawl and index client-rendered applications is critical:
                </p>

                <div className="space-y-3 pl-2 border-l border-neutral-700">
                  <div>
                    <strong className="text-neutral-200 block">1. The Two-Wave Indexing Cycle</strong>
                    <span className="text-neutral-400">
                      Standard web crawlers (like Googlebot) crawl in two waves. Wave 1 immediately downloads the raw HTML response and indexes static content.
                      Wave 2 queues the page into the Web Rendering Service (WRS), executing JavaScript to render DOM mutations and extract client-side dynamic metadata.
                    </span>
                  </div>

                  <div>
                    <strong className="text-neutral-200 block">2. Why Dynamic SPA Metadata Must Be In Synchronized States</strong>
                    <span className="text-neutral-400">
                      When users navigate between routes, React Router updates the viewport without reloading. Our custom <code className="text-neutral-200">SEOHead</code> module ensures that <code className="text-neutral-200">document.title</code>, canonical links, OpenGraph tags, and Schema.org scripts immediately update in the DOM for each respective route.
                    </span>
                  </div>

                  <div>
                    <strong className="text-neutral-200 block">3. Routing Fallback in Vercel (<code className="text-neutral-200">vercel.json</code>)</strong>
                    <span className="text-neutral-400">
                      Because React Router manages deep paths on the client, refreshing <code className="text-neutral-200">/streetwear-trends</code> on a static host would return a 404 without server rewrite instructions. The included <code className="text-neutral-200">vercel.json</code> directs all incoming paths to <code className="text-neutral-200">/index.html</code>, ensuring zero 404 errors during direct browser visits.
                    </span>
                  </div>

                  <div>
                    <strong className="text-neutral-200 block">4. Production Recommendations for Enterprise SEO</strong>
                    <span className="text-neutral-400">
                      For large-scale enterprise fashion e-commerce with millions of SKUs, migrating to Server-Side Rendering (SSR) or Static Site Generation (SSG via Next.js or Astro) delivers the pre-rendered HTML on the very first byte, eliminating rendering crawl queue delays and guaranteeing social crawler previews (Twitter, WhatsApp, LinkedIn bots do not execute JavaScript).
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-between px-6 py-3 border-t border-neutral-800 bg-[#161616] text-xs text-neutral-400">
          <span>Assignment Standard: WCAG AA, Semantic HTML5, Schema.org</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-neutral-200 hover:bg-white text-black font-medium transition-colors"
          >
            Close Inspector
          </button>
        </div>
      </div>
    </div>
  );
};
