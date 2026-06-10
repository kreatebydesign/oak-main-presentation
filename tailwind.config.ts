import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy:   "#1B2D42",
        harbor: "#122033",
        champ:  "#D5BE97",
        porc:   "#F7F2EC",
        cash:   "#E3DACE",
        taupe:  "#8D7A67",
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Didot", "Book Antiqua", "Palatino Linotype", "Georgia", "serif"],
        sans:  ["var(--font-montserrat)", "Helvetica Neue", "Helvetica", "Arial", "sans-serif"],
      },
      letterSpacing: {
        ultra:  "0.28em",
        wide:   "0.22em",
        wider:  "0.18em",
        widest: "0.32em",
      },
      animation: {
        "fade-up": "fadeUp 1s ease forwards",
        "fade-in": "fadeIn 1.2s ease forwards",
      },
      keyframes: {
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(32px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
