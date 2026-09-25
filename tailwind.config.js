export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Fraunces", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "monospace"],
      },
      colors: {
        bg: "rgb(var(--bg) / <alpha-value>)",
        surface: "rgb(var(--surface) / <alpha-value>)",
        ink: "rgb(var(--ink) / <alpha-value>)",
        muted: "rgb(var(--muted) / <alpha-value>)",
        line: "rgb(var(--line) / <alpha-value>)",
        g1: "rgb(var(--g1) / <alpha-value>)",
        g2: "rgb(var(--g2) / <alpha-value>)",
        g3: "rgb(var(--g3) / <alpha-value>)",
        ongrad: "rgb(var(--on-grad) / <alpha-value>)",
      },
      maxWidth: {
        page: "1280px",
      },
    },
  },
  plugins: [],
};
