import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SEOHead } from '../components/SEOHead';
import { IMAGES, BACKUP_IMAGES } from '../assets/images';
import { OUTFITS_DATA } from '../data/fashionContent';
import { ArrowRight, Layers, Sparkles, SlidersHorizontal, Check, Info } from 'lucide-react';

export const OutfitIdeasPage: React.FC = () => {
  const [selectedOccasion, setSelectedOccasion] = useState<'All' | 'College' | 'Casual' | 'Evening'>('All');
  const [imgSrc, setImgSrc] = useState(IMAGES.outfits);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const filteredOutfits = selectedOccasion === 'All'
    ? OUTFITS_DATA
    : OUTFITS_DATA.filter((o) => o.occasion === selectedOccasion);

  const copyBlueprint = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  return (
    <main className="min-h-screen bg-[#0c0c0c] text-[#f4f4f0]">
      <SEOHead />

      {/* Header */}
      <section className="border-b border-neutral-800 py-16 lg:py-20 bg-[#0e0e0e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2 text-xs tracking-widest uppercase text-neutral-400 font-medium">
              <span>Lookbooks & Blueprints</span>
              <span aria-hidden="true">·</span>
              <span>Layering Breakdown</span>
              <span aria-hidden="true">·</span>
              <span>Contextual Styling</span>
            </div>

            {/* Strict Unique H1 */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight leading-tight">
              Curated Streetwear Outfit Blueprints & Lookbooks
            </h1>

            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
              Real outfits engineered for the physical demands of daily life. Inspect detailed layer-by-layer formulas tailored for college campus transit, weekend downtime, and elevated evening atmospheres.
            </p>
          </div>
        </div>
      </section>

      {/* Hero Visual Spotlight */}
      <section className="py-12 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#121212] border border-neutral-800 p-6 sm:p-8 mb-12">
            <div className="lg:col-span-5">
              <img
                src={imgSrc}
                onError={() => setImgSrc(BACKUP_IMAGES.outfits)}
                alt="Street style model demonstrating smart casual streetwear layering with overcoat, crewneck, and clean sneakers"
                referrerPolicy="no-referrer"
                className="w-full aspect-[4/3] object-cover border border-neutral-800"
              />
            </div>
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs uppercase tracking-widest text-neutral-400 font-semibold block">
                The Capsule Blueprint Philosophy
              </span>
              <h2 className="text-2xl font-display font-bold text-white">
                Building Outfits with Purpose, Not Accumulation
              </h2>
              <p className="text-sm text-neutral-300 leading-relaxed">
                Rather than buying whole new outfits for every event, modern streetwear thrives on interchangeable building blocks: high-GSM base tees, neutral tailored trousers, and adaptable outer shells that effortlessly transition across college lectures and weekend outings.
              </p>
              <div className="flex flex-wrap items-center gap-4 text-xs text-neutral-400 pt-2 border-t border-neutral-800">
                <span>3 Core Scenarios Covered</span>
                <span aria-hidden="true">·</span>
                <span>Complete Textile Breakdowns</span>
              </div>
            </div>
          </div>

          {/* Occasion Filter Segmented Buttons */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-2 text-xs text-neutral-400 font-semibold uppercase tracking-wider">
              <SlidersHorizontal className="w-3.5 h-3.5 text-neutral-300" />
              <span>Filter By Occasion:</span>
            </div>

            <div className="flex flex-wrap gap-1 p-1 bg-[#141414] border border-neutral-800">
              {(['All', 'College', 'Casual', 'Evening'] as const).map((occ) => (
                <button
                  key={occ}
                  onClick={() => setSelectedOccasion(occ)}
                  className={`px-4 py-1.5 text-xs font-medium transition-colors cursor-pointer ${
                    selectedOccasion === occ
                      ? 'bg-neutral-200 text-black font-semibold'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  {occ === 'All' ? 'All Occasions' : `${occ} Outfits`}
                </button>
              ))}
            </div>
          </div>

          {/* Outfits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredOutfits.map((outfit) => {
              const fullFormula = `${outfit.title} (${outfit.occasion})\n` +
                outfit.garments.map(g => `${g.layer}: ${g.item} [${g.fabricOrColor}]`).join('\n') +
                `\nFootwear: ${outfit.footwear}\nAccessories: ${outfit.accessories.join(', ')}\nPro Tip: ${outfit.proStylingTip}`;

              return (
                <article
                  key={outfit.id}
                  className="border border-neutral-800 bg-[#121212] p-6 sm:p-7 flex flex-col justify-between hover:border-neutral-600 transition-colors"
                >
                  <div>
                    {/* Card Header */}
                    <div className="flex items-center justify-between text-xs text-neutral-400 pb-3 border-b border-neutral-800 mb-4">
                      <span className="uppercase tracking-widest font-semibold text-neutral-200">
                        {outfit.occasion} Context
                      </span>
                      <span className="font-mono text-neutral-500">Ref: #{outfit.id}</span>
                    </div>

                    <h3 className="text-xl font-display font-bold text-white mb-1">
                      {outfit.title}
                    </h3>
                    <p className="text-xs text-neutral-400 italic mb-4">
                      Vibe: {outfit.vibe}
                    </p>
                    <p className="text-xs text-neutral-300 leading-relaxed mb-6">
                      {outfit.description}
                    </p>

                    {/* Layer Breakdown Table */}
                    <div className="space-y-2 mb-6">
                      <span className="text-xs uppercase tracking-widest text-neutral-400 font-semibold block mb-2">
                        Garment & Layer Breakdown
                      </span>
                      <div className="border border-neutral-800 divide-y divide-neutral-850 text-xs">
                        {outfit.garments.map((g, idx) => (
                          <div key={idx} className="p-2.5 bg-[#161616] flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                            <div>
                              <span className="text-[10px] uppercase tracking-wider text-neutral-400 block sm:inline mr-2">
                                {g.layer}:
                              </span>
                              <span className="text-neutral-200 font-medium">{g.item}</span>
                            </div>
                            <span className="text-[11px] text-neutral-400 font-mono shrink-0">
                              {g.fabricOrColor}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Footwear & Accessories */}
                    <div className="space-y-3 pt-2 text-xs border-t border-neutral-800">
                      <div>
                        <strong className="text-neutral-400 block mb-0.5">Footwear Match:</strong>
                        <span className="text-neutral-200 font-medium">{outfit.footwear}</span>
                      </div>
                      <div>
                        <strong className="text-neutral-400 block mb-0.5">Accessories:</strong>
                        <span className="text-neutral-300">{outfit.accessories.join(' · ')}</span>
                      </div>
                    </div>

                    {/* Pro Styling Tip Callout */}
                    <div className="mt-5 p-3.5 bg-[#181818] border border-neutral-800 text-xs text-neutral-300">
                      <strong className="text-white block mb-1 flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-neutral-300" />
                        Pro Curator Tip:
                      </strong>
                      <span className="leading-relaxed">{outfit.proStylingTip}</span>
                    </div>
                  </div>

                  {/* Card Actions */}
                  <div className="mt-6 pt-4 border-t border-neutral-800 flex items-center justify-between">
                    <button
                      onClick={() => copyBlueprint(outfit.id, fullFormula)}
                      className="text-xs font-semibold uppercase tracking-wider text-neutral-300 hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      {copiedId === outfit.id ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span className="text-emerald-400">Blueprint Copied!</span>
                        </>
                      ) : (
                        <>
                          <Layers className="w-3.5 h-3.5" />
                          <span>Copy Blueprint Spec</span>
                        </>
                      )}
                    </button>

                    <Link
                      to="/sneaker-guide"
                      className="text-xs font-medium text-neutral-400 hover:text-white underline"
                    >
                      Check footwear
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>

        </div>
      </section>

      {/* Bottom Cross Link */}
      <section className="py-12 bg-[#0e0e0e] border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <span className="text-neutral-400">
            Learn which shoes pair best with wide trousers versus tapered chinos in our Sneaker Guide.
          </span>
          <Link
            to="/sneaker-guide"
            className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-200 hover:bg-white text-black font-semibold uppercase tracking-wider transition-colors"
          >
            <span>Open Sneaker Guide</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

    </main>
  );
};
