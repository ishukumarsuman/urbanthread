import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SEOHead } from '../components/SEOHead';
import { IMAGES, BACKUP_IMAGES } from '../assets/images';
import { TRENDS_DATA } from '../data/fashionContent';
import { Check, X, ArrowRight, Sparkles, Filter, SlidersHorizontal } from 'lucide-react';

export const StreetwearTrendsPage: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [imgSrc, setImgSrc] = useState(IMAGES.trends);

  const filteredTrends = selectedFilter === 'all'
    ? TRENDS_DATA
    : TRENDS_DATA.filter((t) => t.id === selectedFilter);

  return (
    <main className="min-h-screen bg-[#0c0c0c] text-[#f4f4f0]">
      <SEOHead />

      {/* Page Header */}
      <section className="border-b border-neutral-800 py-16 lg:py-20 bg-[#0e0e0e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2 text-xs tracking-widest uppercase text-neutral-400 font-medium">
              <span>Forecast 2026</span>
              <span aria-hidden="true">·</span>
              <span>Silhouette Anatomy</span>
              <span aria-hidden="true">·</span>
              <span>Curated Analysis</span>
            </div>

            {/* Strict Unique H1 */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight leading-tight">
              The Defining Streetwear Trends & Movement Forecasts
            </h1>

            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
              Modern streetwear trends have evolved beyond graphic tees and synthetic hype into a disciplined study of tailoring, functional materials, and proportion balance. Explore the 4 defining movements shaping contemporary urban wardrobes.
            </p>
          </div>
        </div>
      </section>

      {/* Editorial Visual & Interactive Filter Strip */}
      <section className="py-12 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Editorial Banner */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#121212] border border-neutral-800 p-6 sm:p-8 mb-12">
            <div className="lg:col-span-5">
              <img
                src={imgSrc}
                onError={() => setImgSrc(BACKUP_IMAGES.trends)}
                alt="Editorial street style model wearing relaxed oversized outerwear and wide-leg trousers"
                referrerPolicy="no-referrer"
                className="w-full aspect-[4/3] object-cover border border-neutral-800"
              />
            </div>
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs uppercase tracking-widest text-neutral-400 font-semibold block">
                Editorial Commentary · Q&A
              </span>
              <h2 className="text-2xl font-display font-bold text-white">
                Why is modern streetwear shifting from logos to textile craftsmanship?
              </h2>
              <p className="text-sm text-neutral-300 leading-relaxed">
                Modern streetwear is shifting from loud graphics to textile craftsmanship because contemporary style emphasizes silhouette, longevity, and material substance over transient branding. Rather than relying on conspicuous chest logos, today’s wardrobe focuses on the provenance and drape of authentic fabrics—such as Japanese selvedge denim, heavy unlined wools, and waterproof breathable technical membranes—which create enduring, tactile sophistication.
              </p>
              <div className="flex items-center gap-4 text-xs text-neutral-400 pt-2 border-t border-neutral-800">
                <span>Curated by UrbanThread Editors</span>
                <span aria-hidden="true">·</span>
                <span>Focus: Proportions & Materials</span>
              </div>
            </div>
          </div>

          {/* Functional Filter Tabs */}
          <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
            <div className="flex items-center gap-2 text-xs text-neutral-400 font-semibold uppercase tracking-wider">
              <SlidersHorizontal className="w-3.5 h-3.5 text-neutral-300" />
              <span>Filter Movements:</span>
            </div>

            <div className="flex flex-wrap gap-1 p-1 bg-[#141414] border border-neutral-800">
              <button
                onClick={() => setSelectedFilter('all')}
                className={`px-3 py-1.5 text-xs font-medium transition-colors cursor-pointer ${
                  selectedFilter === 'all'
                    ? 'bg-neutral-200 text-black font-semibold'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                All 4 Movements
              </button>
              {TRENDS_DATA.map((trend) => (
                <button
                  key={trend.id}
                  onClick={() => setSelectedFilter(trend.id)}
                  className={`px-3 py-1.5 text-xs font-medium transition-colors cursor-pointer ${
                    selectedFilter === trend.id
                      ? 'bg-neutral-200 text-black font-semibold'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  {trend.title.split('&')[0]}
                </button>
              ))}
            </div>
          </div>

          {/* Trend Deep Dives */}
          <div className="space-y-12">
            <div className="border-b border-neutral-800 pb-4">
              <span className="text-xs uppercase tracking-widest text-neutral-400 font-semibold block mb-1">
                Curated Dossier
              </span>
              <h2 className="text-2xl font-display font-bold text-white">
                Key Streetwear Trends & Silhouette Breakdown
              </h2>
            </div>
            {filteredTrends.map((trend, index) => (
              <article
                key={trend.id}
                id={trend.id}
                className="border border-neutral-800 bg-[#101010] p-6 sm:p-10 transition-colors hover:border-neutral-700"
              >
                {/* Meta Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-neutral-800 gap-2 mb-6">
                  <div className="flex items-center gap-3 text-xs text-neutral-400">
                    <span className="font-mono text-white text-sm font-bold">0{index + 1}.</span>
                    <span className="uppercase tracking-widest">{trend.era}</span>
                  </div>
                  <span className="text-xs text-neutral-400 font-mono">Movement Ref: {trend.id}</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                  {/* Left Column: Trend Narrative */}
                  <div className="lg:col-span-7 space-y-4">
                    <h3 className="text-2xl sm:text-3xl font-display font-bold text-white leading-tight">
                      {trend.title}
                    </h3>
                    <p className="text-sm font-medium text-neutral-300 italic">
                      "{trend.subtitle}"
                    </p>
                    <p className="text-sm text-neutral-300 leading-relaxed">
                      {trend.summary}
                    </p>
                    <div className="p-4 bg-[#141414] border border-neutral-800 text-xs text-neutral-300 leading-relaxed">
                      <strong className="text-white block mb-1">Editor’s Critical Take:</strong>
                      {trend.editorialInsight}
                    </div>

                    {/* Essential Wardrobe Pieces */}
                    <div className="pt-2">
                      <span className="text-xs uppercase tracking-widest text-neutral-400 font-semibold block mb-2">
                        Essential Wardrobe Pieces
                      </span>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                        {trend.essentialPieces.map((piece, pIdx) => (
                          <li key={pIdx} className="flex items-center gap-2 text-neutral-200 bg-[#161616] p-2.5 border border-neutral-850">
                            <span className="w-1.5 h-1.5 bg-neutral-400 shrink-0" />
                            <span>{piece}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Right Column: Styling Dos & Don'ts */}
                  <div className="lg:col-span-5 space-y-6">
                    <div className="p-5 bg-[#141414] border border-neutral-800">
                      <h4 className="text-xs uppercase tracking-widest font-semibold text-emerald-400 flex items-center gap-2 mb-3">
                        <Check className="w-4 h-4" /> Styling Dos
                      </h4>
                      <ul className="space-y-2 text-xs text-neutral-300">
                        {trend.stylingAdvice.dos.map((item, dIdx) => (
                          <li key={dIdx} className="flex items-start gap-2">
                            <span className="text-emerald-400 shrink-0 mt-0.5">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="p-5 bg-[#141414] border border-neutral-800">
                      <h4 className="text-xs uppercase tracking-widest font-semibold text-rose-400 flex items-center gap-2 mb-3">
                        <X className="w-4 h-4" /> Styling Don'ts
                      </h4>
                      <ul className="space-y-2 text-xs text-neutral-300">
                        {trend.stylingAdvice.donts.map((item, dIdx) => (
                          <li key={dIdx} className="flex items-start gap-2">
                            <span className="text-rose-400 shrink-0 mt-0.5">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="p-4 border border-neutral-800 bg-[#0e0e0e] text-center">
                      <Link
                        to="/outfit-ideas"
                        className="text-xs font-semibold uppercase tracking-wider text-white hover:underline inline-flex items-center gap-1.5"
                      >
                        <span>See Outfits Built Around This Trend</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* Cross Navigation Footnote */}
      <section className="py-12 bg-[#0e0e0e] border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <span className="text-neutral-400">
            Next editorial study: How to translate these trends into complete outfits.
          </span>
          <Link
            to="/outfit-ideas"
            className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-200 hover:bg-white text-black font-semibold uppercase tracking-wider transition-colors"
          >
            <span>Explore Outfit Ideas</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

    </main>
  );
};
