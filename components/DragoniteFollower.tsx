"use client";

import { useEffect, useRef } from "react";
import styles from "./DragoniteFollower.module.css";

type DragoniteFollowerProps = {
  /** Rendered size of the sprite in px (square). Default 48. */
  size?: number;
  /** Follow smoothing 0–1. Lower = more lag/floaty. Default 0.12. */
  ease?: number;
  /** Path to the DARK-mode 2-frame sprite sheet in /public. Default "/dragonite-sheet.png". */
  sprite?: string;
  /** Path to the LIGHT-mode 2-frame sprite sheet in /public. Default "/dragonite-sheet-light.png". */
  spriteLight?: string;
  /** Extra px offset so the dragon trails behind the cursor instead of sitting on it. Default 34. */
  trail?: number;
};

/**
 * DragoniteFollower
 * A lightweight, dependency-free cursor follower inspired by the classic
 * "oneko" desktop pet. Uses a single requestAnimationFrame loop with linear
 * interpolation (lerp) for buttery-smooth lag, a 2-frame wing-flap sprite, and
 * horizontal flipping based on travel direction.
 *
 * - Auto-disabled on touch/coarse-pointer devices and for prefers-reduced-motion.
 * - Theme-aware: swaps to the light sprite when <html data-theme="light">.
 * - CSS-only delight: idle sit/sleep pose + click hop (see DragoniteFollower.module.css).
 */
export default function DragoniteFollower({
  size = 48,
  ease = 0.12,
  sprite = "/dragonite-sheet.png",
  spriteLight = "/dragonite-sheet-light.png",
  trail = 34,
}: DragoniteFollowerProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Bail out where a cursor follower makes no sense.
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (coarse || reduced) return;

    const half = size / 2;
    // Start off-screen-ish at viewport centre.
    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let targetX = x;
    let targetY = y;
    let facing = 1; // 1 = facing right, -1 = facing left
    let frame = 0; // 0 or 1 → which wing pose
    let flapAccumulator = 0;
    let lastTime = performance.now();
    let raf = 0;

    // Theme: pick sprite by <html data-theme>. Falls back to dark.
    const applyTheme = () => {
      const theme = document.documentElement.getAttribute("data-theme");
      el.style.backgroundImage = `url(${theme === "light" ? spriteLight : sprite})`;
    };
    applyTheme();
    // React to theme toggles (e.g. a light-mode switch) without a reload.
    const themeObserver = new MutationObserver(applyTheme);
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    // Idle detection: if the cursor hasn't moved for a while, sit/sleep.
    let idleTimer = 0;
    const goIdle = () => el.classList.add(styles.idle);
    const wake = () => {
      el.classList.remove(styles.idle);
      window.clearTimeout(idleTimer);
      idleTimer = window.setTimeout(goIdle, 3000);
    };

    // Click reaction: a quick happy hop, composed into the JS transform so it
    // doesn't fight the per-frame follow transform (CSS transform animations would).
    let hopStart = -1;
    const onDown = () => {
      hopStart = performance.now();
    };

    const onMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      wake();
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mousedown", onDown, { passive: true });
    wake();

    const tick = (now: number) => {
      const dt = Math.min(now - lastTime, 48); // clamp for tab-switch jumps
      lastTime = now;

      const dx = targetX - x;
      const dy = targetY - y;
      const dist = Math.hypot(dx, dy);

      // Ease toward the cursor (frame-rate independent).
      const t = 1 - Math.pow(1 - ease, dt / 16.67);
      x += dx * t;
      y += dy * t;

      // Flip only past a small deadzone to avoid twitching when hovering.
      if (dx > 6) facing = 1;
      else if (dx < -6) facing = -1;

      // Wing flap speed scales with travel speed (always flaps a little to "hover").
      const flapInterval = dist > 4 ? 90 : 320;
      flapAccumulator += dt;
      if (flapAccumulator >= flapInterval) {
        frame = frame === 0 ? 1 : 0;
        flapAccumulator = 0;
      }

      // Gentle vertical bob for a floaty, flying feel.
      const bob = Math.sin(now / 300) * 2;

      // Quick hop on click (parabolic, ~340ms), composed into the follow transform.
      let hop = 0;
      if (hopStart >= 0) {
        const ht = now - hopStart;
        if (ht < 340) hop = -Math.sin((ht / 340) * Math.PI) * 16;
        else hopStart = -1;
      }

      // Park the sprite behind the cursor along the travel vector (farther now).
      let px = x;
      let py = y;
      if (dist > 0.001) {
        px -= (dx / dist) * trail;
        py -= (dy / dist) * trail;
      }

      el.style.transform =
        `translate3d(${px - half}px, ${py - half + bob - hop}px, 0) scaleX(${facing})`;
      el.style.backgroundPositionX = frame === 0 ? "0%" : "100%";

      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      themeObserver.disconnect();
      window.clearTimeout(idleTimer);
      cancelAnimationFrame(raf);
    };
  }, [size, ease, trail, sprite, spriteLight]);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className={styles.dragonite}
      data-testid="dragonite-follower"
      style={{
        width: size,
        height: size,
        backgroundImage: `url(${sprite})`,
      }}
    />
  );
}
