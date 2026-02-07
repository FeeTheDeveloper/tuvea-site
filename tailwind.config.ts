import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        uvea: {
          black: "#0B0B0D",
          charcoal: "#121216",
          gold: "#C5A255",
          white: "#F7F7F8",
          gray: "#A8A8B3",
          navy: "#0B1E3B",
          red: "#B22234",
        },
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "-apple-system", "sans-serif"],
        display: ["Cinzel", "Playfair Display", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
