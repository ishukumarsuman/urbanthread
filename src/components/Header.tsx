import React, { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Sparkles, Activity } from 'lucide-react';
import { SEOAuditModal } from './SEOAuditModal';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [seoModalOpen, setSeoModalOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Trends', path: '/streetwear-trends' },
    { name: 'Outfits', path: '/outfit-ideas' },
    { name: 'Sneakers', path: '/sneaker-guide' },
    { name: 'Style Tips', path: '/style-tips' },
    { name: 'About', path: '/about' },
  ];

  const closeMobile = () => setMobileMenuOpen(false);

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-[#0c0c0c]/90 backdrop-blur-md border-b border-neutral-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
          
          {/* Zone 1: Brand Wordmark (Single text element in display face) */}
          <Link
            to="/"
            onClick={closeMobile}
            className="text-2xl sm:text-3xl font-display font-extrabold tracking-tight text-white hover:opacity-90 transition-opacity whitespace-nowrap shrink-0"
          >
            UrbanThread
          </Link>

          {/* Zone 2: Navigation Links (Single-line, subtle underlines for active state) */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={`relative py-1 transition-colors whitespace-nowrap shrink-0 ${
                    isActive
                      ? 'text-white font-semibold'
                      : 'text-neutral-400 hover:text-neutral-200'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-white transition-all" />
                  )}
                </NavLink>
              );
            })}
          </nav>

          {/* Zone 3: 1 Primary Action + Mobile Hamburger */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => setSeoModalOpen(true)}
              aria-label="Inspect On-Page SEO"
              className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-black bg-[#f4f4f0] hover:bg-white transition-colors cursor-pointer whitespace-nowrap shrink-0"
            >
              <Activity className="w-3.5 h-3.5" />
              SEO Inspector
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
              className="p-2 text-neutral-400 hover:text-white md:hidden border border-neutral-800"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-neutral-800 bg-[#111111] px-6 py-6 animate-in slide-in-from-top-4 duration-200">
            <nav className="flex flex-col space-y-4">
              <Link
                to="/"
                onClick={closeMobile}
                className={`text-base font-medium py-1 ${
                  location.pathname === '/' ? 'text-white font-bold' : 'text-neutral-400'
                }`}
              >
                Home
              </Link>
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={closeMobile}
                  className={`text-base font-medium py-1 ${
                    location.pathname === link.path ? 'text-white font-bold' : 'text-neutral-400'
                  }`}
                >
                  {link.name}
                </Link>
              ))}

              <div className="pt-4 border-t border-neutral-800">
                <button
                  onClick={() => {
                    closeMobile();
                    setSeoModalOpen(true);
                  }}
                  className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-bold uppercase tracking-wider bg-white text-black"
                >
                  <Activity className="w-4 h-4" />
                  Inspect Page SEO
                </button>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* SEO Inspector Modal */}
      <SEOAuditModal isOpen={seoModalOpen} onClose={() => setSeoModalOpen(false)} />
    </>
  );
};
