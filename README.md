# Euxhenjo Nex - Portfolio Website

> A modern, high-performance portfolio website showcasing full-stack development skills with Next.js 15, TypeScript, and AI integration.

🌐 **Live Demo**: [euxhenjonex.com](https://euxhenjonex.com)

## 🎯 Project Highlights

This portfolio demonstrates:
- **AI Integration**: Custom GPT-4 powered chat assistant with personality and rate limiting
- **Modern Architecture**: Next.js 15 App Router, TypeScript, Server Components
- **Performance First**: Lighthouse scores 95+ on all metrics
- **Production Ready**: Deployed on Vercel with CI/CD pipeline
- **Clean Code**: Type-safe, component-based architecture with best practices

## 🚀 Key Features

- **AI Chat Assistant**: Interactive AI powered by OpenAI GPT-4o-mini with custom personality
- **Responsive Design**: Optimized for mobile, tablet, and desktop experiences
- **Dark Theme**: Premium dark design system with green accent colors
- **Smooth Animations**: Fluid animations using Framer Motion
- **SEO Optimized**: Full meta tags, Open Graph, and structured data
- **Type Safety**: 100% TypeScript coverage
- **Modern UI**: Custom components built with Tailwind CSS and shadcn/ui

## 📦 Tech Stack

- **Framework**: Next.js 15 (App Router) with React Server Components
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 3 + CSS Variables
- **Animations**: Framer Motion
- **UI Components**: shadcn/ui + Lucide React
- **AI**: OpenAI GPT-4o-mini API
- **Deployment**: Vercel
- **Performance**: Image optimization, lazy loading, code splitting

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/euxhenjonex/portfolio-euxhenjo.git
cd portfolio-euxhenjo
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```
Then edit `.env.local` and add your OpenAI API key.

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📝 Customization

### Personal Information

Edit `lib/data.ts` to update your personal information, projects, tech stack, and social links:

```typescript
export const personalInfo = {
  name: "Your Name",
  title: "Your Title",
  bio: "Your bio...",
  // ...
};
```

### Colors and Theme

Modify the color scheme in `tailwind.config.ts` and `app/globals.css`:

```css
:root {
  --primary: 220 90% 56%;  /* Blue */
  --secondary: 210 40% 96%; /* Light gray */
  /* ... */
}
```

### Add Your Avatar

Replace the placeholder in `components/sections/HeroSection.tsx` with your actual image:

```tsx
<Image
  src="/images/avatar/your-photo.jpg"
  alt="Your Name"
  width={128}
  height={128}
  className="rounded-full"
/>
```

### Tech Stack Icons

Replace placeholder icons in `components/sections/AboutSection.tsx` with actual SVG logos from your preferred icon library or use services like:
- [Simple Icons](https://simpleicons.org/)
- [DevIcon](https://devicon.dev/)
- [Skill Icons](https://skillicons.dev/)

### Projects

Add your project images to `public/images/projects/` and update the project data in `lib/data.ts`.

### Resume

Replace `public/resume.pdf` with your actual resume PDF.

## 🎨 Sections

1. **Hero Section**: Introduction with animated keywords
2. **About Section**: Bio and tech stack showcase
3. **Projects Section**: Featured project + project grid
4. **Contact Section**: Contact information and CTA

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🚀 Deployment

This project is deployed on Vercel with automatic CI/CD from the main branch.

### Deploy Your Own

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/euxhenjonex/portfolio-euxhenjo)

1. Push your code to GitHub
2. Import your repository in [Vercel](https://vercel.com)
3. Add your `OPENAI_API_KEY` in the environment variables
4. Deploy with one click

## 📊 Performance

- **Lighthouse Score**: 95+ across all metrics
- **First Contentful Paint**: < 1s
- **Time to Interactive**: < 2s
- **Fully Responsive**: Mobile-first design
- **Accessibility**: WCAG 2.2 AA compliant

## 🎨 Design Philosophy

- **Minimalism**: Clean, focused content without distractions
- **Dark Premium**: Professional dark theme with green accents
- **Typography**: Carefully chosen font hierarchy for readability
- **Animations**: Subtle, purposeful animations that enhance UX
- **Accessibility**: High contrast ratios, semantic HTML, keyboard navigation

## 📝 Project Structure

```
portfolio-euxhenjo/
├── app/                    # Next.js App Router
│   ├── api/               # API routes (AI chat)
│   ├── layout.tsx         # Root layout with metadata
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── sections/         # Page sections (Hero, About, etc.)
│   └── ui/               # Reusable UI components
├── lib/                  # Utilities and data
│   ├── data.ts          # Portfolio content
│   └── utils.ts         # Helper functions
└── public/              # Static assets
```

## 🤝 Contributing

This is a personal portfolio project, but feel free to fork it and customize it for your own use!

If you find bugs or have suggestions, please open an issue.

## 📄 License

MIT License - feel free to use this template for your own portfolio!

## 👨‍💻 Author

**Euxhenjo Nex**
- Website: [euxhenjonex.com](https://euxhenjonex.com)
- GitHub: [@euxhenjonex](https://github.com/euxhenjonex)
- LinkedIn: [Euxhenjo Nexhipi](https://www.linkedin.com/in/euxhenjonex)

---

⭐ If you like this project, give it a star on GitHub!
