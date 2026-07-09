import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Luxury-minimal neutral palette
        sand: {
          50: "#faf8f5",
          100: "#f3efe9",
          200: "#e7ded2",
          300: "#d6c8b6",
        },
        ink: {
          700: "#3a352f",
          800: "#272320",
          900: "#181614",
        },
        accent: {
          // muted warm gold
          DEFAULT: "#a98c5f",
          dark: "#8a7049",
        },
        // Warm diary-scrapbook paper tones
        paper: {
          50: "#faf5e9",
          100: "#f4ebd8",
          200: "#e9dcc2",
        },
        // Vintage washi-tape / sticker accent colors
        washi: {
          rose: "#d99a9a",
          sage: "#a3b58c",
          sky: "#93b7cc",
          gold: "#e6c06a",
          plum: "#c0a0cf",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        hand: ["var(--font-hand)", "Segoe Script", "Bradley Hand", "cursive"],
      },
      letterSpacing: {
        widest2: "0.25em",
      },
    },
  },
  plugins: [],
};

export default config;
