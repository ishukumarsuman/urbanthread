import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SEOHead } from '../components/SEOHead';
import { IMAGES, BACKUP_IMAGES } from '../assets/images';
import { STYLE_PILLARS } from '../data/fashionContent';
import { ArrowRight, Sparkles, Check, Sliders, Layers, Palette, Scissors, ShieldAlert } from 'lucide-react';

export const StyleTipsPage: React.FC = () => {
  const [imgSrc, setImgSrc] = useState(IMAGES.styleTips);

  // Layering Simulator State
  const [baseLayer, setBaseLayer] = useState<'tee-light' | 'tee-heavy' | 'mock-neck'>('tee-heavy');
  const [midLayer, setMidLayer] = useState<'none' | 'waffle-knit' | 'hoodie-heavy' | 'denim-overshirt'>('hoodie-heavy');
  const [outerLayer, setOuterLayer] = useState<'none' | 'wool-overcoat' | 'goretex-shell' | 'work-jacket'>('wool-overcoat');
  const [bottomFit, setBottomFit] = useState<'straight-raw' | 'wide-pleated' | 'double-knee'>('wide-pleated');

  // Compute silhouette analysis
  const getLayeringAdvice = () => {
    let score = 9.5;
    let feedback = 'Excellent balance: Heavy outer wool overcoat counterbalanced with wide pleated drape creates a fluid, authoritative editorial silhouette.';
    let tempRange = '5°C to 14°C (Autumn / Early Winter)';

    if (midLayer === 'none' && outerLayer === 'none') {
      score = 7.0;
      feedback = 'Minimal single-layer presentation. Add a contrasting textural accessory (silver necklace or structured cross-body bag) so the outfit does not read flat.';
      tempRange = '18°C to 26°C (Spring / Summer)';
    } else if (outerLayer === 'goretex-shell' && bottomFit === 'wide-pleated') {
      score = 8.8;
      feedback = 'Dynamic high-low friction: The athletic weather-resistant tech membrane contrasts sharply against classic sartorial pleats.';
      tempRange = '8°C to 16°C (Rainy / Wet Transit)';
    } else if (outerLayer === 'wool-overcoat' && midLayer === 'hoodie-heavy') {
      score = 9.8;
      feedback = 'The quintessential modern streetwear equation: structured luxury outerwear layered casually over relaxed subcultural fleece.';
      tempRange = '0°C to 10°C (Deep Autumn / Winter)';
    } else if (outerLayer === 'work-jacket' && bottomFit === 'double-knee') {
      score = 9.0;
      feedback = 'Authentic heritage workwear uniform. Ensure one garment has washed or faded patina to prevent the suit from looking like rigid factory workwear.';
      tempRange = '10°C to 18°C (Transitional Workwear)';
    }

    return { score, feedback, tempRange };
  };

  const advice = getLayeringAdvice();

  return (
    <main className="min-h-screen bg-[#0c0c0c] text-[#f4f4f0]">
      <SEOHead />

      {/* Header */}
      <section className="border-b border-neutral-800 py-16 lg:py-20 bg-[#0e0e0e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2 text-xs tracking-widest uppercase text-neutral-400 font-medium">
              <span>Sartorial Methodology</span>
              <span aria-hidden="true">·</span>
              <span>The 4 Pillars</span>
              <span aria-hidden="true">·</span>
              <span>Interactive Simulator</span>
            </div>

            {/* Strict Unique H1 */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight leading-tight">
              Streetwear Styling Tips & Modern Wardrobe Fundamentals
            </h1>

            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
              Essential streetwear styling tips aren’t about chasing hype cycles or accumulating transient logos. It is a calculated science of silhouette geometry, fabric density stacking, disciplined neutral color theory, and understated finishing touches.
            </p>
          </div>
        </div>
      </section>

      {/* Macro Editorial Banner */}
      <section className="py-12 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#121212] border border-neutral-800 p-6 sm:p-8 mb-12">
            <div className="lg:col-span-5">
              <img
                src={imgSrc}
                onError={() => setImgSrc(BACKUP_IMAGES.styleTips)}
                alt="Close-up macro detail of heavy waffle knit sweater, grey wool overcoat, and brushed silver necklace"
                referrerPolicy="no-referrer"
                className="w-full aspect-[4/3] object-cover border border-neutral-800"
              />
            </div>
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs uppercase tracking-widest text-neutral-400 font-semibold block">
                Pillar Architecture
              </span>
              <h2 className="text-2xl font-display font-bold text-white">
                Streetwear Styling Tips: Texture Speaks When Logos Are Silent
              </h2>
              <p className="text-sm text-neutral-300 leading-relaxed">
                When an outfit uses restricted tones like bone, heather charcoal, and deep black, the visual tension comes from the battle between textiles: the raw rib of a fisherman sweater against the brushed drape of an unlined wool overcoat and cool brushed sterling silver jewelry.
              </p>
              <div className="flex items-center gap-4 text-xs text-neutral-400 pt-2 border-t border-neutral-800">
                <span>4 In-Depth Guides</span>
                <span aria-hidden="true">·</span>
                <span>Includes Layering Simulator</span>
              </div>
            </div>
          </div>

          {/* Interactive Layering Simulator Tool */}
          <div className="border border-neutral-800 bg-[#101010] p-6 sm:p-10 mb-16">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-neutral-800 gap-4 mb-6">
              <div>
                <span className="text-xs uppercase tracking-widest text-neutral-400 block mb-1">
                  Interactive Editorial Tool
                </span>
                <h3 className="text-2xl font-display font-bold text-white flex items-center gap-2">
                  <Sliders className="w-5 h-5 text-neutral-300" />
                  Streetwear Layering & Silhouette Simulator
                </h3>
              </div>
              <div className="text-xs text-neutral-400">
                Test how textile density and outer drapes interact in real time.
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              {/* Controls Column */}
              <div className="lg:col-span-7 space-y-5">
                
                {/* 1. Base Layer */}
                <div>
                  <label className="text-xs uppercase tracking-wider text-neutral-400 font-semibold block mb-2">
                    1. Base Layer (Contact Layer)
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: 'tee-light', label: '180 GSM Supima Tee' },
                      { id: 'tee-heavy', label: '260 GSM Heavy Tee' },
                      { id: 'mock-neck', label: 'Ribbed Mock-Neck' }
                    ].map((b) => (
                      <button
                        key={b.id}
                        onClick={() => setBaseLayer(b.id as any)}
                        className={`p-2.5 text-xs text-left border transition-colors cursor-pointer ${
                          baseLayer === b.id
                            ? 'border-white bg-[#1a1a1a] text-white font-medium'
                            : 'border-neutral-800 bg-[#141414] text-neutral-400 hover:text-white'
                        }`}
                      >
                        {b.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 2. Mid Layer */}
                <div>
                  <label className="text-xs uppercase tracking-wider text-neutral-400 font-semibold block mb-2">
                    2. Mid Layer (Insulation & Volume)
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {[
                      { id: 'none', label: 'No Mid Layer' },
                      { id: 'waffle-knit', label: 'Waffle Knit' },
                      { id: 'hoodie-heavy', label: '450 GSM Hoodie' },
                      { id: 'denim-overshirt', label: 'Denim Overshirt' }
                    ].map((m) => (
                      <button
                        key={m.id}
                        onClick={() => setMidLayer(m.id as any)}
                        className={`p-2.5 text-xs text-left border transition-colors cursor-pointer ${
                          midLayer === m.id
                            ? 'border-white bg-[#1a1a1a] text-white font-medium'
                            : 'border-neutral-800 bg-[#141414] text-neutral-400 hover:text-white'
                        }`}
                      >
                        {m.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 3. Outerwear */}
                <div>
                  <label className="text-xs uppercase tracking-wider text-neutral-400 font-semibold block mb-2">
                    3. Outer Shell (Silhouette Defining Anchor)
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {[
                      { id: 'none', label: 'No Outerwear' },
                      { id: 'wool-overcoat', label: 'Wool Overcoat' },
                      { id: 'goretex-shell', label: 'Gore-Tex Shell' },
                      { id: 'work-jacket', label: 'Detroit Canvas' }
                    ].map((o) => (
                      <button
                        key={o.id}
                        onClick={() => setOuterLayer(o.id as any)}
                        className={`p-2.5 text-xs text-left border transition-colors cursor-pointer ${
                          outerLayer === o.id
                            ? 'border-white bg-[#1a1a1a] text-white font-medium'
                            : 'border-neutral-800 bg-[#141414] text-neutral-400 hover:text-white'
                        }`}
                      >
                        {o.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 4. Trouser Cut */}
                <div>
                  <label className="text-xs uppercase tracking-wider text-neutral-400 font-semibold block mb-2">
                    4. Trouser Proportion (Counterbalance Anchor)
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: 'straight-raw', label: 'Straight Raw Denim' },
                      { id: 'wide-pleated', label: 'Wide-Leg Pleated Wool' },
                      { id: 'double-knee', label: 'Double-Knee Twill' }
                    ].map((p) => (
                      <button
                        key={p.id}
                        onClick={() => setBottomFit(p.id as any)}
                        className={`p-2.5 text-xs text-left border transition-colors cursor-pointer ${
                          bottomFit === p.id
                            ? 'border-white bg-[#1a1a1a] text-white font-medium'
                            : 'border-neutral-800 bg-[#141414] text-neutral-400 hover:text-white'
                        }`}
                      >
                        {p.label}
                      </button>
                    ))}
                  </div>
                </div>

              </div>

              {/* Simulation Result Card */}
              <div className="lg:col-span-5 bg-[#141414] border border-neutral-800 p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-neutral-800 text-xs text-neutral-400 mb-4">
                    <span className="uppercase tracking-widest font-semibold text-neutral-300">Curator Evaluation</span>
                    <span className="font-mono text-emerald-400 font-bold">{advice.score} / 10 Harmony</span>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-neutral-400 block mb-1">
                        Recommended Climate Envelope:
                      </span>
                      <span className="text-xs font-semibold text-white block bg-[#181818] p-2 border border-neutral-850">
                        {advice.tempRange}
                      </span>
                    </div>

                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-neutral-400 block mb-1">
                        Sartorial Dynamic Analysis:
                      </span>
                      <p className="text-xs text-neutral-300 leading-relaxed bg-[#181818] p-3 border border-neutral-850">
                        {advice.feedback}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-neutral-800 text-xs text-neutral-400 flex items-center justify-between">
                  <span>Tested on 2026 Editorial Standard</span>
                  <Link to="/outfit-ideas" className="underline hover:text-white">
                    See Real Lookbook Equivalent →
                  </Link>
                </div>
              </div>

            </div>
          </div>

          {/* The 4 Styling Pillars In-Depth */}
          <div className="space-y-12">
            {STYLE_PILLARS.map((pillar) => (
              <article
                key={pillar.id}
                id={pillar.id}
                className="border border-neutral-800 bg-[#101010] p-6 sm:p-10 transition-colors hover:border-neutral-700"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-neutral-800 gap-2 mb-6">
                  <div className="flex items-center gap-3 text-xs text-neutral-400">
                    <span className="font-mono text-white text-base font-bold">PILLAR {pillar.number}.</span>
                    <span className="uppercase tracking-widest">Mastery Chapter</span>
                  </div>
                  <span className="text-xs text-neutral-400 font-mono">Concept Ref: #{pillar.id}</span>
                </div>

                <div className="space-y-4 mb-8">
                  <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
                    {pillar.title}
                  </h3>
                  <p className="text-sm font-medium text-neutral-300 italic">
                    "{pillar.subtitle}"
                  </p>
                  <p className="text-sm text-neutral-300 leading-relaxed max-w-3xl">
                    {pillar.concept}
                  </p>
                </div>

                {/* Sub-rules breakdown */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  {pillar.rules.map((r, rIdx) => (
                    <div key={rIdx} className="p-5 bg-[#141414] border border-neutral-800 space-y-2 text-xs">
                      <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest block">
                        Rule 0{rIdx + 1}
                      </span>
                      <h4 className="text-sm font-display font-bold text-white">
                        {r.rule}
                      </h4>
                      <p className="text-neutral-300 leading-relaxed">
                        {r.explanation}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Curator Takeaway Note */}
                <div className="p-4 bg-[#161616] border border-neutral-800 text-xs text-neutral-300 flex items-start gap-3">
                  <Sparkles className="w-4 h-4 text-neutral-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block mb-0.5">Editor's Practical Takeaway:</strong>
                    <span>{pillar.curatorNote}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* Cross link */}
      <section className="py-12 bg-[#0e0e0e] border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <span className="text-neutral-400">
            Want to know more about the vision, editorial manifesto, and technical SEO behind UrbanThread?
          </span>
          <Link
            to="/about"
            className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-200 hover:bg-white text-black font-semibold uppercase tracking-wider transition-colors"
          >
            <span>Read About Us & SEO Documentation</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

    </main>
  );
};
