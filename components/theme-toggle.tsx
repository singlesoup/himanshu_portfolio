"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

const STORAGE_KEY = "hn-theme";

export function ThemeToggle() {
  // null = not yet mounted (avoid hydration mismatch); "" = dark, "light" = light
  const [theme, setTheme] = useState<string | null>(null);

  useEffect(() => {
    const current = document.documentElement.getAttribute("data-theme") || "";
    setTheme(current);
  }, []);

  const toggle = () => {
    const next = theme === "light" ? "" : "light";
    const root = document.documentElement;
    if (next) root.setAttribute("data-theme", next);
    else root.removeAttribute("data-theme");
    try { localStorage.setItem(STORAGE_KEY, next); } catch {}
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", next === "light" ? "#f6f5ef" : "#0C0E09");
    setTheme(next);
  };

  // Render a stable placeholder until mounted to avoid hydration mismatch.
  if (theme === null) {
    return (
      <button type="button" className="theme-toggle" aria-label="Toggle color theme" disabled>
        <Moon size={15} aria-hidden="true" />
      </button>
    );
  }

  const isLight = theme === "light";
  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggle}
      aria-label={isLight ? "Switch to dark mode" : "Switch to light mode"}
      aria-pressed={isLight}
      title={isLight ? "Switch to dark" : "Switch to light"}
    >
      {isLight ? <Moon size={15} aria-hidden="true" /> : <Sun size={15} aria-hidden="true" />}
    </button>
  );
}
