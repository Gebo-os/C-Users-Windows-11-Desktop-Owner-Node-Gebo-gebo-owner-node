import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./lib/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        gebo: {
          black: "#050805",
          panel: "#0b120d",
          green: "#39ff88",
          muted: "#8aa892"
        }
      }
    }
  },
  plugins: []
};

export default config;
