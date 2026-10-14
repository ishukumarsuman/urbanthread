import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { SEO_DATA } from '../config/seo';
import { PageSEO } from '../types';

interface SEOHeadProps {
  customSEO?: Partial<PageSEO>;
}

export const SEOHead: React.FC<SEOHeadProps> = ({ customSEO }) => {
  const location = useLocation();
  const currentPath = location.pathname;
  const seoConfig = customSEO
    ? { ...(SEO_DATA[currentPath] || SEO_DATA['/404']), ...customSEO }
    : SEO_DATA[currentPath] || SEO_DATA['/404'];

  useEffect(() => {
    // 1. Update Document Title
    document.title = seoConfig.title;

    // Helper to update or create meta tags
    const setMetaTag = (attrName: string, attrVal: string, content: string) => {
      let element = document.querySelector(`meta[${attrName}="${attrVal}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attrName, attrVal);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // 2. Standard Meta
    setMetaTag('name', 'description', seoConfig.metaDescription);
    if (seoConfig.keywords && seoConfig.keywords.length > 0) {
      setMetaTag('name', 'keywords', seoConfig.keywords.join(', '));
    }

    // 3. OpenGraph
    setMetaTag('property', 'og:title', seoConfig.ogTitle || seoConfig.title);
    setMetaTag('property', 'og:description', seoConfig.ogDescription || seoConfig.metaDescription);
    setMetaTag('property', 'og:url', seoConfig.canonicalUrl);
    setMetaTag('property', 'og:type', seoConfig.ogType || 'website');
    if (seoConfig.ogImage) {
      setMetaTag('property', 'og:image', seoConfig.ogImage);
    }

    // 4. Twitter Card
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', seoConfig.twitterTitle || seoConfig.title);
    setMetaTag('name', 'twitter:description', seoConfig.twitterDescription || seoConfig.metaDescription);
    if (seoConfig.ogImage) {
      setMetaTag('name', 'twitter:image', seoConfig.ogImage);
    }

    // 5. Canonical Link Tag
    let canonicalTag = document.querySelector('link[rel="canonical"]');
    if (!canonicalTag) {
      canonicalTag = document.createElement('link');
      canonicalTag.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalTag);
    }
    canonicalTag.setAttribute('href', seoConfig.canonicalUrl);

    // 6. Schema.org JSON-LD injection
    const scriptId = 'urbanthread-jsonld-schema';
    let jsonLdScript = document.getElementById(scriptId);
    if (!jsonLdScript) {
      jsonLdScript = document.createElement('script');
      jsonLdScript.id = scriptId;
      jsonLdScript.setAttribute('type', 'application/ld+json');
      document.head.appendChild(jsonLdScript);
    }
    jsonLdScript.textContent = JSON.stringify(seoConfig.jsonLd, null, 2);

    // Scroll to top on route change
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [seoConfig]);

  return null;
};
