/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      p1: "#f6edfa",
      p2: "#621887",
      p3: "#1c0229",
      c0: "#ffffff",
      c1: "#f7f7f7",
      c2: "#ededed",
    },
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        ibmPlexMono: ['"IBM Plex Mono"', "monospace"],
        manrope: ["Manrope", "monospace"],
      },
      backgroundImage: {
        "expand-user": "url('/src/assets/expand-user.svg')",
      },
    },
  },
  plugins: [],
};
