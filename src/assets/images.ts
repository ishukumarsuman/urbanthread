/**
 * UrbanThread Asset Registry
 * Provides imported local photography with static public path fallbacks
 * and verified high-resolution fashion editorial HTTPS fallbacks.
 */

// 1. Direct ES module imports for Vite bundling
import heroLocal from './images/hero_streetwear_1791994235228.jpg';
import trendsLocal from './images/trend_oversized_1791994232702.jpg';
import outfitsLocal from './images/outfit_layers_1791994235432.jpg';
import sneakersLocal from './images/sneaker_curation_1791994235650.jpg';
import styleTipsLocal from './images/style_textures_1791994236344.jpg';

// 2. High-resolution verified editorial backup URLs (Unsplash Fashion Editorial CDN)
export const BACKUP_IMAGES = {
  hero: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1400&q=80',
  trends: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80',
  outfits: 'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&w=1200&q=80',
  sneakers: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=1200&q=80',
  styleTips: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&w=1200&q=80',
  about: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=80',
};

// 3. Primary exported images with tiered fallback resolution
export const IMAGES = {
  hero: heroLocal || '/images/hero.jpg',
  trends: trendsLocal || '/images/trends.jpg',
  outfits: outfitsLocal || '/images/outfits.jpg',
  sneakers: sneakersLocal || '/images/sneakers.jpg',
  styleTips: styleTipsLocal || '/images/style_tips.jpg',
  about: heroLocal || '/images/hero.jpg',
  fallback: BACKUP_IMAGES.hero,
};
