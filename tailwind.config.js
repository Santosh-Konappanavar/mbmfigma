module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: {
          50: "#fafafa",
          100: "#fff6f1",
          300: "#dfeedb",
          500: "#999999",
          600: "#6f6e6e",
          "900_01": "#0a033c",
          "700_01": "#5c5c5c",
          "100_01": "#f5f5f5",
          "500_01": "#9e9da6",
          "500_04": "#94979c",
          "600_02": "#828282",
          "600_01": "#777680",
          "700_02": "#5d5a6f",
          "500_02": "#9597a1",
          "400_01": "#c6c6cd",
          "500_03": "#9b9ea8",
        },
        indigo: { A700: "#3549f8" },
        black: { 900: "#000000" },
        blue_gray: { 100: "#d2d4dc", 600: "#615e83", "100_87": "#d9d9d987", "100_01": "#c8cdd6", "900_01": "#333333" },
        white: { A700: "#ffffff" },
        deep_orange: { 500: "#f2632e", A200: "#f47d31" },
        yellow: { 900: "#f48f18", "900_01": "#f28933" },
        orange: { 800: "#ef6c00", A700: "#ff6700", "50_01": "#ffe8d9" },
        red: { 50: "#fff5ee" },
        green: { 500: "#61b04d", 800: "#249328", "500_01": "#4fc854" },
        blue_gray_900: "#353434",
      },
      boxShadow: { xs: "0px 4.4px 4px 0px #0000003f" },
      fontFamily: { dmsans: "DM Sans", raleway: "Raleway", poppins: "Poppins" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
