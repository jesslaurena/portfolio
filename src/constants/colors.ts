// also stored in globals.css, update both when changing colors

export const colors = {
  // Primary colors
  primary: "#A1CCA5",
  primaryDark: "#709775",
  primaryLight: "#E2F1E4",

  // Background colors
  background: "#F4FBF5",

  // Text colors
  text: "#111D13",

  // Zinc colors (for UI elements)
  zinc: {
    50: "#FAFAFA",
    100: "#F4F4F5",
    200: "#E4E4E7",
    300: "#D4D4D8",
    400: "#A1A1AA",
    500: "#71717A",
    600: "#52525B",
    700: "#3F3F46",
    800: "#27272A",
    900: "#18181B",
  },
} as const;

// Export individual color values for easier destructuring
export const {
  primary,
  primaryDark,
  primaryLight,
  background,
  text,
  zinc,
} = colors;

