import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { StreetwearTrendsPage } from './pages/StreetwearTrendsPage';
import { OutfitIdeasPage } from './pages/OutfitIdeasPage';
import { SneakerGuidePage } from './pages/SneakerGuidePage';
import { StyleTipsPage } from './pages/StyleTipsPage';
import { AboutPage } from './pages/AboutPage';
import { NotFoundPage } from './pages/NotFoundPage';

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen bg-[#0c0c0c] text-[#f4f4f0] antialiased selection:bg-[#f4f4f0] selection:text-[#0c0c0c]">
        {/* Persistent Top Navigation Bar */}
        <Header />

        {/* Dynamic Route Viewport */}
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/streetwear-trends" element={<StreetwearTrendsPage />} />
            <Route path="/outfit-ideas" element={<OutfitIdeasPage />} />
            <Route path="/sneaker-guide" element={<SneakerGuidePage />} />
            <Route path="/style-tips" element={<StyleTipsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>

        {/* Global Footer with Canonical Links and Sitemap */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}
