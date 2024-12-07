/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "luffy-sunset": "url('/luffy-sunset.jpg')",
        "luffy": "url('/luffy.jpg')",
        "zoro": "url('/zoro.jpg')",
        "gradient-black-to-transparent": "linear-gradient(to right, black, transparent)",
      },
      boxShadow: {
        "barShadow": " 1px 2px 6px 3px black"
      }
    },
  },
  plugins: [],
}

