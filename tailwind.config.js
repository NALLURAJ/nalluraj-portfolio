// tailwind.config.js
export default {
  darkMode: "class", // ✅ enable class-based dark mode
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Space Grotesk", "sans-serif"],
        subheading: ["Space Grotesk", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      transitionProperty: {
        colors: "background-color, border-color, color, fill, stroke",
      },
      transitionDuration: {
        400: "400ms",
        700: "700ms",
      },
    },
  },
  plugins: [],
};
