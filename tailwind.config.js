/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        typing: {
          "0%": { width: "0ch" },
          "50%": { width: "18ch" },
        },
      },
      fontFamily: {
        burtons: "burtons",
      },
      animation: {
        "spin-slow": "spin 10s linear infinite",
        "bounce-slow": "bounce 3s infinite",
        wiggle: "wiggle 1s ease-in-out infinite",
        typing: "typing 6s infinite steps(16)",
      },
    },
  },
  plugins: [],
};
