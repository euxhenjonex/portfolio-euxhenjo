# Portfolio Setup Guide

## 🎉 Your Portfolio is Ready!

The portfolio has been successfully built and is running at:
- **Local**: http://localhost:3000
- **Network**: http://192.168.1.50:3000

## 📁 Project Structure

```
portfolio-euxhenjo/
├── app/
│   ├── layout.tsx           # Root layout with SEO metadata
│   ├── page.tsx             # Home page
│   └── globals.css          # Global styles
├── components/
│   ├── ui/                  # Reusable UI components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   └── badge.tsx
│   ├── layout/              # Layout components
│   │   ├── Header.tsx       # Navigation with dark mode
│   │   ├── Footer.tsx
│   │   └── Container.tsx
│   └── sections/            # Page sections
│       ├── HeroSection.tsx
│       ├── AboutSection.tsx
│       ├── ProjectsSection.tsx
│       └── ContactSection.tsx
├── lib/
│   ├── utils.ts            # Utility functions
│   └── data.ts             # Content data
└── public/
    ├── images/             # Images folder
    └── resume.pdf          # Your resume
```

## ✅ What's Included

### Features
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Dark mode toggle
- ✅ Smooth animations (Framer Motion)
- ✅ SEO optimized
- ✅ TypeScript
- ✅ Tailwind CSS
- ✅ Modern UI components

### Sections
1. **Hero Section**: Introduction with animated keywords
2. **About Section**: Bio + tech stack showcase
3. **Projects Section**: Featured project + project grid
4. **Contact Section**: Contact information

## 🎨 Customization Checklist

### 1. Update Personal Information
Edit `lib/data.ts`:
- [ ] Update `personalInfo` (name, title, bio, email, etc.)
- [ ] Update `socialLinks` (GitHub, LinkedIn, Twitter)
- [ ] Update `techStack` with your technologies
- [ ] Update `projects` with your projects
- [ ] Update `keywords` for the animated text

### 2. Add Your Avatar/Photo
Option 1: Use an image
- Add your photo to `public/images/avatar/`
- Update `HeroSection.tsx` to use `<Image>` instead of placeholder

Option 2: Keep the initials
- The placeholder shows "EN" by default
- Change it to your initials in `HeroSection.tsx`

### 3. Replace Resume
- Replace `public/resume.pdf` with your actual resume PDF

### 4. Add Project Images
- Add project screenshots to `public/images/projects/`
- Update image paths in `lib/data.ts`

### 5. Add Tech Stack Icons
Option 1: Use actual SVG logos
- Download logos from [Simple Icons](https://simpleicons.org/)
- Place in `public/images/tech/`
- Update `AboutSection.tsx` to use images

Option 2: Use icon libraries
- Install: `npm install @iconify/react`
- Use tech icons from Iconify

### 6. Customize Colors (Optional)
Edit `app/globals.css` CSS variables:
```css
:root {
  --primary: 220 90% 56%;  /* Change this for different primary color */
}
```

### 7. Update Meta Tags
Edit `app/layout.tsx`:
- Update `openGraph` URL
- Update Twitter handle
- Add custom OG image

## 🚀 Commands

```bash
# Development
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Type checking (lint)
npm run lint
```

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
   git push -u origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Select your GitHub repository
   - Click "Deploy"
   - Done! Your site will be live at `your-name.vercel.app`

### Deploy to Netlify

1. Push to GitHub (same as above)
2. Go to [netlify.com](https://netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Select your repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
6. Deploy!

## 🛠️ Troubleshooting

### Build fails
- Run `npm install` to reinstall dependencies
- Delete `.next` folder and rebuild: `rm -rf .next && npm run build`

### Styles not loading
- Make sure Tailwind CSS is properly configured
- Check `tailwind.config.ts` includes all content paths

### Dark mode not working
- Clear browser localStorage
- Check that `Header.tsx` dark mode toggle is working

## 📚 Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev/)

## 🎯 Next Steps

1. **Content**: Update all personal information and projects
2. **Images**: Add your photos and project screenshots
3. **Resume**: Replace with your actual resume PDF
4. **Test**: Check on mobile, tablet, and desktop
5. **Deploy**: Push to GitHub and deploy on Vercel
6. **Domain**: (Optional) Add custom domain
7. **Analytics**: (Optional) Add Google Analytics or Vercel Analytics

---

Need help? Check the [README.md](README.md) or open an issue!
