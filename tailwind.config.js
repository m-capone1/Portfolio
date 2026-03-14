/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        "primary": "#00BFFF",
        "accent-pink": "#FF00FF",
        "accent-lavender": "#E6E6FA",
        "background-dark": "#0B0B0D",
        "surface-dark": "#1A1A1D",
        "white-100": "#f3f3f3",
      },
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
      },
      boxShadow: {
        card: "0 10px 30px rgba(0, 0, 0, 0.5)",
        "primary-glow": "0 0 15px rgba(0, 191, 255, 0.4)",
        "pink-glow": "0 0 15px rgba(255, 0, 255, 0.4)",
      },
      screens: {
        xs: "350px",
      },
    },
  },
  plugins: [],
}
