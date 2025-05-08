module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      colors: {
        primary: "rgb(var(--color-primary))",
        secondary: "rgb(var(--color-secondary))",
        background: "rgb(var(--color-background))",
        accent: "rgb(var(--color-accent))",
        navy: "rgb(var(--color-navy))",
      },
    },
  },
  plugins: [],
}