/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dashboardBG: "#0E2539",
        dashboardItem: "#1F3F5C",
        logoBlue: "#1F64CC",
        searchBlue: "#E3EBF7",
        carouselCircle: "#8575E7",
        pie11: "#BB3B8A",
        pie12: "#9A277D",
        pie13: "#781C74",
        pie21: "#BB3B8A",
        pie22: "#D55A9A",
        pie23: "#E57CA5",
        pie31: "#5256B8",
        pie32: "#787AC4",
        pie33: "#A8AAD6",
        barRed: "#CF605C",
        barBlue: "#5575A2",
        barOrange: "#E39142",
        textWhite: "#EEEEEE",
        textBlack: "#001B33",
        shadow1:"#D9D9D9",
        successDark:"#5AB281",
        successLight:"#E1F1E8"
      },
      boxShadow: {
        dashboardItem: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [require('@tailwindcss/container-queries')],
};
