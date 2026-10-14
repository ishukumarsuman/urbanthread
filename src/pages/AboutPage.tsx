import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SEOHead } from '../components/SEOHead';
import { IMAGES, BACKUP_IMAGES } from '../assets/images';
import { BASE_CANONICAL_URL } from '../config/seo';
import { BookOpen, CheckCircle2, FileCode, Compass, Share2, Layers, Cpu, ArrowRight } from 'lucide-react';

export const AboutPage: React.FC = () => {
  const [imgSrc, setImgSrc] = useState(IMAGES.hero);

  return (
    <main className="min-h-screen bg-[#0c0c0c] text-[#f4f4f0]">
      <SEOHead />

      {/* Header */}
      <section className="border-b border-neutral-800 py-16 lg:py-20 bg-[#0e0e0e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2 text-xs tracking-widest uppercase text-neutral-400 font-medium">
              <span>Editorial Manifesto</span>
              <span aria-hidden="true">·</span>
              <span>Academic Disclosure</span>
              <span aria-hidden="true">·</span>
              <span>Project Architecture</span>
            </div>

            {/* Strict Unique H1 */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight leading-tight">
              About UrbanThread: Editorial Manifesto & SEO Architecture
            </h1>

            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
              UrbanThread is an independent fashion and streetwear journal created to bridge runway aesthetics with daily student utility, while serving as a rigorous academic case study in modern on-page and technical SEO.
            </p>
          </div>
        </div>
      </section>

      {/* Editorial Mission & Purpose */}
      <section className="py-16 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs uppercase tracking-widest text-neutral-400 font-semibold block">
                The Editorial Mission
              </span>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-white">
                Reclaiming Streetwear from Algorithmic Hype
              </h2>
              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                Contemporary street style was born out of skate culture, hip-hop, and DIY subcultures. In recent years, corporate fast fashion and artificial scarcity transformed it into an overwhelming cycle of disposable micro-trends and branded plastic.
              </p>
              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                UrbanThread exists to restore intentionality. We treat streetwear as wearable architecture: analyzing heavy cotton weights, drop-shoulder geometry, waterproof membrane utility, and sustainable capsule styling that lasts for years rather than weekends.
              </p>

              {/* Target Audience Grid */}
              <div className="pt-4 border-t border-neutral-800">
                <span className="text-xs uppercase tracking-widest text-neutral-400 font-semibold block mb-3">
                  Our Readership & Target Audience
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                  <div className="p-4 bg-[#141414] border border-neutral-800">
                    <strong className="text-white block mb-1">College Students</strong>
                    <span className="text-neutral-400">Balancing comfort, durable campus commuting, and affordable capsule curation.</span>
                  </div>
                  <div className="p-4 bg-[#141414] border border-neutral-800">
                    <strong className="text-white block mb-1">Young Creatives</strong>
                    <span className="text-neutral-400">Designers, architects, and photographers seeking textured, non-corporate attire.</span>
                  </div>
                  <div className="p-4 bg-[#141414] border border-neutral-800">
                    <strong className="text-white block mb-1">Conscious Minimalists</strong>
                    <span className="text-neutral-400">Individuals curating long-term wardrobe staples with disciplined monochrome palettes.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Editorial Photography */}
            <div className="lg:col-span-5">
              <div className="border border-neutral-800 bg-[#121212] overflow-hidden">
                <img
                  src={imgSrc}
                  onError={() => setImgSrc(BACKUP_IMAGES.about)}
                  alt="UrbanThread editorial street style curation showcase in city architectural context"
                  referrerPolicy="no-referrer"
                  className="w-full aspect-[4/3] object-cover"
                />
                <div className="p-4 border-t border-neutral-800 bg-[#141414] text-xs text-neutral-400 flex items-center justify-between">
                  <span>Founded 2026 · Independent Editorial</span>
                  <span className="font-mono text-[11px] text-neutral-400">Academic Project</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Sustainable Fashion & Capsule Wardrobe Stance */}
      <section className="py-16 border-b border-neutral-800 bg-[#0e0e0e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs uppercase tracking-widest text-neutral-400 font-semibold block mb-2">
              Environmental Responsibility
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-white">
              The Anti-Fast-Fashion Imperative
            </h2>
            <p className="mt-4 text-sm text-neutral-300 leading-relaxed">
              The most sustainable garment is the one already hanging in your closet. UrbanThread promotes high-GSM loopback cotton, repairable Goodyear-welted footwear, and modular layering so our readers buy less, select better, and wear their pieces for a decade.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
            <div className="p-6 bg-[#141414] border border-neutral-800 space-y-2">
              <span className="font-mono text-neutral-400 font-bold block">01 / FABRIC INTEGRITY</span>
              <h3 className="text-base font-display font-bold text-white">400+ GSM Loopback Cotton</h3>
              <p className="text-neutral-300 leading-relaxed">
                High-density knitting prevents shrinkage, fabric thinning, and seam twisting, ensuring your hoodies hold their boxy drape over hundreds of laundry cycles.
              </p>
            </div>

            <div className="p-6 bg-[#141414] border border-neutral-800 space-y-2">
              <span className="font-mono text-neutral-400 font-bold block">02 / REPAIRABLE SOLES</span>
              <h3 className="text-base font-display font-bold text-white">Resoleable Outsoles</h3>
              <p className="text-neutral-300 leading-relaxed">
                Opting for cupsole stitching or Vibram lugged outsoles that can be re-glued or re-soled by a local cobbler keeps quality footwear out of municipal landfills.
              </p>
            </div>

            <div className="p-6 bg-[#141414] border border-neutral-800 space-y-2">
              <span className="font-mono text-neutral-400 font-bold block">03 / TIMELESS NEUTRALS</span>
              <h3 className="text-base font-display font-bold text-white">Seasonless Color Foundations</h3>
              <p className="text-neutral-300 leading-relaxed">
                By rooting 90% of your wardrobe in charcoal, bone, olive, and navy, your garments never go out of style when algorithmic trend cycles inevitably turn.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* College SEO Assignment Deep Dive & Technical Report */}
      <section className="py-16 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-neutral-400 font-semibold mb-2">
              <Cpu className="w-4 h-4 text-neutral-300" />
              <span>College SEO Assignment Technical Report</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-white">
              Technical Search Engine Optimization Architecture
            </h2>
            <p className="mt-4 text-sm text-neutral-300 leading-relaxed">
              This section documents the specific SEO strategies, crawling directives, and information architecture implemented across UrbanThread in accordance with college evaluation rubrics.
            </p>
          </div>

          <div className="space-y-8">
            
            {/* SEO Strategy 1: URL & Route Taxonomy */}
            <article className="p-6 sm:p-8 bg-[#121212] border border-neutral-800 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-neutral-800">
                <h3 className="text-lg font-display font-bold text-white flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  1. Canonical URL Taxonomy & Information Hierarchy
                </h3>
                <span className="text-xs font-mono text-neutral-400">Rubric Item: Clean Architecture</span>
              </div>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                Every page on UrbanThread is assigned a dedicated, human-readable, lowercase, hyphen-separated route matching standard SEO best practices. No cryptic query parameters, hashes, or ambiguous IDs are used:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs font-mono">
                <div className="p-3 bg-[#181818] border border-neutral-800">
                  <span className="text-neutral-400 block text-[10px]">Home:</span>
                  <span className="text-white">{BASE_CANONICAL_URL}/</span>
                </div>
                <div className="p-3 bg-[#181818] border border-neutral-800">
                  <span className="text-neutral-400 block text-[10px]">Trends:</span>
                  <span className="text-white">{BASE_CANONICAL_URL}/streetwear-trends</span>
                </div>
                <div className="p-3 bg-[#181818] border border-neutral-800">
                  <span className="text-neutral-400 block text-[10px]">Outfits:</span>
                  <span className="text-white">{BASE_CANONICAL_URL}/outfit-ideas</span>
                </div>
                <div className="p-3 bg-[#181818] border border-neutral-800">
                  <span className="text-neutral-400 block text-[10px]">Sneakers:</span>
                  <span className="text-white">{BASE_CANONICAL_URL}/sneaker-guide</span>
                </div>
                <div className="p-3 bg-[#181818] border border-neutral-800">
                  <span className="text-neutral-400 block text-[10px]">Style Tips:</span>
                  <span className="text-white">{BASE_CANONICAL_URL}/style-tips</span>
                </div>
                <div className="p-3 bg-[#181818] border border-neutral-800">
                  <span className="text-neutral-400 block text-[10px]">About:</span>
                  <span className="text-white">{BASE_CANONICAL_URL}/about</span>
                </div>
              </div>
            </article>

            {/* SEO Strategy 2: On-Page Heading & Metadata */}
            <article className="p-6 sm:p-8 bg-[#121212] border border-neutral-800 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-neutral-800">
                <h3 className="text-lg font-display font-bold text-white flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  2. Unique H1 Tags, Titles, & Meta Descriptions
                </h3>
                <span className="text-xs font-mono text-neutral-400">Rubric Item: On-Page Signals</span>
              </div>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                Each of the six routes contains an exclusive, non-duplicate HTML title tag (optimized between 30–60 characters) and a compelling meta description (between 120–160 characters) containing natural keyword anchors without keyword stuffing:
              </p>
              <ul className="space-y-2 text-xs text-neutral-300">
                <li className="p-3 bg-[#181818] border border-neutral-800">
                  <strong className="text-white block mb-0.5">Strict Single H1 Rule:</strong>
                  Every page renders exactly one high-priority <code className="text-neutral-200">&lt;h1&gt;</code> element that directly captures the primary editorial topic of that route.
                </li>
                <li className="p-3 bg-[#181818] border border-neutral-800">
                  <strong className="text-white block mb-0.5">Semantic Content Outlines:</strong>
                  Sub-topics utilize orderly <code className="text-neutral-200">&lt;h2&gt;</code> and <code className="text-neutral-200">&lt;h3&gt;</code> tags inside semantic <code className="text-neutral-200">&lt;article&gt;</code> and <code className="text-neutral-200">&lt;section&gt;</code> containers, allowing screen readers and search bots to generate clean document outlines.
                </li>
              </ul>
            </article>

            {/* SEO Strategy 3: Client-Side Rendering vs SSR Analysis */}
            <article className="p-6 sm:p-8 bg-[#121212] border border-neutral-800 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-neutral-800">
                <h3 className="text-lg font-display font-bold text-white flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-neutral-300" />
                  3. Academic Analysis: Client-Rendered React SEO Limitations & Solutions
                </h3>
                <span className="text-xs font-mono text-neutral-400">Rubric Item: Critical SEO Evaluation</span>
              </div>
              <div className="space-y-4 text-xs sm:text-sm text-neutral-300 leading-relaxed">
                <p>
                  As part of this college project, we evaluated the search engine behavior of Client-Side Rendered (CSR) Single Page Applications built with React and Vite:
                </p>

                <div className="p-4 bg-[#161616] border border-neutral-800 space-y-3">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-1">
                      A. The Web Rendering Service (WRS) & Crawl Budget Delay
                    </h4>
                    <p className="text-xs text-neutral-400 leading-relaxed">
                      Googlebot indexes web content in two distinct phases. Phase 1 (First Wave) fetches raw HTML and indexes immediately. Because a pure Vite React app delivers an empty root <code className="text-neutral-200">&lt;div id="root"&gt;&lt;/div&gt;</code> in raw HTML, the page is queued for Phase 2 (Second Wave / Rendering Queue), where headless Chromium executes the JavaScript bundle. On low-authority new websites, this rendering queue can introduce indexing delays of several hours to days.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-1">
                      B. Social Scraper Limitations (Open Graph & Twitter Cards)
                    </h4>
                    <p className="text-xs text-neutral-400 leading-relaxed">
                      While Googlebot and Bingbot possess full headless browser rendering pipelines, social platform crawlers (Twitter/X, Facebook, WhatsApp, LinkedIn, Discord) often do <strong>not</strong> execute client-side JavaScript. They read the raw HTML response. To guarantee rich share cards across all platforms, enterprise production systems pair React with Server-Side Rendering (SSR) via Next.js or edge pre-rendering.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-1">
                      C. Single-Page Routing Direct Access Fallback (<code className="text-neutral-200">vercel.json</code>)
                    </h4>
                    <p className="text-xs text-neutral-400 leading-relaxed">
                      In a React Router SPA, navigating to <code className="text-neutral-200">/streetwear-trends</code> is intercepted by the browser History API. However, if a user or search bot hits that URL directly from an external bookmark or search snippet, the hosting server must know not to look for a physical file named <code className="text-neutral-200">streetwear-trends.html</code>. We resolved this by supplying a production <code className="text-neutral-200">vercel.json</code> rewrite rule that redirects all deep paths to <code className="text-neutral-200">/index.html</code>, ensuring 0% 404 errors during direct visits.
                    </p>
                  </div>
                </div>
              </div>
            </article>

            {/* SEO Strategy 4: Sitemaps, Robots, & Structured Data */}
            <article className="p-6 sm:p-8 bg-[#121212] border border-neutral-800 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-neutral-800">
                <h3 className="text-lg font-display font-bold text-white flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  4. Search Engine Discoverability Assets (Sitemap & Robots)
                </h3>
                <span className="text-xs font-mono text-neutral-400">Rubric Item: Technical Crawling</span>
              </div>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                Direct crawler discovery files are mounted at the root of the domain:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-4 bg-[#161616] border border-neutral-800 flex items-start justify-between">
                  <div>
                    <strong className="text-white block mb-1 flex items-center gap-1.5">
                      <FileCode className="w-4 h-4 text-neutral-300" />
                      XML Sitemap Index
                    </strong>
                    <p className="text-neutral-400 mb-2">
                      Contains canonical paths, change frequencies, and relative priority ratings for all 6 pages.
                    </p>
                    <a
                      href="/sitemap.xml"
                      target="_blank"
                      rel="noreferrer"
                      className="text-neutral-200 underline hover:text-white"
                    >
                      Inspect /sitemap.xml →
                    </a>
                  </div>
                </div>

                <div className="p-4 bg-[#161616] border border-neutral-800 flex items-start justify-between">
                  <div>
                    <strong className="text-white block mb-1 flex items-center gap-1.5">
                      <Compass className="w-4 h-4 text-neutral-300" />
                      Robots.txt Directives
                    </strong>
                    <p className="text-neutral-400 mb-2">
                      Declares universal crawler permissions and points directly to the sitemap location.
                    </p>
                    <a
                      href="/robots.txt"
                      target="_blank"
                      rel="noreferrer"
                      className="text-neutral-200 underline hover:text-white"
                    >
                      Inspect /robots.txt →
                    </a>
                  </div>
                </div>
              </div>
            </article>

          </div>

        </div>
      </section>

      {/* Return home CTA */}
      <section className="py-12 bg-[#0e0e0e] border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <span className="text-neutral-400">
            Return to the front page or explore our street style lookbooks.
          </span>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-200 hover:bg-white text-black font-semibold uppercase tracking-wider transition-colors"
          >
            <span>Return to Front Page</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

    </main>
  );
};
