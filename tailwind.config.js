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
    },
  },
  plugins: [],
};
