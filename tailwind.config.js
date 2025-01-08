/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  mode: "jit",
  theme: {
    extend: {
      backgroundImage: {
        "background-utama": "url('/images/backgroundutama.svg')",
        "background-handphone": "url('/images/bghandphone.svg')",
        "background-komentar": "url('/images/bgkomentar.svg')",
      },
      colors: {
        primary: "#00040f",
        secondary: "#00f6ff",
        dimWhite: "rgba(255,255,255,0.7)",
        dimBlue: "rgba(9,151,124,0.1)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
    },
    screens: {
      xs: "300px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
      xxl: "2300px",
    },
  },
};
