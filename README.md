# UrbanThread | Streetwear Editorial & Style Journal
> A contemporary fashion and streetwear editorial platform engineered for a college SEO assignment, featuring complete multi-page routing, dynamic metadata synchronization, and direct Vercel deployment support.

---

## 📌 Project Overview
**UrbanThread** is a modern streetwear and fashion editorial publication inspired by contemporary fashion magazines (Vogue Runway, Highsnobiety, Hypebeast). It provides in-depth trend forecasts, curated outfit blueprints, footwear guides, and styling fundamentals.

### 🌐 The 6 Required Routes
Every page has its own dedicated URL, unique `<title>`, unique `<meta name="description">`, unique `<h1>` heading, canonical link, Open Graph metadata, and Schema.org JSON-LD structured data:

1. **Home (`/`)**: Striking hero section, curatorial introduction, featured article spotlights, and editorial trust metrics.
2. **Streetwear Trends (`/streetwear-trends`)**: Analysis of 4 defining movements (Boxy Proportions, Technical Gorpcore, Muted Monochrome, Deconstructed Workwear) with interactive filtering and styling Dos & Don'ts.
3. **Outfit Ideas (`/outfit-ideas`)**: Real-world lookbooks for College, Casual Outings, and Evening Occasions with complete layer breakdowns and copyable specs.
4. **Sneaker Guide (`/sneaker-guide`)**: Footwear silhouette directory (Retro Runner, Minimalist Court, Gorpcore Trail, High-Top Classic), buying considerations checklist, and pant break pairing formulas.
5. **Style Tips (`/style-tips`)**: The 4 Pillars of Streetwear Styling (Proportions, Layering Mechanics, 60-30-10 Color Theory, Finishing Touches) and an interactive **Layering Simulator**.
6. **About Us (`/about`)**: Editorial mission, readership profile, sustainable fashion manifesto, and comprehensive **College SEO Project Documentation**.
* **404 Catch-All (`*`)**: Custom editorial 404 page with recovery navigation.

---

## 🛠️ Technology Stack
- **Framework**: React 19 + TypeScript + Vite
- **Routing**: React Router (`react-router-dom`)
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **SEO & Social**: Dynamic Metadata Head Manager (`SEOHead.tsx`), Open Graph 2.0, Twitter Cards, Schema.org JSON-LD
- **Crawler Files**: `/public/sitemap.xml`, `/public/robots.txt`
- **Hosting Configuration**: `vercel.json` (SPA routing rewrites for deep route refreshes)

---

## 🚀 Beginner-Friendly Guide: GitHub & Vercel Deployment

Deploying UrbanThread takes less than 3 minutes. Follow these simple steps:

### Step 1: Push Code to GitHub
1. Open your terminal in the project directory.
2. Initialize git and commit all files:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: UrbanThread SEO fashion publication"
   ```
3. Create a new repository on [GitHub](https://github.com/new) (e.g., named `urbanthread-pied`).
4. Link your local repository and push:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/urbanthread-pied.git
   git branch -M main
   git push -u origin main
   ```

### Step 2: Deploy to Vercel
1. Go to [Vercel](https://vercel.com/) and sign in with your GitHub account.
2. Click **"Add New..."** → **"Project"**.
3. Select your `urbanthread-pied` repository and click **"Import"**.
4. Vercel automatically detects **Vite**:
   - **Framework Preset**: Vite
   - **Root Directory**: `./`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Click **"Deploy"**.
6. Within 30 seconds, your site is live!

### Step 3: Direct Route Refresh on Vercel
Because the included `vercel.json` already contains:
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```
Visiting or refreshing inner routes directly (e.g., `https://your-site.vercel.app/streetwear-trends` or `/sneaker-guide`) will **never return a 404 error**.

---

## 🔍 SEO Strategy & Academic Assignment Features

### 1. Dedicated Metadata per Page
- **HTML Title Tags**: Kept between 30 and 60 characters with the brand suffix `| UrbanThread`.
- **Meta Descriptions**: Kept between 120 and 160 characters summarizing the exact content of each route with natural keyword placement.
- **Single H1 Tag**: Every page renders strictly one descriptive `<h1>` element.

### 2. Live SEO Inspector Tool
Click the **"SEO Inspector"** button in the header of any page to open a live inspection modal displaying:
- Real-time Title and Meta Description character count audit
- Canonical URL matching verification
- Active `<h1>` heading detection
- Open Graph & Twitter Card preview
- Schema.org JSON-LD structured data payload

### 3. XML Sitemap & Robots.txt
- Accessible at `/sitemap.xml` listing all 6 canonical URLs.
- Accessible at `/robots.txt` granting universal crawler permission.

### 4. Client-Side Rendering (CSR) vs Server-Side Rendering (SSR) SEO Limitations
In single-page React apps:
1. **Two-Wave Indexing**: Googlebot first crawls raw HTML (Wave 1). Since React mounts into `<div id="root">`, Googlebot schedules execution in its Web Rendering Service (WRS / Wave 2).
2. **Social Scrapers**: Social bots (WhatsApp, Twitter/X, Discord) rarely execute JavaScript. For enterprise-grade social sharing and sub-second crawl indexing, SSR (Next.js) or pre-rendering is standard practice.
3. This project demonstrates how client-side state synchronization updates all DOM metadata reliably as users transition across routes.

---

## 💻 Local Development
To run the project locally on your computer:
```bash
npm install
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.
