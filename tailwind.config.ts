import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0F0F0F",
        charcoal: "#181818",
        gold: {
          DEFAULT: "#C8A96A",
          light: "#E1C896",
          dark: "#9C7F4A",
        },
        muted: "#B8B8B8",
        smoke: "#2A2A2A",
      },
      fontFamily: {
        serif: ["var(--font-display)", "Cormorant Garamond", "Georgia", "serif"],
        sans: ["var(--font-body)", "Inter", "Helvetica", "Arial", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.35em",
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #E1C896 0%, #C8A96A 50%, #9C7F4A 100%)",
        "vignette": "radial-gradient(ellipse at center, transparent 0%, rgba(15,15,15,0.85) 100%)",
        "fade-up": "linear-gradient(to top, #0F0F0F 0%, transparent 100%)",
        "fade-down": "linear-gradient(to bottom, #0F0F0F 0%, transparent 100%)",
      },
      boxShadow: {
        gold: "0 8px 30px -8px rgba(200, 169, 106, 0.35)",
        deep: "0 20px 60px -15px rgba(0, 0, 0, 0.6)",
      },
      animation: {
        "fade-in": "fadeIn 1s ease-out forwards",
        "fade-up": "fadeUp 1s ease-out forwards",
        marquee: "marquee 40s linear infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
