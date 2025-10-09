# Euxhenjo Nex - Portfolio Website

A modern, minimalist portfolio website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Dark Mode**: Toggle between light and dark themes
- **Smooth Animations**: Beautiful animations powered by Framer Motion
- **SEO Optimized**: Built-in SEO best practices with Next.js
- **Modern Stack**: Next.js 15, TypeScript, Tailwind CSS
- **Component Library**: Custom UI components based on shadcn/ui
- **Performance**: Optimized for Core Web Vitals

## 📦 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended)

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository or navigate to the project folder:
```bash
cd portfolio-euxhenjo
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

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

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository in [Vercel](https://vercel.com)
3. Deploy with one click

### Other Platforms

Build the production bundle:
```bash
npm run build
```

Start the production server:
```bash
npm start
```

## 📄 License

MIT License - feel free to use this template for your own portfolio!

## 🤝 Credits

Design inspired by modern portfolio trends and clean, minimal aesthetics.
Built with love by Euxhenjo Nex.

---

**Need help?** Feel free to open an issue or reach out!
