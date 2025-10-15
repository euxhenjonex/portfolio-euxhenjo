# 🎨 Brand Palette - Euxhenjo Nex

Palette colori ufficiale del brand per sviluppatori e designer.

---

## 🖤 Backgrounds

```js
{
  background: {
    primary: "#0A0A0A",      // Sfondo principale
    secondary: "#121212",    // Sfondo alternato / sezioni
    card: "#111111",         // Card o box contenuti
  },
  surfaces: {
    primary: "#111111",      // Sezioni alternate
    secondary: "#161616",    // Card background
    tertiary: "#1A1A1A",     // Card elevate
  }
}
```

## 📝 Text

```js
{
  text: {
    primary: "#FFFFFF",      // Titoli e testi principali
    secondary: "#CFCFCF",    // Paragrafi e descrizioni
    muted: "#B3B3B3",        // Labels e testi secondari
    subtle: "#808080",       // Placeholder e terziario
  }
}
```

## 💚 Accent (Brand Identity)

```js
{
  accent: {
    green: "#2F4A3A",        // Verde brand principale
    glow: "#4AFFA0",         // Glow / interattività
  }
}
```

## 🔘 Interactive Elements

```js
{
  primary: {
    default: "#4AFFA0",      // Primary glow (interactive)
    dark: "#2F4A3A",         // Dark variant
    hover: "#3FE693",        // Hover state (60% lightness)
  },
  button: {
    background: "#E6E6E6",   // CTA principale (light)
    text: "#0A0A0A",         // Testo su CTA chiara
  }
}
```

## 📐 Borders

```js
{
  border: "#1E1E1E",         // Divider o contorni standard
  borderSubtle: "#1A1A1A",   // Border più leggero
}
```

## 🌈 Gradients

```js
{
  gradient: {
    hero: "linear-gradient(90deg, #0A0A0A 0%, #1B1B1B 100%)",
    soft: "radial-gradient(circle at 30% 20%, #1B1B1B 0%, #0A0A0A 100%)",
    greenGlow: "radial-gradient(circle at 50% 50%, rgba(74, 255, 160, 0.15) 0%, transparent 70%)",
    accent: "linear-gradient(135deg, #2F4A3A 0%, #4AFFA0 100%)"
  }
}
```

---

## 🎯 Quick Reference - Tailwind Classes

### Backgrounds
```tsx
bg-background              // #0A0A0A
bg-background-secondary    // #121212
bg-background-card         // #111111
bg-surface-primary         // #111111
bg-surface-secondary       // #161616
bg-surface-tertiary        // #1A1A1A
```

### Text
```tsx
text-foreground            // #FFFFFF
text-foreground-secondary  // #CFCFCF
text-muted-foreground      // #B3B3B3
text-subtle-foreground     // #808080
```

### Accents
```tsx
bg-accent-green            // #2F4A3A
text-accent-glow           // #4AFFA0
bg-primary                 // #4AFFA0
bg-primary-dark            // #2F4A3A
text-primary               // #4AFFA0
hover:bg-primary-hover     // #3FE693
```

### Borders
```tsx
border-border              // #1E1E1E
border-border-subtle       // Border più leggero
```

### Gradients
```tsx
bg-gradient-hero           // Linear gradient hero
bg-gradient-soft           // Radial gradient soft
bg-gradient-green-glow     // Green glow effect
bg-gradient-accent         // Accent gradient
```

### Glow Effects
```tsx
glow-primary               // Medium glow
glow-primary-sm            // Small glow
glow-primary-lg            // Large glow
text-glow-primary          // Text glow effect
```

---

## 🎨 CSS Variables (HSL Format)

Tutti i colori sono definiti in formato HSL per Tailwind:

```css
/* globals.css */
.dark {
  /* Backgrounds */
  --background: 0 0% 3.9%;              /* #0A0A0A */
  --background-secondary: 0 0% 7.1%;    /* #121212 */
  --background-card: 0 0% 6.7%;         /* #111111 */

  /* Text */
  --foreground: 0 0% 100%;              /* #FFFFFF */
  --foreground-secondary: 0 0% 81.2%;   /* #CFCFCF */

  /* Brand Accents */
  --accent-green: 150 22% 24%;          /* #2F4A3A */
  --accent-glow: 150 100% 65%;          /* #4AFFA0 */

  /* Primary Interactive */
  --primary: 150 100% 65%;              /* #4AFFA0 */
  --primary-dark: 150 22% 24%;          /* #2F4A3A */
  --primary-hover: 150 100% 60%;        /* #3FE693 */

  /* Buttons */
  --button-background: 0 0% 90%;        /* #E6E6E6 */
  --button-foreground: 0 0% 3.9%;       /* #0A0A0A */

  /* Borders */
  --border: 0 0% 11.8%;                 /* #1E1E1E */
}
```

---

## ♿ Accessibilità (WCAG 2.2)

Tutti i colori rispettano i requisiti di contrasto WCAG 2.2 AA:

| Combinazione | Ratio | Standard |
|--------------|-------|----------|
| #FFFFFF su #0A0A0A | 21:1 | ✅ AAA (7:1) |
| #CFCFCF su #0A0A0A | 13.2:1 | ✅ AAA |
| #B3B3B3 su #0A0A0A | 9.2:1 | ✅ AAA |
| #4AFFA0 su #0A0A0A | 14.8:1 | ✅ AAA |
| #2F4A3A su #0A0A0A | 3.8:1 | ⚠️ Decorativo |
| #1E1E1E su #0A0A0A | 1.8:1 | ⚠️ Border only |

---

## 📦 Export JSON

```json
{
  "brand": "Euxhenjo Nex",
  "version": "2.0",
  "colors": {
    "background": {
      "primary": "#0A0A0A",
      "secondary": "#121212",
      "card": "#111111"
    },
    "text": {
      "primary": "#FFFFFF",
      "secondary": "#CFCFCF",
      "muted": "#B3B3B3",
      "subtle": "#808080"
    },
    "accent": {
      "green": "#2F4A3A",
      "glow": "#4AFFA0"
    },
    "primary": {
      "default": "#4AFFA0",
      "dark": "#2F4A3A",
      "hover": "#3FE693"
    },
    "button": {
      "background": "#E6E6E6",
      "text": "#0A0A0A"
    },
    "border": {
      "default": "#1E1E1E",
      "subtle": "#1A1A1A"
    }
  },
  "gradients": {
    "hero": "linear-gradient(90deg, #0A0A0A 0%, #1B1B1B 100%)",
    "soft": "radial-gradient(circle at 30% 20%, #1B1B1B 0%, #0A0A0A 100%)",
    "greenGlow": "radial-gradient(circle at 50% 50%, rgba(74, 255, 160, 0.15) 0%, transparent 70%)",
    "accent": "linear-gradient(135deg, #2F4A3A 0%, #4AFFA0 100%)"
  }
}
```

---

**Ultimo aggiornamento**: 2025-01-15
**Versione Palette**: 2.0
**Autore**: Euxhenjo Nex
