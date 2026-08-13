# Dragonite Cursor Follower — for `himanshu_portfolio`

A lightweight, dependency-free cursor follower inspired by the classic **oneko**
desktop pet. A pixel-art flying dragon trails your cursor with a floaty lag, flips
to face its travel direction, flaps its wings, drifts to a sleep pose when idle, and
does a happy hop on click.

Built to match your stack: **Next.js (App Router) + React + TypeScript + CSS Modules**.
No new npm packages. One `requestAnimationFrame` loop, `transform`-only animation
(GPU-friendly, never janky), auto-disabled on touch devices and for
`prefers-reduced-motion`.

## Files
```
components/DragoniteFollower.tsx          # the component (default export)
components/DragoniteFollower.module.css   # its styles (idle "z" pose)
public/dragonite-sheet.png                # DARK-mode 2-frame sprite (wings up | wings down), transparent
public/dragonite-sheet-light.png          # LIGHT-mode 2-frame sprite (orange/teal dragon), transparent
```

## Theme-aware sprite
The follower reads `<html data-theme>` and swaps the sheet:
- `data-theme="light"` → `/dragonite-sheet-light.png` (orange/teal dragon for light mode)
- anything else (incl. missing) → `/dragonite-sheet.png` (the mint-green dark-mode creature)

A `MutationObserver` on `<html data-theme>` swaps the sprite live when you toggle a
light-mode switch, no reload needed.

## Install (3 steps)
1. Copy `DragoniteFollower.tsx` and `DragoniteFollower.module.css` into `components/`.
2. Copy `dragonite-sheet.png` AND `dragonite-sheet-light.png` into `public/`.
3. Render it once, globally, in your root layout so it lives on the single page:

```tsx
// app/layout.tsx
import DragoniteFollower from "@/components/DragoniteFollower";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <DragoniteFollower />
      </body>
    </html>
  );
}
```

> NOTE (this repo): single-page app, already wired into `app/page.tsx` at top of `<main>`.

## Props (all optional)
| prop         | default                      | description                                  |
|--------------|------------------------------|----------------------------------------------|
| `size`       | `48`                         | rendered sprite size in px                   |
| `ease`       | `0.12`                       | follow smoothing 0–1 (lower = floatier lag)  |
| `trail`      | `34`                         | px it parks behind the cursor (kept well clear of it) |
| `sprite`     | `/dragonite-sheet.png`       | DARK-mode sheet path in `public/`            |
| `spriteLight`| `/dragonite-sheet-light.png` | LIGHT-mode sheet path in `public/`          |

```tsx
<DragoniteFollower size={56} ease={0.1} trail={40} />
```

## Delight (no extra frames needed)
- **Idle sit/sleep**: after the cursor is still ~3s, adds `.idle` → sleepy "z" + calm tint.
- **Click hop**: on `mousedown`, a quick parabolic hop composed into the follow transform.

## Notes
- Both sprites are original/chroma-keyed pixel art (not shipped as official game assets), safe to use.
- Sits at `z-index: 9999` with `pointer-events: none`, never blocks clicks.
- Pairs with the existing `cursor-glow` element and the "Pokémon Collector" vibe.
- The light sheet was made by chroma-keying the black background of the provided
  `dragonite-png.png` (128×64, 2 frames) to transparent.
