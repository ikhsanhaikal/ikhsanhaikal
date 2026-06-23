/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./themes/nord/layouts/**/*.html",
    "./layouts/**/*.html",
    "./content/**/*.{html,md}",
  ],
  theme: {
    extend: {
      colors: {
        nord: {
          bg:      "#2e3440",
          bg2:     "#252c38",
          bg3:     "#1d2229",
          surface: "#3b4252",
          border:  "#434c5e",
          muted:   "#4c566a",
          dim:     "#616e88",
          subtle:  "#7b88a1",
          faint:   "#9aa4ba",
          body:    "#d8dee9",
          bright:  "#eceff4",
          accent:  "#88c0d0",
          green:   "#a3be8c",
          yellow:  "#ebcb8b",
          red:     "#bf616a",
          blue:    "#81a1c1",
          string:  "#a3be8c",
          comment: "#616e88",
        },
      },
      fontFamily: {
        serif:  ["Newsreader", "Georgia", "serif"],
        sans:   ["IBM Plex Sans", "sans-serif"],
        mono:   ["IBM Plex Mono", "monospace"],
      },
      fontSize: {
        "2xs": ["10px", { lineHeight: "1.4" }],
        "xs":  ["11px", { lineHeight: "1.5" }],
        "sm":  ["12px", { lineHeight: "1.5" }],
        "md":  ["13px", { lineHeight: "1.6" }],
        "base":["14px", { lineHeight: "1.65" }],
        "lg":  ["16px", { lineHeight: "1.75" }],
        "xl":  ["19px", { lineHeight: "1.3" }],
        "2xl": ["22px", { lineHeight: "1.2" }],
        "3xl": ["28px", { lineHeight: "1.18" }],
        "4xl": ["30px", { lineHeight: "1.18" }],
        "5xl": ["38px", { lineHeight: "1" }],
        "hero":["44px", { lineHeight: "1.1" }],
      },
      borderRadius: {
        sm:  "6px",
        md:  "9px",
        lg:  "12px",
        xl:  "14px",
        "2xl":"16px",
        full:"999px",
      },
      maxWidth: {
        mobile: "390px",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
  ],
};
