import {heroui} from "@heroui/theme"
const { primary, radius } = require('./theme.json')
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],

  theme: {
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0",},
          to: { height: "var(--radix-accordion-content-height)"},
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  darkMode: "class",
  plugins: [
    heroui(),
    require('@tailwindcss/forms'),
    require("tailwindcss-animate"),
    require("@tailwindcss/typography"),
  ],
    
}
