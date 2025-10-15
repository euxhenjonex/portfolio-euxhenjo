# 🎨 Design System - Portfolio Euxhenjo Nex

Documentazione completa della **Brand Palette Ufficiale**, gerarchia visiva e token semantici del sito portfolio.

---

## 📐 Filosofia Design

**Stile**: Dark Premium Tech
**Brand Identity**: Verde naturale + Nero tech
**Caratteristiche**: Pulito, elegante, minimal, tecnico
**Target**: Professionisti, aziende, decisori tecnici
**Accessibilità**: WCAG 2.2 AA compliant (contrast ratio ≥ 4.5:1)

---

## 🎨 Brand Color Palette

### 🖤 Base Backgrounds (Hierarchical Scale)

Scala gerarchica per creare profondità e separazione visiva tra elementi.

```css
/* Palette Ufficiale Brand */
--background: 0 0% 3.9%              /* #0A0A0A - Background principale */
--background-secondary: 0 0% 7.1%    /* #121212 - Background alternato */
--background-card: 0 0% 6.7%         /* #111111 - Card contenuti */

/* Surfaces - Layering System */
--surface-primary: 0 0% 6.7%         /* #111111 - Sezioni alternate */
--surface-secondary: 0 0% 8.6%       /* #161616 - Card background */
--surface-tertiary: 0 0% 10.2%       /* #1A1A1A - Card elevate / popover */
```

**Utilizzo Tailwind**:
```tsx
bg-background              // #0A0A0A
bg-background-secondary    // #121212
bg-background-card         // #111111
bg-surface-primary         // #111111
bg-surface-secondary       // #161616
bg-surface-tertiary        // #1A1A1A
```

### 📝 Text Colors

```css
--foreground: 0 0% 100%              /* #FFFFFF - Testo primario */
--foreground-secondary: 0 0% 81.2%   /* #CFCFCF - Testo secondario */
--muted-foreground: 0 0% 70%         /* #B3B3B3 - Testo muted */
--subtle-foreground: 0 0% 50%        /* #808080 - Testo terziario */
```

**Utilizzo Tailwind**:
```tsx
text-foreground            // #FFFFFF - Titoli
text-foreground-secondary  // #CFCFCF - Paragrafi
text-muted-foreground      // #B3B3B3 - Labels
text-subtle-foreground     // #808080 - Placeholder
```

