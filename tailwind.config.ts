import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        ink: "var(--ink)",
        dim: "var(--dim)",
        bg: "var(--bg)",
        panel: "var(--panel)",
        line: "var(--line)",
        accent: "var(--hue)",
        good: "var(--good)",
        bad: "var(--bad)"
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-ui)", "system-ui", "sans-serif"]
      },
      borderRadius: { xl2: "1.25rem" }
    }
  },
  plugins: []
};
export default config;
