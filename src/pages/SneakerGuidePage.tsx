import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SEOHead } from '../components/SEOHead';
import { IMAGES, BACKUP_IMAGES } from '../assets/images';
import { SNEAKERS_DATA } from '../data/fashionContent';
import { ArrowRight, CheckCircle2, ShieldCheck, Compass, HelpCircle } from 'lucide-react';

export const SneakerGuidePage: React.FC = () => {
  const [activeSilhouette, setActiveSilhouette] = useState(SNEAKERS_DATA[0].id);
  const [imgSrc, setImgSrc] = useState(IMAGES.sneakers);

  const selectedSneaker = SNEAKERS_DATA.find((s) => s.id === activeSilhouette) || SNEAKERS_DATA[0];

  return (
    <main className="min-h-screen bg-[#0c0c0c] text-[#f4f4f0]">
      <SEOHead />

      {/* Header */}
      <section className="border-b border-neutral-800 py-16 lg:py-20 bg-[#0e0e0e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2 text-xs tracking-widest uppercase text-neutral-400 font-medium">
              <span>Footwear Manual</span>
              <span aria-hidden="true">·</span>
              <span>Silhouette Matrix</span>
              <span aria-hidden="true">·</span>
              <span>Pant Break Pairings</span>
            </div>

            {/* Strict Unique H1 */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight leading-tight">
              The Streetwear Footwear & Sneaker Silhouette Guide
            </h1>

            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
              Footwear acts as the visual anchor of every streetwear silhouette. Explore our definitive guide to key sneaker categories, essential buying considerations, and pant break pairing formulas.
            </p>
          </div>
        </div>
      </section>

      {/* Visual Feature & Editorial Still Life */}
      <section className="py-12 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#121212] border border-neutral-800 p-6 sm:p-8 mb-12">
            <div className="lg:col-span-5">
              <img
                src={imgSrc}
                onError={() => setImgSrc(BACKUP_IMAGES.sneakers)}
                alt="Curated retro runner and designer sneakers on concrete slab in studio lighting"
                referrerPolicy="no-referrer"
                className="w-full aspect-[4/3] object-cover border border-neutral-800"
              />
            </div>
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs uppercase tracking-widest text-neutral-400 font-semibold block">
                The Grounding Rule
              </span>
              <h2 className="text-2xl font-display font-bold text-white">
                Why the Pant Break Dictates Your Sneaker Choice
              </h2>
              <p className="text-sm text-neutral-300 leading-relaxed">
                Even the most expensive designer sneakers look clumsy if paired with an improper trouser break. A chunky retro runner with a sculpted heel demands a wide leg hem that pools gently over the collar, whereas a sleek minimalist leather court shoe requires a clean, zero-break crop to preserve its low-profile silhouette.
              </p>
              <div className="flex items-center gap-4 text-xs text-neutral-400 pt-2 border-t border-neutral-800">
                <span>Versatility Rating Scale (1-10)</span>
                <span aria-hidden="true">·</span>
                <span>4 Distinct Silhouettes</span>
              </div>
            </div>
          </div>

          {/* Silhouette Selector Strip */}
          <div className="mb-8">
            <span className="text-xs uppercase tracking-widest text-neutral-400 font-semibold block mb-3">
              Select Sneaker Silhouette to Inspect:
            </span>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {SNEAKERS_DATA.map((sneaker) => (
                <button
                  key={sneaker.id}
                  onClick={() => setActiveSilhouette(sneaker.id)}
                  className={`p-3.5 text-left border transition-colors cursor-pointer ${
                    activeSilhouette === sneaker.id
                      ? 'border-white bg-[#1c1c1c] text-white'
                      : 'border-neutral-800 bg-[#121212] text-neutral-400 hover:text-neutral-200 hover:border-neutral-700'
                  }`}
                >
                  <span className="text-[10px] uppercase tracking-wider text-neutral-400 block mb-1">
                    {sneaker.silhouetteType}
                  </span>
                  <span className="text-xs font-bold font-display block leading-tight">
                    {sneaker.name.replace('The ', '')}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Interactive Silhouette Dossier */}
          <div className="border border-neutral-800 bg-[#121212] p-6 sm:p-10">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-neutral-800 gap-4 mb-8">
              <div>
                <span className="text-xs uppercase tracking-widest text-neutral-400 block mb-1">
                  Active Silhouette Profile
                </span>
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
                  {selectedSneaker.name}
                </h3>
              </div>
              <div className="flex items-center gap-3">
                <div className="text-right">
                  <span className="text-[10px] uppercase tracking-widest text-neutral-400 block">Versatility Score</span>
                  <span className="text-xl font-bold font-mono text-white tabular-nums">
                    {selectedSneaker.versatilityScore} <span className="text-xs text-neutral-400">/ 10</span>
                  </span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Left Column: Philosophy & Materials */}
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-neutral-400 font-semibold mb-2">
                    Design Philosophy & Historical Context
                  </h4>
                  <p className="text-sm text-neutral-300 leading-relaxed">
                    {selectedSneaker.designPhilosophy}
                  </p>
                </div>

                <div className="p-4 bg-[#161616] border border-neutral-800">
                  <h4 className="text-xs uppercase tracking-widest text-neutral-400 font-semibold mb-1">
                    Material Construction & Durability
                  </h4>
                  <p className="text-xs text-neutral-300 leading-relaxed">
                    {selectedSneaker.materialFocus}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs uppercase tracking-widest text-neutral-400 font-semibold mb-3">
                    Optimal Trouser & Outfit Pairings
                  </h4>
                  <ul className="space-y-2 text-xs">
                    {selectedSneaker.bestPairedWith.map((pair, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-neutral-300 p-2.5 bg-[#141414] border border-neutral-850">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{pair}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right Column: Buying Considerations Checklist */}
              <div className="lg:col-span-6 space-y-6">
                <div className="p-6 bg-[#161616] border border-neutral-800">
                  <h4 className="text-xs uppercase tracking-widest text-neutral-200 font-semibold flex items-center gap-2 mb-4">
                    <ShieldCheck className="w-4 h-4 text-neutral-300" />
                    Curator's Buying Considerations Checklist
                  </h4>
                  <ul className="space-y-3 text-xs">
                    {selectedSneaker.buyingChecklist.map((check, cIdx) => (
                      <li key={cIdx} className="flex items-start gap-2.5 text-neutral-300">
                        <span className="font-mono text-neutral-500 font-bold shrink-0">0{cIdx + 1}.</span>
                        <span className="leading-relaxed">{check}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footwear Care & Longevity */}
                <div className="p-5 border border-neutral-800 bg-[#101010] space-y-2 text-xs">
                  <strong className="text-white block font-medium">Maintenance & Rotation Recommendation:</strong>
                  <p className="text-neutral-400 leading-relaxed">
                    Never wear the same pair of sneakers two days in succession. Giving leather and foam mid-soles 24 hours of rest allows moisture to evaporate, preventing premature creasing, odor buildup, and foam compression fatigue.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Pant Break & Hem Guide Matrix */}
      <section className="py-16 border-b border-neutral-800 bg-[#0e0e0e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-10">
            <span className="text-xs uppercase tracking-widest text-neutral-400 font-semibold block mb-2">
              The Pant Break Equation
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-white">
              Matching Pant Hems to Sneaker Collars
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
            <div className="p-6 bg-[#121212] border border-neutral-800 space-y-3">
              <span className="text-[10px] uppercase tracking-widest text-neutral-400 font-semibold block">Break Type 01</span>
              <h3 className="text-base font-display font-bold text-white">The No-Break / Cropped Hem</h3>
              <p className="text-neutral-300 leading-relaxed">
                Trousers hover 0.5 to 1 inch above the shoe collar. Highlights the entire sneaker silhouette without interference.
              </p>
              <div className="pt-2 text-neutral-400 border-t border-neutral-850">
                <strong className="text-neutral-300 block mb-1">Ideal Shoes:</strong>
                <span>Minimalist leather court shoes, low-top canvas sneakers, derbies.</span>
              </div>
            </div>

            <div className="p-6 bg-[#121212] border border-neutral-800 space-y-3">
              <span className="text-[10px] uppercase tracking-widest text-neutral-400 font-semibold block">Break Type 02</span>
              <h3 className="text-base font-display font-bold text-white">The Slight / Half Break</h3>
              <p className="text-neutral-300 leading-relaxed">
                The trouser hem rests lightly on the top lace of the sneaker, causing a single gentle horizontal fold in the fabric.
              </p>
              <div className="pt-2 text-neutral-400 border-t border-neutral-850">
                <strong className="text-neutral-300 block mb-1">Ideal Shoes:</strong>
                <span>Retro 90s/00s runners, trail runners, straight-leg raw denim.</span>
              </div>
            </div>

            <div className="p-6 bg-[#121212] border border-neutral-800 space-y-3">
              <span className="text-[10px] uppercase tracking-widest text-neutral-400 font-semibold block">Break Type 03</span>
              <h3 className="text-base font-display font-bold text-white">The Puddle / Stacking Hem</h3>
              <p className="text-neutral-300 leading-relaxed">
                Wide-leg trousers intentionally spill over the footwear, pooling around the sides while resting on a substantial midsole.
              </p>
              <div className="pt-2 text-neutral-400 border-t border-neutral-850">
                <strong className="text-neutral-300 block mb-1">Ideal Shoes:</strong>
                <span>Chunky platform sneakers, heavy lugged sole shoes, wide skate shoes.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cross link */}
      <section className="py-12 bg-[#080808] border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <span className="text-neutral-400">
            Ready to integrate footwear into the 4 styling pillars?
          </span>
          <Link
            to="/style-tips"
            className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-200 hover:bg-white text-black font-semibold uppercase tracking-wider transition-colors"
          >
            <span>Read Style Tips & Layering Rules</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

    </main>
  );
};