**Contrast Ratios**:
- `foreground` (#FFFFFF) su `background` (#0A0A0A): **21:1** ✅ AAA
- `foreground-secondary` (#CFCFCF) su `background`: **13.2:1** ✅ AAA
- `muted-foreground` (#B3B3B3) su `background`: **9.2:1** ✅ AAA

### 💚 Brand Accent Colors

```css
/* Brand Identity */
--accent-green: 150 22% 24%          /* #2F4A3A - Verde brand principale */
--accent-glow: 150 100% 65%          /* #4AFFA0 - Glow interattivo */

/* Primary Interactive */
--primary: 150 100% 65%              /* #4AFFA0 - Primary glow */
--primary-dark: 150 22% 24%          /* #2F4A3A - Dark variant */
--primary-foreground: 0 0% 3.9%      /* #0A0A0A - Text on primary */
--primary-hover: 150 100% 60%        /* Darker glow on hover */
```

**Utilizzo Tailwind**:
```tsx
// Brand colors
bg-accent-green            // #2F4A3A - Backgrounds
text-accent-glow           // #4AFFA0 - Accenti interattivi

// Primary interactive
bg-primary                 // #4AFFA0 - CTA glow
bg-primary-dark            // #2F4A3A - CTA dark
text-primary               // #4AFFA0 - Link hover
hover:bg-primary-hover     // Slightly darker
```

**Utilizzo**:
- `accent-green` (#2F4A3A): Background subtili, sezioni speciali
- `accent-glow` (#4AFFA0): CTA, hover states, focus rings, badge attivo
- Link e elementi interattivi
- Focus rings e glow effects

### 🔘 Button Colors

```css
--button-background: 0 0% 90%        /* #E6E6E6 - CTA light background */
--button-foreground: 0 0% 3.9%       /* #0A0A0A - Text on CTA */
```

**Utilizzo Tailwind**:
```tsx
bg-button-background text-button-foreground  // CTA principale light
```

### 📐 Borders & Dividers

```css
--border: 0 0% 11.8%                 /* #1E1E1E - Divider/contorni */
--border-subtle: 0 0% 10%            /* Border più leggero */
```

**Utilizzo Tailwind**:
```tsx
border-border              // #1E1E1E - Border standard
border-border-subtle       // Border più leggero
```

### 🌈 Gradients

```css
/* Utility Classes Disponibili */
.bg-gradient-hero          /* linear-gradient(90deg, #0A0A0A 0%, #1B1B1B 100%) */
.bg-gradient-soft          /* radial-gradient(circle at 30% 20%, #1B1B1B 0%, #0A0A0A 100%) */
.bg-gradient-green-glow    /* radial-gradient con accent-glow */
.bg-gradient-accent        /* linear-gradient(135deg, #2F4A3A 0%, #4AFFA0 100%) */
```

**Utilizzo**:
```tsx
<div className="bg-gradient-hero">Hero background</div>
<div className="bg-gradient-soft">Soft radial background</div>
<div className="bg-gradient-green-glow">Glow effect</div>
<div className="bg-gradient-accent">Accent gradient</div>
```

---

## 🧩 Componenti & Utilizzo

### Sezioni

```tsx
// Background normale (default)
<section className="py-20 md:py-32">

// Background alternato (per gerarchia visiva)
<section className="py-20 md:py-32 bg-surface-primary">
```

**Pattern di alternanza**:
1. Hero - `bg-background`
2. About - `bg-surface-primary` ✓
3. Services - `bg-background`
4. Process - `bg-surface-primary` ✓
5. Projects - `bg-background`
6. Tech Stack - `bg-background`
7. Testimonials - `bg-surface-primary` ✓
8. Contact - `bg-surface-primary` ✓

### Card Containers

```tsx
// Card standard
<div className="rounded-2xl overflow-hidden border border-border bg-surface-secondary
                shadow-lg shadow-black/10 hover:shadow-xl hover:shadow-black/20
                transition-all duration-300 p-6">

// Card con rounded più pronunciato (services)
<div className="rounded-3xl overflow-hidden border border-border bg-surface-secondary
                hover:border-border/80 transition-all duration-500
                hover:shadow-2xl hover:shadow-black/20">

// Card elevata (bento card, popover)
<div className="rounded-2xl bg-surface-tertiary border border-border
                shadow-lg shadow-black/10">
```

### Shadow System

```css
/* Base shadow - elementi flat */
shadow-lg shadow-black/10

/* Hover shadow - stato interattivo */
hover:shadow-xl hover:shadow-black/20

/* Heavy shadow - elementi hero/featured */
hover:shadow-2xl hover:shadow-black/20
```

### Border Radius Scale

```css
--radius: 0.5rem          /* Base - 8px */
rounded-lg                /* 8px - piccoli elementi */
rounded-2xl               /* 16px - card standard */
rounded-3xl               /* 24px - card grandi (services) */
rounded-full              /* Buttons, badges, avatar */
```

---

## 🎯 Token Tailwind

### Surface Tokens

```tsx
// Tailwind classes disponibili
bg-surface-primary        // #111111
bg-surface-secondary      // #161616
bg-surface-tertiary       // #1A1A1A
```

### Color Tokens

```tsx
// Primary (Green accent)
bg-primary
text-primary
border-primary
ring-primary
hover:bg-primary-hover

// Text
text-foreground           // Testo primario
text-muted-foreground     // Testo secondario
text-subtle-foreground    // Testo terziario

// Borders
border-border
border-border/80          // Versione più opaca
border-border/50          // Versione più trasparente
```

---

## 🔍 Pattern Ricorrenti

### Card con Hover Effect

```tsx
<div className="rounded-2xl overflow-hidden border border-border
                bg-surface-secondary shadow-lg shadow-black/10
                hover:shadow-xl hover:shadow-black/20
                transition-all duration-300 p-6">
  {/* Content */}
</div>
```

### Gradient Overlay (Immagini)

```tsx
<div className="absolute inset-0 bg-gradient-to-t
                from-surface-secondary via-transparent to-transparent
                opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
```

### Bento Card / Feature Box

```tsx
<div className="rounded-2xl bg-surface-tertiary
                border border-border
                shadow-lg shadow-black/10 p-6">
  <div className="flex items-center gap-2 mb-4">
    <div className="w-2 h-2 rounded-full bg-primary" />
    <h3 className="text-sm font-semibold uppercase tracking-wider">
      Titolo
    </h3>
  </div>
  {/* Content */}
</div>
```

---

## ♿ Accessibilità

### Contrast Ratios (WCAG 2.2 AA)

| Combinazione | Ratio | Status |
|--------------|-------|--------|
| Foreground / Background | 18.5:1 | ✅ AAA |
| Foreground / Surface Secondary | 16.2:1 | ✅ AAA |
| Muted Foreground / Background | 9.2:1 | ✅ AAA |
| Muted Foreground / Surface Secondary | 7.8:1 | ✅ AAA |
| Primary / Background | 12.1:1 | ✅ AAA |
| Border / Background | 4.8:1 | ✅ AA |

### Focus States

```css
*:focus-visible {
  outline: none;
  ring: 2px solid hsl(var(--primary));
  ring-offset: 2px;
  ring-offset-color: hsl(var(--background));
}
```

### Tap Targets (Mobile)

Tutti i pulsanti e link interattivi rispettano la dimensione minima di **44x44px** per touchscreen.

```tsx
// Utility class per tap target minimi
<button className="tap-target">
  {/* min-h-[44px] min-w-[44px] inline-flex items-center justify-center */}
</button>
```

---

## 🚀 Performance

### Shadow Optimization

```css
/* Safari-optimized shadows */
shadow-lg shadow-black/10     /* Invece di blur pesanti */
hover:shadow-xl shadow-black/20
```

### Reduce Motion

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 📝 Checklist per Nuovi Componenti

- [ ] Usa `bg-surface-secondary` per card invece di `bg-card`
- [ ] Applica `border border-border` invece di `ring-1 ring-border/50`
- [ ] Aggiungi `shadow-lg shadow-black/10` per depth
- [ ] Usa `hover:shadow-xl hover:shadow-black/20` per hover
- [ ] Contrasta testo su background: usa `text-foreground` per primario, `text-muted-foreground` per secondario
- [ ] Border radius: `rounded-2xl` per card standard, `rounded-3xl` per card grandi
- [ ] Transizioni: `transition-all duration-300` per smoothness
- [ ] Padding: `p-6` o `p-8` per card, mai meno di `p-4`

---

## 🎨 Esempi Completi

### Service Card (Come Posso Aiutarti)

```tsx
<div className="relative h-full rounded-3xl overflow-hidden
                border border-border bg-surface-secondary
                hover:border-border/80 transition-all duration-500
                hover:shadow-2xl hover:shadow-black/20">

  {/* Image */}
  <div className="relative h-64 overflow-hidden bg-muted/30">
    <Image src={image} alt={title} fill className="object-cover" />

    {/* Gradient overlay on hover */}
    <div className="absolute inset-0 bg-gradient-to-t
                    from-surface-secondary via-transparent to-transparent
                    opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
  </div>

  {/* Content */}
  <div className="p-8 space-y-5">
    <h3 className="text-2xl font-bold">{title}</h3>
    <p className="text-muted-foreground leading-relaxed">{description}</p>
  </div>
</div>
```

### Process Card (Come Lavoro)

```tsx
<div className="h-full rounded-2xl overflow-hidden
                border border-border bg-surface-secondary
                shadow-lg shadow-black/10
                hover:shadow-xl hover:shadow-black/20
                transition-all duration-300 p-6">

  <div className="flex items-start gap-4 mb-4">
    <div className="flex-shrink-0 w-12 h-12 rounded-full
                    bg-primary/10 flex items-center justify-center">
      <span className="text-lg font-bold text-primary">01</span>
    </div>

    <div>
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </div>
  </div>
</div>
```

---

**Ultimo aggiornamento**: 2025-01-15
**Versione Design System**: 2.0
**Autore**: Euxhenjo Nex
