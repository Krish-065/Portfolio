# Krish Shah — Personal Portfolio & Engineering Dossier

> **AI/ML Engineer • Software Developer • Entrepreneur**  
> *"Building intelligent systems. Turning ideas into impact."*

A production-quality personal brand and engineering portfolio designed under the **MODERN EDITORIAL × INTELLIGENT TECHNOLOGY** design system.

---

## 🎨 Visual Identity & Design System

*   **Palette:** Warm Ivory (`#F8F8F4`), Deep Charcoal typography (`#17191D`), Restrained Electric Cobalt (`#345BDB`), and subtle neutral borders (`#E7E8E3`).
*   **Typography:** Space Grotesk (Headings) paired with Inter (Body) and JetBrains Mono (Code / Metrics).
*   **Aesthetics:** Asymmetric editorial grids, generous whitespace, canvas-rendered subtle background node lattice, and interactive case study deep-dives.
*   **Strict Empirical Honesty:** Zero fabricated metrics, zero fake live-trading alpha, zero synthetic accuracies.

---

## 🛠️ Tech Stack

*   **Core:** React 18, Vite 5, TypeScript
*   **Styling:** Tailwind CSS with custom editorial extensions
*   **Icons:** Lucide React
*   **Animations:** Canvas 2D background lattice, CSS transitions, Framer Motion
*   **Single Source of Truth:** `src/data/portfolioData.ts`

---

## 📂 Project Architecture

```
portfolio/
├── public/
│   ├── favicon.svg             # Monogram KS vector favicon
│   └── Krish_Shah_Resume.pdf   # Verified downloadable resume PDF
├── src/
│   ├── components/
│   │   ├── AboutSection.tsx        # Authentic first-person engineering story
│   │   ├── BackgroundLattice.tsx   # Subtle HTML5 Canvas particle & node graph
│   │   ├── CaseStudyModal.tsx      # In-depth architectural case-study drawer
│   │   ├── CertificationsSection.tsx # HKUST Software Eng, VIVIBHA, Coursera slots
│   │   ├── CodingProfiles.tsx      # Verified LeetCode (132 solved) & GitHub stats
│   │   ├── ContactSection.tsx      # Working 1-click email copy & mailto draft
│   │   ├── ExperienceSection.tsx   # Sports Coordinator, Basketball All-India, Hackathons
│   │   ├── FeaturedProjects.tsx    # StocksOperator, BhoomiSetu, FutureSkills AI, etc.
│   │   ├── Footer.tsx              # Editorial footer with live IST clock
│   │   ├── Hero.tsx                # Editorial split hero with portrait placeholder
│   │   ├── Navbar.tsx              # Sticky navigation with mobile menu drawer
│   │   ├── ResearchSection.tsx     # STAGE-Net, Model 1 & 2 Financial ML research
│   │   ├── SecondaryProjects.tsx   # NyayMitra, Sales Analyzer, Space Data Science
│   │   └── SkillsSection.tsx       # Verified repository skills by category
│   ├── data/
│   │   └── portfolioData.ts        # Central configuration file for all portfolio data
│   ├── types/
│   │   └── index.ts                # TypeScript interfaces
│   ├── App.tsx                     # Main layout and scroll spy
│   ├── index.css                   # Custom Tailwind directives & typography
│   └── main.tsx                    # React DOM root entry
├── index.html                      # SEO metadata & Google Fonts
├── package.json                    # Dependencies & build scripts
├── tailwind.config.js              # Theme extensions
├── tsconfig.json                   # Strict TypeScript compiler options
└── vite.config.ts                  # Vite bundler configuration
```

---

## 🚀 Running the Project Locally

### 1. Install dependencies
```bash
npm install
```

### 2. Start the development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Production Build & Preview
```bash
npm run build
npm run preview
```

---

## ✏️ How to Update Your Information

All content is managed through a single centralized configuration file:

### `src/data/portfolioData.ts`

1. **Personal Bio & Contact:** Edit `personalInfo` (name, email, phone, headline, bio).
2. **Featured Projects:** Edit `featuredProjects` to update live URLs, GitHub repositories, or add new milestones.
3. **Quantitative Research:** Edit `researchModels` to update STAGE-Net, Model 1, or Model 2 findings.
4. **Skills:** Edit `skillGroups` to adjust categories or add new verified technologies.
5. **Certifications:** Edit `certificationItems` to add additional Coursera certificates.
6. **Experience & Education:** Edit `experienceItems` and `educationData`.
7. **LeetCode Stats:** Edit `verifiedLeetCode` when you solve more problems.
8. **Portrait Photo:** Place your photo as `public/avatar.jpg` or update the Hero component.
9. **Résumé:** Replace `public/Krish_Shah_Resume.pdf` with any newer edition.

---

## 🌐 Deployment Instructions

### Vercel (Recommended)
1. Push your repository to GitHub:
   ```bash
   git init
   git add .
   git commit -m "feat: complete production portfolio for Krish Shah"
   git remote add origin https://github.com/Krish-065/portfolio.git
   git push -u origin main
   ```
2. Import the repository on [Vercel](https://vercel.com).
3. Framework Preset: **Vite**
4. Build Command: `npm run build`
5. Output Directory: `dist`
6. Click **Deploy**.

