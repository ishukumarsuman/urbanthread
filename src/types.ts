export interface PageSEO {
  path: string;
  title: string;
  metaDescription: string;
  keywords: string[];
  canonicalUrl: string;
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
  ogType: 'website' | 'article';
  twitterTitle: string;
  twitterDescription: string;
  h1: string;
  schemaType: string;
  jsonLd: Record<string, unknown>;
  focusKeyword: string;
}

export interface TrendCategory {
  id: string;
  title: string;
  subtitle: string;
  era: string;
  summary: string;
  editorialInsight: string;
  essentialPieces: string[];
  stylingAdvice: {
    dos: string[];
    donts: string[];
  };
}

export interface OutfitLook {
  id: string;
  title: string;
  occasion: 'College' | 'Casual' | 'Evening';
  vibe: string;
  description: string;
  garments: {
    layer: string;
    item: string;
    fabricOrColor: string;
  }[];
  footwear: string;
  accessories: string[];
  proStylingTip: string;
}

export interface SneakerSilhouette {
  id: string;
  name: string;
  silhouetteType: 'Retro Runner' | 'Minimalist Court' | 'Gorpcore Trail' | 'High-Top Classic';
  designPhilosophy: string;
  bestPairedWith: string[];
  materialFocus: string;
  buyingChecklist: string[];
  versatilityScore: number;
}

export interface StylePillar {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  concept: string;
  rules: {
    rule: string;
    explanation: string;
  }[];
  curatorNote: string;
}
