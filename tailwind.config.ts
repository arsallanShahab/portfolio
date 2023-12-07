/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        "brand-dark": "#000814",
        "brand-dark-shade-light": "#000c1f",
        "brand-dark-shade-light-2": "#001433",
        "brand-dark-shade-light-3": "#f5f9ff",
        "brand-light-green": "#cdfa89",
        "brand-dark-green": "#80ed99",
      },
      "transition-property": {
        height: "height",
      },
      transitionDuration: {
        0: "0ms",
        250: "250ms",
        2000: "2000ms",
      },
      fontFamily: {
        bricolage: ["Bricolage Grotesque", "sans-serif"],
        pixelify: ["Pixelify Sans", "sans-serif"],
        "roboto-mono": ["Roboto Mono", "monospace"],
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
