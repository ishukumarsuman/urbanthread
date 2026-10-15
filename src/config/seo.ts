import { PageSEO } from '../types';
import { IMAGES } from '../assets/images';

/**
 * UrbanThread Canonical Domain Configuration
 * Placeholder domain for Vercel deployment as specified in project brief.
 * Replace with your custom production domain if mapped on Vercel.
 */
export const BASE_CANONICAL_URL = 'https://urbanthread-pied.vercel.app';

export const SEO_DATA: Record<string, PageSEO> = {
  '/': {
    path: '/',
    title: 'UrbanThread | Modern Streetwear Fashion & Style Journal',
    metaDescription: 'Discover modern streetwear fashion, curated outfit ideas, sneaker guides, and styling tips from the UrbanThread contemporary editorial journal.',
    focusKeyword: 'streetwear fashion',
    keywords: [
      'streetwear fashion',
      'urban streetwear fashion',
      'streetwear trends',
      'streetwear outfit ideas',
      'sneaker styling guide',
      'streetwear styling tips',
      'contemporary fashion journal'
    ],
    canonicalUrl: `${BASE_CANONICAL_URL}/`,
    ogTitle: 'UrbanThread | Modern Streetwear Fashion & Style Journal',
    ogDescription: 'Discover modern streetwear fashion, curated outfit ideas, sneaker guides, and styling tips from the UrbanThread contemporary editorial journal.',
    ogImage: IMAGES.hero,
    ogType: 'website',
    twitterTitle: 'UrbanThread | Modern Streetwear Fashion & Style Journal',
    twitterDescription: 'Discover modern streetwear fashion, curated outfit ideas, sneaker guides, and styling tips from the UrbanThread contemporary editorial journal.',
    h1: 'The Contemporary Streetwear Fashion & Style Journal',
    schemaType: 'WebSite',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'UrbanThread',
      alternateName: 'UrbanThread Modern Streetwear Fashion & Style Journal',
      url: `${BASE_CANONICAL_URL}/`,
      description: 'A contemporary streetwear fashion and style editorial publication featuring trend breakdowns, outfit curation, sneaker guides, and styling tips.',
      potentialAction: {
        '@type': 'SearchAction',
        target: `${BASE_CANONICAL_URL}/search?q={search_term_string}`,
        'query-input': 'required name=search_term_string'
      }
    }
  },

  '/streetwear-trends': {
    path: '/streetwear-trends',
    title: 'Streetwear Trends 2026 | UrbanThread Style Journal',
    metaDescription: 'Explore defining streetwear trends: oversized tailoring, technical gorpcore, muted minimalism, and modern utilitarian aesthetics for your wardrobe.',
    focusKeyword: 'streetwear trends',
    keywords: [
      'streetwear trends',
      'streetwear trends 2026',
      'oversized streetwear trends',
      'gorpcore streetwear',
      'minimalist streetwear trends',
      'urban fashion movements'
    ],
    canonicalUrl: `${BASE_CANONICAL_URL}/streetwear-trends`,
    ogTitle: 'Streetwear Trends 2026 | UrbanThread Style Journal',
    ogDescription: 'Explore defining streetwear trends: oversized tailoring, technical gorpcore, muted minimalism, and modern utilitarian aesthetics for your wardrobe.',
    ogImage: IMAGES.trends,
    ogType: 'article',
    twitterTitle: 'Streetwear Trends 2026 | UrbanThread Style Journal',
    twitterDescription: 'Explore defining streetwear trends: oversized tailoring, technical gorpcore, muted minimalism, and modern utilitarian aesthetics for your wardrobe.',
    h1: 'The Defining Streetwear Trends & Movement Forecasts',
    schemaType: 'CollectionPage',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: 'Streetwear Trends 2026 | UrbanThread',
      url: `${BASE_CANONICAL_URL}/streetwear-trends`,
      description: 'An editorial analysis of defining streetwear trends, silhouettes, colorways, and cultural movements shaping urban fashion.',
      isPartOf: {
        '@type': 'WebSite',
        name: 'UrbanThread',
        url: `${BASE_CANONICAL_URL}/`
      }
    }
  },

  '/outfit-ideas': {
    path: '/outfit-ideas',
    title: 'Streetwear Outfit Ideas | Curated Lookbooks & Blueprints',
    metaDescription: 'Browse curated streetwear outfit ideas designed for college campus transit, relaxed weekend outings, and elevated evening gatherings.',
    focusKeyword: 'streetwear outfit ideas',
    keywords: [
      'streetwear outfit ideas',
      'college streetwear outfit ideas',
      'casual streetwear outfit ideas',
      'evening streetwear looks',
      'capsule wardrobe outfits',
      'streetwear lookbook'
    ],
    canonicalUrl: `${BASE_CANONICAL_URL}/outfit-ideas`,
    ogTitle: 'Streetwear Outfit Ideas | Curated Lookbooks & Blueprints',
    ogDescription: 'Browse curated streetwear outfit ideas designed for college campus transit, relaxed weekend outings, and elevated evening gatherings.',
    ogImage: IMAGES.outfits,
    ogType: 'article',
    twitterTitle: 'Streetwear Outfit Ideas | Curated Lookbooks & Blueprints',
    twitterDescription: 'Browse curated streetwear outfit ideas designed for college campus transit, relaxed weekend outings, and elevated evening gatherings.',
    h1: 'Curated Streetwear Outfit Ideas & Daily Lookbooks',
    schemaType: 'CollectionPage',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: 'Curated Streetwear Outfit Ideas | UrbanThread',
      url: `${BASE_CANONICAL_URL}/outfit-ideas`,
      description: 'Complete streetwear outfit ideas tailored for college days, casual hangouts, and sleek evening events with detailed layer breakdowns.',
      isPartOf: {
        '@type': 'WebSite',
        name: 'UrbanThread',
        url: `${BASE_CANONICAL_URL}/`
      }
    }
  },

  '/sneaker-guide': {
    path: '/sneaker-guide',
    title: 'The Sneaker Styling Guide | Silhouettes & Trouser Breaks',
    metaDescription: 'Explore our definitive sneaker styling guide covering retro runners, minimalist court shoes, trail silhouettes, and essential pant break formulas.',
    focusKeyword: 'sneaker styling guide',
    keywords: [
      'sneaker styling guide',
      'streetwear sneaker guide',
      'sneaker silhouette styling',
      'retro runner sneakers',
      'trouser pant break guide',
      'footwear pairing guide'
    ],
    canonicalUrl: `${BASE_CANONICAL_URL}/sneaker-guide`,
    ogTitle: 'The Sneaker Styling Guide | Silhouettes & Trouser Breaks',
    ogDescription: 'Explore our definitive sneaker styling guide covering retro runners, minimalist court shoes, trail silhouettes, and essential pant break formulas.',
    ogImage: IMAGES.sneakers,
    ogType: 'article',
    twitterTitle: 'The Sneaker Styling Guide | Silhouettes & Trouser Breaks',
    twitterDescription: 'Explore our definitive sneaker styling guide covering retro runners, minimalist court shoes, trail silhouettes, and essential pant break formulas.',
    h1: 'The Streetwear Sneaker Styling Guide & Silhouette Matrix',
    schemaType: 'Article',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: 'The Streetwear Sneaker Styling Guide & Silhouette Matrix',
      url: `${BASE_CANONICAL_URL}/sneaker-guide`,
      author: {
        '@type': 'Organization',
        name: 'UrbanThread Editorial Team'
      },
      publisher: {
        '@type': 'Organization',
        name: 'UrbanThread',
        url: `${BASE_CANONICAL_URL}/`
      },
      description: 'Comprehensive sneaker styling guide analyzing essential footwear silhouettes, construction quality, silhouette balance, and trouser integration.'
    }
  },

  '/style-tips': {
    path: '/style-tips',
    title: 'Streetwear Styling Tips | Layering, Fit & Color Theory',
    metaDescription: 'Master essential streetwear styling tips: proportion balance, fabric weight graduation, tonal color palettes, and understated hardware accents.',
    focusKeyword: 'streetwear styling tips',
    keywords: [
      'streetwear styling tips',
      'streetwear layering tips',
      'fashion proportions styling',
      'tonal color theory fashion',
      'minimalist accessory tips',
      'streetwear wardrobe fundamentals'
    ],
    canonicalUrl: `${BASE_CANONICAL_URL}/style-tips`,
    ogTitle: 'Streetwear Styling Tips | Layering, Fit & Color Theory',
    ogDescription: 'Master essential streetwear styling tips: proportion balance, fabric weight graduation, tonal color palettes, and understated hardware accents.',
    ogImage: IMAGES.styleTips,
    ogType: 'article',
    twitterTitle: 'Streetwear Styling Tips | Layering, Fit & Color Theory',
    twitterDescription: 'Master essential streetwear styling tips: proportion balance, fabric weight graduation, tonal color palettes, and understated hardware accents.',
    h1: 'Streetwear Styling Tips & Modern Wardrobe Fundamentals',
    schemaType: 'HowTo',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Essential Streetwear Styling Tips & Fundamentals',
      description: 'A step-by-step editorial guide covering streetwear styling tips, proportions, textile layering, tonal palettes, and accessory selection.',
      step: [
        {
          '@type': 'HowToStep',
          name: 'Understand Silhouette & Proportions',
          text: 'Balance oversized tops with structured wide-leg or straight-cut trousers to avoid looking overwhelmed.'
        },
        {
          '@type': 'HowToStep',
          name: 'Layer by Fabric Weight',
          text: 'Stack lightweight cotton bases beneath mid-weight waffle knits and heavy wool or nylon outer shells.'
        },
        {
          '@type': 'HowToStep',
          name: 'Restrain the Color Palette',
          text: 'Anchor looks around two complementary neutral tones with one muted focal accent.'
        }
      ]
    }
  },

  '/about': {
    path: '/about',
    title: 'About UrbanThread | Brand Philosophy & Fashion Journal',
    metaDescription: 'Learn about the UrbanThread brand and fashion journal: our editorial manifesto, sustainable philosophy, and college SEO project architecture.',
    focusKeyword: 'UrbanThread brand and fashion journal',
    keywords: [
      'UrbanThread brand and fashion journal',
      'about UrbanThread',
      'streetwear fashion journal',
      'editorial fashion brand',
      'sustainable streetwear philosophy',
      'college SEO project'
    ],
    canonicalUrl: `${BASE_CANONICAL_URL}/about`,
    ogTitle: 'About UrbanThread | Brand Philosophy & Fashion Journal',
    ogDescription: 'Learn about the UrbanThread brand and fashion journal: our editorial manifesto, sustainable philosophy, and college SEO project architecture.',
    ogImage: IMAGES.hero,
    ogType: 'website',
    twitterTitle: 'About UrbanThread | Brand Philosophy & Fashion Journal',
    twitterDescription: 'Learn about the UrbanThread brand and fashion journal: our editorial manifesto, sustainable philosophy, and college SEO project architecture.',
    h1: 'The UrbanThread Brand and Fashion Journal: Manifesto & SEO',
    schemaType: 'AboutPage',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'AboutPage',
      name: 'About UrbanThread: Brand and Fashion Journal',
      url: `${BASE_CANONICAL_URL}/about`,
      description: 'The UrbanThread brand and fashion journal: an independent publication created as a modern style study and technical SEO demonstration.',
      publisher: {
        '@type': 'Organization',
        name: 'UrbanThread',
        url: `${BASE_CANONICAL_URL}/`
      }
    }
  },

  '/404': {
    path: '/404',
    title: '404 - Page Not Found | UrbanThread',
    metaDescription: 'The page you requested could not be located on UrbanThread. Browse our streetwear trends, outfit lookbooks, or return home.',
    focusKeyword: 'page not found',
    keywords: ['404', 'page not found', 'urbanthread'],
    canonicalUrl: `${BASE_CANONICAL_URL}/404`,
    ogTitle: '404 - Page Not Found | UrbanThread',
    ogDescription: 'The editorial piece or archive you are looking for has been moved or retired. Explore our latest streetwear collections.',
    ogImage: IMAGES.hero,
    ogType: 'website',
    twitterTitle: '404 - Page Not Found | UrbanThread',
    twitterDescription: 'The page you are looking for could not be found.',
    h1: 'Archive Route Not Found',
    schemaType: 'WebPage',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: '404 - Page Not Found',
      url: `${BASE_CANONICAL_URL}/404`
    }
  }
};
