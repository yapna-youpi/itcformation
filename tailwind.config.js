/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    colors: {
      firstColor: "#3461aa",
      secondColor: "#39a935",
      secondaryDarkColor: "#453c5c",
      lightBgColor: "#f2f3f5",
      lightTextColor: "#7c889a",
      borderColor: "#e5e8ec",
      darkColor: "#0a021c",
      limer: "#39a935",
    },
    boxShadow: {
      panelShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px"
    },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('child', '& > *');
      addVariant('child-hover', '& > *:hover');
  }
  ],
}

