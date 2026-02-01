/**
 * Color utility functions for automatic color calculations
 * Provides functions to calculate contrasting text colors, lighter/darker shades,
 * and apply dynamic theming based on primary/secondary colors
 */

/**
 * Converts HEX color to RGB values
 */
export function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}

/**
 * Calculates relative luminance of a color (WCAG 2.0 formula)
 * Returns a value between 0 (darkest) and 1 (lightest)
 */
export function getLuminance(r: number, g: number, b: number): number {
  const [rs, gs, bs] = [r, g, b].map((c) => {
    const val = c / 255;
    return val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
}

/**
 * Calculates contrast ratio between two colors (WCAG 2.0)
 */
export function getContrastRatio(lum1: number, lum2: number): number {
  const lighter = Math.max(lum1, lum2);
  const darker = Math.min(lum1, lum2);
  return (lighter + 0.05) / (darker + 0.05);
}

/**
 * Determines if a color is "light" (true) or "dark" (false)
 * Based on WCAG 2.0 relative luminance threshold
 */
export function isLightColor(hex: string): boolean {
  const rgb = hexToRgb(hex);
  if (!rgb) return true; // Default to light if invalid
  
  const luminance = getLuminance(rgb.r, rgb.g, rgb.b);
  return luminance > 0.5;
}

/**
 * Returns the best contrasting text color (white or black) for a given background
 * Ensures WCAG AA compliance (contrast ratio >= 4.5:1 for normal text)
 */
export function getContrastingTextColor(bgHex: string): string {
  const rgb = hexToRgb(bgHex);
  if (!rgb) return "#000000";
  
  const bgLuminance = getLuminance(rgb.r, rgb.g, rgb.b);
  const whiteLuminance = 1; // White has luminance of 1
  const blackLuminance = 0; // Black has luminance of 0
  
  const whiteContrast = getContrastRatio(bgLuminance, whiteLuminance);
  const blackContrast = getContrastRatio(bgLuminance, blackLuminance);
  
  // Return white text if it has better contrast, otherwise black
  return whiteContrast > blackContrast ? "#ffffff" : "#000000";
}

/**
 * Lightens a HEX color by a percentage (0-100)
 */
export function lightenColor(hex: string, percent: number): string {
  const rgb = hexToRgb(hex);
  if (!rgb) return hex;
  
  const amount = Math.round(2.55 * percent);
  const r = Math.min(255, rgb.r + amount);
  const g = Math.min(255, rgb.g + amount);
  const b = Math.min(255, rgb.b + amount);
  
  return `#${((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1)}`;
}

/**
 * Darkens a HEX color by a percentage (0-100)
 */
export function darkenColor(hex: string, percent: number): string {
  const rgb = hexToRgb(hex);
  if (!rgb) return hex;
  
  const amount = Math.round(2.55 * percent);
  const r = Math.max(0, rgb.r - amount);
  const g = Math.max(0, rgb.g - amount);
  const b = Math.max(0, rgb.b - amount);
  
  return `#${((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1)}`;
}

/**
 * Generates a complete color palette from a base color
 * Includes hover state, light background variant, and contrasting text color
 */
export interface ColorPalette {
  base: string;
  hover: string;
  light: string;
  dark: string;
  text: string;
  textOnLight: string;
}

export function generateColorPalette(baseColor: string): ColorPalette {
  const isLight = isLightColor(baseColor);
  
  return {
    base: baseColor,
    // Hover: slightly darker for light colors, slightly lighter for dark colors
    hover: isLight ? darkenColor(baseColor, 10) : lightenColor(baseColor, 10),
    // Light: very light version for backgrounds
    light: isLight ? lightenColor(baseColor, 40) : darkenColor(baseColor, 40),
    // Dark: darker version for dark mode or accents
    dark: isLight ? darkenColor(baseColor, 40) : lightenColor(baseColor, 40),
    // Text: contrasting color for text on base background
    text: getContrastingTextColor(baseColor),
    // Text on light: contrasting color for text on light background
    textOnLight: getContrastingTextColor(isLight ? lightenColor(baseColor, 40) : darkenColor(baseColor, 40)),
  };
}

/**
 * Applies theme colors to CSS custom properties
 * Call this function when you want to dynamically update the theme
 */
export function applyThemeColors(
  primaryColor: string,
  secondaryColor?: string,
  target: HTMLElement = document.documentElement
): void {
  const primaryPalette = generateColorPalette(primaryColor);
  
  // Set primary colors
  target.style.setProperty("--primary", primaryPalette.base);
  target.style.setProperty("--primary-hover", primaryPalette.hover);
  target.style.setProperty("--primary-light", primaryPalette.light);
  target.style.setProperty("--primary-dark", primaryPalette.dark);
  target.style.setProperty("--primary-text", primaryPalette.text);
  target.style.setProperty("--primary-text-on-light", primaryPalette.textOnLight);
  
  // Set secondary colors if provided
  if (secondaryColor) {
    const secondaryPalette = generateColorPalette(secondaryColor);
    target.style.setProperty("--secondary", secondaryPalette.base);
    target.style.setProperty("--secondary-hover", secondaryPalette.hover);
    target.style.setProperty("--secondary-light", secondaryPalette.light);
    target.style.setProperty("--secondary-dark", secondaryPalette.dark);
    target.style.setProperty("--secondary-text", secondaryPalette.text);
    target.style.setProperty("--secondary-text-on-light", secondaryPalette.textOnLight);
  }
}

/**
 * Hook for React applications to apply theme colors
 * Usage:
 * ```tsx
 * import { useEffect } from 'react';
 * import { applyThemeColors } from 'rharuow-ds/lib/color.utils';
 * 
 * function App() {
 *   useEffect(() => {
 *     applyThemeColors('#8b5cf6', '#ec4899');
 *   }, []);
 * }
 * ```
 */
