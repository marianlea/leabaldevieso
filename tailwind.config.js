/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        main: "#F6F6ED",
        "main-text": "#000",
        "sub-text": "#737373",
        accent: "#C1FF72",
      },
      fontFamily: {
        gordita: ["Gordita", "sans-serif"],
        "gordita-light": ["Gordita-Light", "sans-serif"],
      },
      fontSize: {
        small: "0.5rem",
        medium: "0.8rem",
        large: "1rem",
        xlarge: "3rem",
      },
      keyframes: {
        typing: {
          "0%": {
            width: "0%",
            visibility: "visible",
          },
          "100%": {
            width: "100%",
          },
        },
        blink: {
          "50%": {
            borderColor: "transparent",
          },
          "100%": {
            borderColor: "white",
          },
        },
      },
      animation: {
        typing: "typing 2s steps(20) infinite alternate, blink .7s",
        caret: "typing 2s steps(20) forwards, blink 1s steps(20) infinite 2s",
      },
    },
  },
  plugins: [],
};
