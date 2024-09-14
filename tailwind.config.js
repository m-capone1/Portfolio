/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
        header: '#003366',
        background: '#0A0F2A',
        accent: '#FFB9B8',
        middle: '#004080',
        secondAccent: '#FFD492'
      },
      boxShadow: {
        card: "0px 10px 40px -15px #004080",
        glow: '0 0 25px rgba(64, 224, 208, 0.8)',
      },
      screens: {
        xs: "350px",
      },
      scale: {
        '105': '1.05',
      },
    },
  },
  plugins: [],
}

