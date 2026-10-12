# Frontend Architecture Specification

## 1. Overview & Stack

- **Framework**: React 19 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Design Paradigm**: Mobile-first, responsive, dark-mode-first aesthetic with rich glowing accents, subtle micro-interactions, and glassmorphism cards.

---

## 2. Design Tokens & Theme Specification

### 2.1 Philippine Flag Colors Palette (Primary)
- **Aesthetic**: Regal Philippine Patriotic Modernism (Royal Blue, Golden Sun, Scarlet Crimson, Midnight Navy)
- **Canvas / Background**: `#060D1E` (Deep Midnight Philippine Navy)
- **Atmospheric Aura**:
  - Center Radiant Sun Halo: Golden Yellow (`#FCD116` / `rgba(252, 209, 22, 0.42)`)
  - Top Ambient Glow: Philippine Royal Blue (`#0038A8` / `rgba(0, 56, 168, 0.35)`)
  - Bottom Ambient Glow: Philippine Scarlet Crimson (`#CE1126` / `rgba(206, 17, 38, 0.25)`)
  - Texture: Celestial Starlight Matrix (`rgba(255, 255, 255, 0.08)`)
- **Typography & Accents**:
  - Hero Headline: `#FFFFFF` (Crisp Luminous White, `font-normal`, single line)
  - Body Copy: `#CBD5E1` (Slate 300)
  - Domain Highlight: `#FCD116` (Golden Sun Yellow with ambient gold glow)
  - Selection: `selection:bg-[#0038A8] selection:text-white`



---

### 2.2 Typography

#### Font Stacks
- **Display / Primary Titles**: `'Orbitron'`, `'Rajdhani'`, `'Chakra Petch'`, sans-serif (Geometric, wide, squarish letterforms)
- **Body & HUD Readouts**: `'Rajdhani'`, `'Space Grotesk'`, `'Inter'`, sans-serif
- **Code & Metadata**: `'JetBrains Mono'`, `'Fira Code'`, monospace

#### Scale & Hierarchy
- **`Display / Hero Title`**:
  - Size: `clamp(2.75rem, 5vw + 1rem, 5.5rem)` (44px – 88px)
  - Weight: `800` (ExtraBold) to `900` (Black)
  - Letter Spacing: `0.18em` to `0.25em` (Wide tracking, uppercase)
  - Line Height: `1.05` to `1.15`

- **`H2 (Section Header / Panel Track)`**:
  - Size: `2rem` to `2.75rem` (32px – 44px)
  - Weight: `700` (Bold)
  - Letter Spacing: `0.12em` (Uppercase)
  - Line Height: `1.2`

- **`H3 (Speaker Title / Sub-card)`**:
  - Size: `1.25rem` to `1.5rem` (20px – 24px)
  - Weight: `600` (SemiBold)
  - Letter Spacing: `0.08em` (Uppercase)

- **`Body / Meta Specs (Dates, Venue, Captions)`**:
  - Size: `1rem` to `1.125rem` (16px – 18px)
  - Weight: `500` (Medium)
  - Letter Spacing: `0.05em` (Uppercase or mixed)
  - Line Height: `1.6`

- **`HUD Badge / CTA Button`**:
  - Size: `0.75rem` to `0.875rem` (12px – 14px)
  - Weight: `700` (Bold)
  - Letter Spacing: `0.15em` (Strict uppercase)

---

### 2.3 Visual Effects, Shadows & Textures

#### Corner Geometries
- `--radius-hud-corner`: `0px` to `2px` (Hard cybernetic cut-off)
- `--radius-pill-button`: `9999px` (Contained framing buttons for CTAs)

#### Neon Glows & Shadows
- `--shadow-neon-cyan`: `0 0 15px rgba(0, 229, 255, 0.45), 0 0 30px rgba(0, 229, 255, 0.20)`
- `--shadow-glow-crimson`: `0 0 12px rgba(225, 29, 72, 0.50)`
- `--shadow-text-contrast`: `0 2px 10px rgba(0, 0, 0, 0.95)`

---

## 3. Layout Hierarchy (Current)

The Coming Soon landing page is structured into distinct, vertically stacked sections contained within an ambient background container:


## 4. Layout Hierarchy (Future)
```
┌────────────────────────────────────────────────────────┐
│ App Header / Brand Badge                              │
├────────────────────────────────────────────────────────┤
│ Hero Section                                           │
│   - Category / Status Pill Badge ("Coming Soon / Q2")  │
│   - Main Value Headline (Gradient text)                │
│   - Value Pitch & Subtitle                             │
│   - Waitlist Form (Email capture + CTA button)         │
│   - Social Proof / Counter Badge ("Join 1,200+ waiting")│
├────────────────────────────────────────────────────────┤
│ Value Pillars / Key Highlights Grid                    │
│   - Feature Card 1 (Speed & Modern DX)                 │
│   - Feature Card 2 (Enterprise Reliability)            │
│   - Feature Card 3 (Automated Workflows)               │
├────────────────────────────────────────────────────────┤
│ Footer & Legal                                         │
│   - Copyright, Social Links, Privacy Note              │
└────────────────────────────────────────────────────────┘
```

---

## 5. Component Architecture

```
src/
├── components/
│   ├── layout/
│   │   ├── Header.tsx           # Logo and social links
│   │   ├── Footer.tsx           # Copyright and meta links
│   │   └── BackgroundGlow.tsx   # Ambient gradient background meshes
│   ├── hero/
│   │   ├── HeroSection.tsx      # Main wrapper for hero narrative
│   │   ├── StatusBadge.tsx      # Pre-launch status badge
│   │   └── SocialProof.tsx      # Member count and early-bird avatars
│   ├── waitlist/
│   │   ├── WaitlistForm.tsx     # Controlled email input + submit trigger
│   │   ├── FeedbackNotice.tsx   # Inline error/success messaging
│   │   └── SuccessModal.tsx     # Optional post-join confirmation overlay
│   └── features/
│       ├── FeatureGrid.tsx      # 3-column value proposition container
│       └── FeatureCard.tsx      # Glassmorphic card component
├── styles/
│   └── index.css                # Tailwind directives and custom utility classes
└── App.tsx                      # Root composition layout
```

---

## 5. Tailwind Configuration Strategy

- Use Tailwind CSS v4 or v3 with theme extensions for custom ambient animation keyframes:
  - `float`: Slow continuous vertical translation
  - `pulse-slow`: Subtle ambient opacity pulsation
  - `shimmer`: Linear gradient travel across borders
- Glassmorphic helper classes for consistent backdrop blur and border alpha values.

---

## 6. Responsive Guidelines

- **Mobile (<640px)**: Single column stack, full-width inputs, touch-friendly tap targets (minimum 44px height).
- **Tablet (640px - 1024px)**: Constrained max-width layout, centered hero text, two-column feature highlights.
- **Desktop (>1024px)**: Expanded container (`max-w-5xl`), horizontal waitlist input bar with integrated CTA button, three-column feature cards.
