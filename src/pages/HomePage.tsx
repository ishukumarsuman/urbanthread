import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SEOHead } from '../components/SEOHead';
import { IMAGES } from '../assets/images';
import { TRENDS_DATA, OUTFITS_DATA, SNEAKERS_DATA, STYLE_PILLARS } from '../data/fashionContent';
import { ArrowRight, Compass, Layers, Footprints, BookOpen, Sparkles, CheckCircle2 } from 'lucide-react';

export const HomePage: React.FC = () => {
  const [heroImgSrc, setHeroImgSrc] = useState(IMAGES.hero);

  return (
    <main className="min-h-screen bg-[#0c0c0c] text-[#f4f4f0]">
      <SEOHead />

      {/* Hero Section */}
      <section className="relative border-b border-neutral-800 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Hero Copy */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2 text-xs tracking-widest uppercase text-neutral-400 font-medium">
                <span>Issue 04</span>
                <span aria-hidden="true">·</span>
                <span>Autumn / Winter Curations</span>
                <span aria-hidden="true">·</span>
                <span>Editorial Dispatch</span>
              </div>

              {/* Strict Unique H1 */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-white leading-[1.08] text-balance">
                The Contemporary Streetwear & Style Journal
              </h1>

              <p className="text-base sm:text-lg text-neutral-300 max-w-xl font-normal leading-relaxed">
                UrbanThread is an independent editorial platform dissecting modern streetwear culture, oversized tailoring, technical footwear, and mindful styling principles for the contemporary wardrobe.
              </p>

              <div className="pt-2 flex flex-wrap gap-4 items-center">
                <Link
                  to="/streetwear-trends"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#f4f4f0] hover:bg-white text-black font-semibold text-xs uppercase tracking-wider transition-colors cursor-pointer"
                >
                  <span>Explore 2026 Trends</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  to="/outfit-ideas"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-neutral-700 hover:border-neutral-400 text-neutral-200 hover:text-white font-medium text-xs uppercase tracking-wider transition-colors"
                >
                  <span>Browse Outfit Blueprints</span>
                </Link>
              </div>

              {/* Curatorial Trust Strip */}
              <div className="pt-6 border-t border-neutral-850 grid grid-cols-3 gap-4 text-xs text-neutral-400">
                <div>
                  <span className="text-base sm:text-lg font-bold text-white block tabular-nums">100%</span>
                  <span>Unsponsored Editorial</span>
                </div>
                <div>
                  <span className="text-base sm:text-lg font-bold text-white block tabular-nums">4 Pillars</span>
                  <span>Styling Methodology</span>
                </div>
                <div>
                  <span className="text-base sm:text-lg font-bold text-white block tabular-nums">6 Routes</span>
                  <span>Full SEO Indexation</span>
                </div>
              </div>
            </div>

            {/* Hero Editorial Photography */}
            <div className="lg:col-span-5">
              <div className="relative border border-neutral-800 bg-[#141414] overflow-hidden group">
                <img
                  src={heroImgSrc}
                  onError={() => setHeroImgSrc(IMAGES.fallback)}
                  alt="Young models showcasing contemporary layered minimalist streetwear in an urban concrete environment"
                  referrerPolicy="no-referrer"
                  className="w-full aspect-[4/3] lg:aspect-[3/4] object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="eager"
                />
                <div className="p-4 border-t border-neutral-800 bg-[#121212] flex items-center justify-between text-xs text-neutral-400">
                  <span className="italic">Vol. IV — Streetwear Proportions & Texture</span>
                  <span className="font-mono text-[11px] text-neutral-400">Fig. 01 / Curated Roster</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Editorial Mission Statement & Quick Nav */}
      <section className="py-16 border-b border-neutral-800 bg-[#0e0e0e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs uppercase tracking-widest text-neutral-400 font-semibold block mb-2">
              Curatorial Thesis
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-white leading-snug">
              Demystifying Streetwear for Students, Creatives, and Modern Minimalists
            </h2>
            <p className="mt-4 text-sm sm:text-base text-neutral-300 leading-relaxed">
              Street fashion is often clouded by hyper-limited drops, algorithmic hype, and fast-fashion clones. UrbanThread approaches urban style through the lens of architectural proportions, enduring textiles, and accessible styling equations you can replicate every day.
            </p>
          </div>

          {/* Core Feature Hub Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Card 1: Trends */}
            <article className="border border-neutral-800 bg-[#121212] p-6 hover:border-neutral-600 transition-colors flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 border border-neutral-700 flex items-center justify-center text-white mb-6">
                  <Compass className="w-5 h-5" />
                </div>
                <div className="flex items-center gap-2 text-xs text-neutral-400 mb-2">
                  <span>Forecast</span>
                  <span aria-hidden="true">·</span>
                  <span>4 Movements</span>
                </div>
                <h3 className="text-lg font-display font-bold text-white mb-2">
                  Streetwear Trends
                </h3>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Deep analysis of boxy tailoring, gorpcore weatherproofing, washed heritage workwear, and quiet monochrome styling.
                </p>
              </div>
              <Link
                to="/streetwear-trends"
                className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-white hover:underline"
              >
                <span>Read Trend Analysis</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </article>

            {/* Card 2: Outfits */}
            <article className="border border-neutral-800 bg-[#121212] p-6 hover:border-neutral-600 transition-colors flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 border border-neutral-700 flex items-center justify-center text-white mb-6">
                  <Layers className="w-5 h-5" />
                </div>
                <div className="flex items-center gap-2 text-xs text-neutral-400 mb-2">
                  <span>Lookbooks</span>
                  <span aria-hidden="true">·</span>
                  <span>6 Occasions</span>
                </div>
                <h3 className="text-lg font-display font-bold text-white mb-2">
                  Curated Outfit Ideas
                </h3>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Tailored combinations for college lectures, design studio marathons, casual weekend roastery visits, and downtown evenings.
                </p>
              </div>
              <Link
                to="/outfit-ideas"
                className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-white hover:underline"
              >
                <span>View Outfit Blueprints</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </article>

            {/* Card 3: Sneakers */}
            <article className="border border-neutral-800 bg-[#121212] p-6 hover:border-neutral-600 transition-colors flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 border border-neutral-700 flex items-center justify-center text-white mb-6">
                  <Footprints className="w-5 h-5" />
                </div>
                <div className="flex items-center gap-2 text-xs text-neutral-400 mb-2">
                  <span>Footwear</span>
                  <span aria-hidden="true">·</span>
                  <span>Silhouettes</span>
                </div>
                <h3 className="text-lg font-display font-bold text-white mb-2">
                  Sneaker Silhouette Guide
                </h3>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  From 2000s mesh retro runners to sleek minimalist leather court shoes: understand buying criteria and trouser pairings.
                </p>
              </div>
              <Link
                to="/sneaker-guide"
                className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-white hover:underline"
              >
                <span>Open Sneaker Guide</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </article>

            {/* Card 4: Style Tips */}
            <article className="border border-neutral-800 bg-[#121212] p-6 hover:border-neutral-600 transition-colors flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 border border-neutral-700 flex items-center justify-center text-white mb-6">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div className="flex items-center gap-2 text-xs text-neutral-400 mb-2">
                  <span>Foundations</span>
                  <span aria-hidden="true">·</span>
                  <span>Mastery</span>
                </div>
                <h3 className="text-lg font-display font-bold text-white mb-2">
                  Style Tips & Rules
                </h3>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Practical guidelines covering fabric weight graduation, the 60-30-10 color principle, and subtle jewelry finishing touches.
                </p>
              </div>
              <Link
                to="/style-tips"
                className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-white hover:underline"
              >
                <span>Master Styling Tips</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </article>

          </div>
        </div>
      </section>

      {/* Featured Trend Spotlight Section */}
      <section className="py-16 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs uppercase tracking-widest text-neutral-400 font-semibold block mb-2">
                Lead Editorial Spotlight
              </span>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-white">
                Trend Focus: The Evolution of Boxy Tailoring
              </h2>
            </div>
            <Link
              to="/streetwear-trends"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-300 hover:text-white"
            >
              <span>See All 4 Trends</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#101010] border border-neutral-800 p-6 sm:p-8">
            <div className="lg:col-span-5">
              <img
                src={IMAGES.trends}
                onError={(e) => { (e.target as HTMLImageElement).src = IMAGES.fallback; }}
                alt="Editorial model wearing oversized relaxed tailoring jacket and wide trousers in urban environment"
                referrerPolicy="no-referrer"
                className="w-full aspect-[4/3] object-cover border border-neutral-800"
              />
            </div>
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2 text-xs text-neutral-400">
                <span>Featured Dossier</span>
                <span aria-hidden="true">·</span>
                <span>Autumn/Winter Wardrobe</span>
                <span aria-hidden="true">·</span>
                <span>Proportion Study</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
                Why Drop-Shoulders and Wide Trousers Replaced Skinny Fits
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed">
                The shift from aggressive, tight-fitting silhouettes toward architectural draping reflects a broader cultural desire for ease, gender-neutral versatility, and sartorial longevity. Oversized garments allow air circulation, effortless layering in colder climates, and a clean, sculptural presence.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
                <div className="p-3 bg-[#161616] border border-neutral-800">
                  <span className="text-neutral-400 uppercase tracking-wider font-semibold block mb-1">Essential Key Piece</span>
                  <span className="text-white font-medium">Unstructured Double-Breasted Wool Overcoat</span>
                </div>
                <div className="p-3 bg-[#161616] border border-neutral-800">
                  <span className="text-neutral-400 uppercase tracking-wider font-semibold block mb-1">Styling Golden Rule</span>
                  <span className="text-white font-medium">Match wide trousers with a subtle shoe break</span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/streetwear-trends"
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white underline hover:text-neutral-300"
                >
                  <span>Explore full trend breakdown</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Outfit Inspiration Carousel Preview */}
      <section className="py-16 border-b border-neutral-800 bg-[#0e0e0e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs uppercase tracking-widest text-neutral-400 font-semibold block mb-2">
                Curated Lookbooks
              </span>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-white">
                Outfits Designed for Real Contexts
              </h2>
            </div>
            <Link
              to="/outfit-ideas"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-300 hover:text-white"
            >
              <span>Explore All Lookbooks</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {OUTFITS_DATA.slice(0, 3).map((outfit) => (
              <article key={outfit.id} className="border border-neutral-800 bg-[#121212] p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs text-neutral-400 mb-3">
                    <span className="uppercase tracking-wider font-semibold text-neutral-300">{outfit.occasion} Look</span>
                    <span>{outfit.garments.length} Layers</span>
                  </div>
                  <h3 className="text-lg font-display font-bold text-white mb-2">
                    {outfit.title}
                  </h3>
                  <p className="text-xs text-neutral-400 mb-4 leading-relaxed">
                    {outfit.description}
                  </p>
                  <div className="space-y-1.5 text-xs border-t border-neutral-800 pt-3">
                    <span className="text-neutral-400 block font-semibold uppercase tracking-widest text-[10px]">Primary Garment Stack</span>
                    {outfit.garments.slice(0, 2).map((g, idx) => (
                      <div key={idx} className="flex justify-between text-neutral-300">
                        <span className="text-neutral-400">{g.layer}:</span>
                        <span>{g.item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-neutral-800">
                  <div className="text-[11px] text-neutral-400 mb-3">
                    <span className="text-neutral-300 font-semibold">Footwear: </span>
                    {outfit.footwear}
                  </div>
                  <Link
                    to="/outfit-ideas"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-white hover:underline"
                  >
                    <span>View Full Blueprint</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Sneaker & Style Teaser 2-Column Split */}
      <section className="py-16 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Sneaker Teaser */}
            <div className="border border-neutral-800 bg-[#101010] p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <img
                  src={IMAGES.sneakers}
                  onError={(e) => { (e.target as HTMLImageElement).src = IMAGES.fallback; }}
                  alt="Curated retro runner and minimalist court sneakers on concrete architectural surface"
                  referrerPolicy="no-referrer"
                  className="w-full aspect-[16/9] object-cover border border-neutral-800 mb-6"
                />
                <div className="flex items-center gap-2 text-xs text-neutral-400 mb-2">
                  <span>Footwear Architecture</span>
                  <span aria-hidden="true">·</span>
                  <span>Silhouette Index</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-3">
                  The Streetwear Sneaker Guide
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-4">
                  Footwear acts as the visual anchor of any outfit. Learn how retro runners, minimalist leather courts, and rugged trail shoes converse with pant hems, cuff breaks, and seasonal materials.
                </p>
              </div>
              <Link
                to="/sneaker-guide"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white hover:underline pt-2"
              >
                <span>Read Sneaker Buying & Pairing Guide</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Style Tips Teaser */}
            <div className="border border-neutral-800 bg-[#101010] p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <img
                  src={IMAGES.styleTips}
                  onError={(e) => { (e.target as HTMLImageElement).src = IMAGES.fallback; }}
                  alt="Detailed macro view of high-texture fabric layering, wool overcoat, waffle knit sweater, and silver jewelry"
                  referrerPolicy="no-referrer"
                  className="w-full aspect-[16/9] object-cover border border-neutral-800 mb-6"
                />
                <div className="flex items-center gap-2 text-xs text-neutral-400 mb-2">
                  <span>Foundational Rules</span>
                  <span aria-hidden="true">·</span>
                  <span>Styling Discipline</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-3">
                  The 4 Pillars of Modern Styling
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-4">
                  Styling isn’t about wearing expensive logos—it’s understanding the geometry of silhouette, fabric density graduation, tonal palettes (the 60-30-10 principle), and subtle hardware curation.
                </p>
              </div>
              <Link
                to="/style-tips"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white hover:underline pt-2"
              >
                <span>Learn The 4 Styling Pillars</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* College SEO Assignment Architectural Disclosure Banner */}
      <section className="py-12 bg-[#080808] border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border border-neutral-800 p-6 sm:p-8 bg-[#121212] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="space-y-2 max-w-3xl">
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-neutral-400">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Academic Verification & SEO Implementation</span>
              </div>
              <h3 className="text-lg font-display font-bold text-white">
                Engineered for College SEO Evaluation Standards
              </h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                This platform features unique H1 headings, page-specific title and meta description tags, semantic HTML5 structure, Open Graph tags, Schema.org JSON-LD, sitemap.xml, robots.txt, and single-page routing rewrites on Vercel.
              </p>
            </div>
            <Link
              to="/about"
              className="px-5 py-2.5 bg-neutral-200 hover:bg-white text-black font-semibold text-xs uppercase tracking-wider transition-colors shrink-0"
            >
              Read About & SEO Docs
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
};
