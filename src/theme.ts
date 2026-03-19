export const colors = {
  bg: "#0a0a0f",
  surface: "rgba(18, 18, 26, 0.7)",
  surfaceLight: "rgba(18, 18, 26, 0.6)",
  text: "#e0e0e8",
  textMuted: "#8888a0",
  neonCyan: "#00f0ff",
  neonMagenta: "#ff00e5",
  neonPurple: "#b44dff",
  error: "#ff4466",
  white04: "rgba(255, 255, 255, 0.04)",
  white06: "rgba(255, 255, 255, 0.06)",
  white10: "rgba(255, 255, 255, 0.1)",
} as const;

export const gradients = {
  title: `linear-gradient(135deg, ${colors.neonCyan} 0%, ${colors.neonCyan} 33%, ${colors.neonPurple} 33%, ${colors.neonPurple} 66%, ${colors.neonMagenta} 66%, ${colors.neonMagenta} 100%)`,
  headingBold: `linear-gradient(135deg, ${colors.text} 0%, ${colors.text} 50%, ${colors.neonCyan} 50%, ${colors.neonCyan} 100%)`,
} as const;

export const fonts = {
  heading: "'Space Grotesk', system-ui, sans-serif",
  body: "'Outfit', system-ui, sans-serif",
  mono: "'JetBrains Mono', monospace",
} as const;

export const glows = {
  cyanBorder: `0 0 0 3px ${colors.neonCyan}`,
} as const;
