import React from 'react';
import { Link } from 'react-router-dom';
import { SEOHead } from '../components/SEOHead';
import { Compass, ArrowRight, CornerDownLeft } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <main className="min-h-[80vh] bg-[#0c0c0c] text-[#f4f4f0] flex items-center justify-center py-20 px-4">
      <SEOHead />

      <div className="max-w-2xl w-full border border-neutral-800 bg-[#121212] p-8 sm:p-12 text-center space-y-6">
        <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-widest text-neutral-400">
          <Compass className="w-4 h-4 text-neutral-400" />
          <span>Error 404 · Unmapped Route</span>
        </div>

        {/* Strict Unique H1 */}
        <h1 className="text-4xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
          Archive Route Not Found
        </h1>

        <p className="text-sm sm:text-base text-neutral-300 leading-relaxed max-w-lg mx-auto">
          The editorial piece, lookbook, or silhouette archive you attempted to reach does not exist or has been relocated to another section.
        </p>

        <div className="pt-4 border-t border-neutral-800">
          <span className="text-xs uppercase tracking-wider text-neutral-400 font-semibold block mb-4">
            Curated Sections to Explore:
          </span>
          <div className="flex flex-wrap justify-center gap-2 text-xs">
            <Link
              to="/"
              className="px-4 py-2 bg-neutral-200 hover:bg-white text-black font-semibold uppercase tracking-wider transition-colors"
            >
              Return Home
            </Link>
            <Link
              to="/streetwear-trends"
              className="px-4 py-2 border border-neutral-700 hover:border-neutral-500 text-neutral-200 hover:text-white font-medium uppercase tracking-wider transition-colors"
            >
              Streetwear Trends
            </Link>
            <Link
              to="/outfit-ideas"
              className="px-4 py-2 border border-neutral-700 hover:border-neutral-500 text-neutral-200 hover:text-white font-medium uppercase tracking-wider transition-colors"
            >
              Outfit Ideas
            </Link>
            <Link
              to="/sneaker-guide"
              className="px-4 py-2 border border-neutral-700 hover:border-neutral-500 text-neutral-200 hover:text-white font-medium uppercase tracking-wider transition-colors"
            >
              Sneaker Guide
            </Link>
          </div>
        </div>

        <div className="text-[11px] text-neutral-400 pt-2 font-mono">
          Vercel SPA Fallback Active · Path Redirected Gracefully
        </div>
      </div>
    </main>
  );
};
