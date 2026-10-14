import { PageSEO } from '../types';
import { IMAGES } from '../assets/images';

/**
 * UrbanThread Canonical Domain Configuration
 * Placeholder domain for Vercel deployment as specified in project brief.
 * Replace with your custom production domain if mapped on Vercel.
 */
export const BASE_CANONICAL_URL = 'https://urbanthread-fashion.vercel.app';

export const SEO_DATA: Record<string, PageSEO> = {
  '/': {
    path: '/',
    title: 'UrbanThread | Modern Streetwear Editorial & Style Journal',
    metaDescription: 'Discover modern streetwear trends, curated outfit ideas, sneaker guides, and styling tips from the UrbanThread fashion editorial journal.',
    focusKeyword: 'streetwear editorial',
    keywords: [
      'streetwear trends',
      'outfit ideas',
      'sneaker guide',
      'fashion styling tips',
      'modern streetwear',
      'fashion journal',
      'menswear and womenswear streetwear'
    ],
    canonicalUrl: `${BASE_CANONICAL_URL}/`,
    ogTitle: 'UrbanThread | Modern Streetwear Editorial & Style Journal',
    ogDescription: 'An editorial fashion platform exploring contemporary streetwear trends, curated outfit ideas, sneaker silhouettes, and styling fundamentals.',
    ogImage: IMAGES.hero,
    ogType: 'website',
    twitterTitle: 'UrbanThread | Modern Streetwear Editorial & Style Journal',
    twitterDescription: 'Contemporary streetwear trends, curated outfit ideas, sneaker guides, and styling tips from the UrbanThread editorial team.',
    h1: 'The Contemporary Streetwear & Style Journal',
    schemaType: 'WebSite',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'UrbanThread',
      alternateName: 'UrbanThread Fashion & Streetwear Journal',
      url: `${BASE_CANONICAL_URL}/`,
      description: 'A contemporary streetwear and fashion editorial publication featuring trend breakdowns, outfit curation, sneaker guides, and styling tips.',
      potentialAction: {
        '@type': 'SearchAction',
        target: `${BASE_CANONICAL_URL}/search?q={search_term_string}`,
        'query-input': 'required name=search_term_string'
      }
    }
  },

  '/streetwear-trends': {
    path: '/streetwear-trends',
    title: 'Streetwear Trends 2026 | UrbanThread Fashion Journal',
    metaDescription: 'Explore the defining streetwear trends: oversized tailoring, technical gorpcore, muted minimalism, and modern utilitarian aesthetics.',
    focusKeyword: 'streetwear trends',
    keywords: [
      'streetwear trends 2026',
      'oversized fashion trends',
      'gorpcore streetwear',
      'minimalist streetwear',
      'urban fashion trends',
      'utilitarian fashion'
    ],
    canonicalUrl: `${BASE_CANONICAL_URL}/streetwear-trends`,
    ogTitle: 'Streetwear Trends 2026 | UrbanThread Fashion Journal',
    ogDescription: 'Curated editorial analysis of top streetwear movements: boxy proportions, techwear evolution, quiet luxury streetwear, and vintage utility.',
    ogImage: IMAGES.trends,
    ogType: 'article',
    twitterTitle: 'Streetwear Trends 2026 | UrbanThread Fashion Journal',
    twitterDescription: 'In-depth editorial breakdowns of modern streetwear silhouettes, gorpcore, and oversized styling for the current fashion cycle.',
    h1: 'Contemporary Streetwear Movements & Trend Forecasts',
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
    title: 'Curated Outfit Ideas | College, Casual & Evening Looks',
    metaDescription: 'Browse curated streetwear outfit ideas designed for college campus, casual weekend outings, and elevated evening gatherings.',
    focusKeyword: 'outfit ideas',
    keywords: [
      'streetwear outfit ideas',
      'college streetwear outfits',
      'casual weekend style',
      'evening streetwear looks',
      'capsule wardrobe outfits',
      'fashion lookbook'
    ],
    canonicalUrl: `${BASE_CANONICAL_URL}/outfit-ideas`,
    ogTitle: 'Curated Outfit Ideas | College, Casual & Evening Looks',
    ogDescription: 'From relaxed lecture hall layering to minimalist night-out ensembles: inspect full garment breakdowns and styling blueprints.',
    ogImage: IMAGES.outfits,
    ogType: 'article',
    twitterTitle: 'Curated Outfit Ideas | College, Casual & Evening Looks',
    twitterDescription: 'Streetwear lookbooks and versatile outfit blueprints curated for students and creative professionals.',
    h1: 'Curated Streetwear Outfit Blueprints & Lookbooks',
    schemaType: 'CollectionPage',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: 'Curated Streetwear Outfit Ideas | UrbanThread',
      url: `${BASE_CANONICAL_URL}/outfit-ideas`,
      description: 'Complete outfit guides tailored for college days, casual hangouts, and sleek evening events with detailed layer breakdowns.',
      isPartOf: {
        '@type': 'WebSite',
        name: 'UrbanThread',
        url: `${BASE_CANONICAL_URL}/`
      }
    }
  },

  '/sneaker-guide': {
    path: '/sneaker-guide',
    title: 'The Streetwear Sneaker Guide | Silhouettes & Styling',
    metaDescription: 'Discover the definitive sneaker guide covering retro runners, minimalist court models, trail silhouettes, and essential pairing advice.',
    focusKeyword: 'sneaker guide',
    keywords: [
      'streetwear sneaker guide',
      'sneaker styling tips',
      'retro runner sneakers',
      'minimalist court sneakers',
      'gorpcore trail shoes',
      'sneaker buying guide'
    ],
    canonicalUrl: `${BASE_CANONICAL_URL}/sneaker-guide`,
    ogTitle: 'The Streetwear Sneaker Guide | Silhouettes & Styling',
    ogDescription: 'An editorial sneaker guide breaking down timeless silhouettes, materials, buying considerations, and trouser break pairings.',
    ogImage: IMAGES.sneakers,
    ogType: 'article',
    twitterTitle: 'The Streetwear Sneaker Guide | Silhouettes & Styling',
    twitterDescription: 'Explore iconic sneaker categories, silhouette profiles, and foolproof pant-pairing formulas.',
    h1: 'The Streetwear Footwear & Sneaker Silhouette Guide',
    schemaType: 'Article',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: 'The Definitive Streetwear Footwear & Sneaker Silhouette Guide',
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
      description: 'Comprehensive analysis of essential sneaker silhouettes, construction quality, silhouette balance, and outfit integration.'
    }
  },

  '/style-tips': {
    path: '/style-tips',
    title: 'Streetwear Style Tips | Layering, Fit & Colour Theory',
    metaDescription: 'Master the four fundamentals of modern streetwear styling: proportion balance, smart layering, monochromatic palettes, and minimal accents.',
    focusKeyword: 'fashion styling tips',
    keywords: [
      'fashion styling tips',
      'streetwear layering guide',
      'proportions in fashion',
      'monochrome color styling',
      'minimalist jewelry streetwear',
      'wardrobe rules'
    ],
    canonicalUrl: `${BASE_CANONICAL_URL}/style-tips`,
    ogTitle: 'Streetwear Style Tips | Layering, Fit & Colour Theory',
    ogDescription: 'Practical fashion guides explaining how to master proportions, textile weights, layering mechanics, and subtle hardware accents.',
    ogImage: IMAGES.styleTips,
    ogType: 'article',
    twitterTitle: 'Streetwear Style Tips | Layering, Fit & Colour Theory',
    twitterDescription: 'Master modern streetwear styling with our practical breakdown of proportions, layering, and color theory.',
    h1: 'The Core Fundamentals of Modern Streetwear Styling',
    schemaType: 'HowTo',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'How to Style Contemporary Streetwear',
      description: 'A step-by-step editorial guide to proportions, textile layering, tonal palettes, and deliberate accessory selection.',
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
    title: 'About UrbanThread | Editorial Mission & SEO Project',
    metaDescription: 'Learn about UrbanThread: our editorial philosophy, target audience, sustainable style perspective, and college SEO project architecture.',
    focusKeyword: 'about UrbanThread',
    keywords: [
      'about UrbanThread',
      'fashion editorial mission',
      'streetwear philosophy',
      'college SEO project',
      'editorial team',
      'sustainable streetwear'
    ],
    canonicalUrl: `${BASE_CANONICAL_URL}/about`,
    ogTitle: 'About UrbanThread | Editorial Mission & SEO Project',
    ogDescription: 'UrbanThread bridges high fashion editorial standards with everyday streetwear utility. Read our manifesto and project architecture.',
    ogImage: IMAGES.hero,
    ogType: 'website',
    twitterTitle: 'About UrbanThread | Editorial Mission & SEO Project',
    twitterDescription: 'Discover the story, editorial curation standards, and technical SEO structure powering UrbanThread.',
    h1: 'About UrbanThread: Editorial Manifesto & SEO Architecture',
    schemaType: 'AboutPage',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'AboutPage',
      name: 'About UrbanThread',
      url: `${BASE_CANONICAL_URL}/about`,
      description: 'An independent streetwear and style publication created as a modern editorial study and technical SEO demonstration.',
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
