module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/ui/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "360px",
        md: "768px",
        lg: "1280px",
        xl: "1420px",
      },
      maxWidth: {
        container: "1420px",
      },
      colors: {
        grey: {
          dark1: "#0d1117",
          dark2: "#161b22",
          dark3: "#21262d",
          light1: "#89929b",
          light2: "#c6cdd5",
          light3: "#ecf2f8",
        },
        orange: "#faa356",
        violet: "#cea5fb",
        red: "#fa7970",
        green: "#7ce38b",
        blue: "#77bdfb",
        cyan: "#00d4ff",
        transparent: "transparent",
        white: "#FFFFFF",
        black: "#000000",
        yellow: "#CCFF00"
      },
      fontFamily: {
        primary: ["Montserrat", "sans-serif"],
        serif: ["serif"],
      },
      fontSize: {
        xs: "10px",
        sm: "12px",
        tiny: "14px",
        base: "16px",
        lg: "18px",
        xl: "24px",
        "2xl": "26px",
        "3xl": "40px",
      },
      fontWeight: {
        light: "300",
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
      },
      boxShadow: {
        DEFAULT: "0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);",
        plain: "0 1px 3px rgba(0,0,0,0.4), 0 1px 2px rgba(0,0,0,0.4)",
        hover: "0 14px 28px rgba(0,0,0,0.5), 0 14px 14px rgba(0,0,0,0.5)"
      },
    },
  },
  plugins: [],
}