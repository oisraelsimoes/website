/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#080808",
        "ink-alt": "#101010",
        surface: "#161616",
        graphite: "#1e1e1e",
        paper: "#f6f2ea",
        "paper-alt": "#efe9dd",
        ivory: "#f2f0ec",
        muted: "#a3a3a0",
        stone: "#78766f",
        accent: {
          DEFAULT: "#C99757",
          light: "#E3BB89",
          dark: "#976F3B",
        },
      },
      fontFamily: {
        serif: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      maxWidth: {
        content: "1280px",
      },
      letterSpacing: {
        widest2: "0.25em",
      },
    },
  },
  plugins: [],
};
