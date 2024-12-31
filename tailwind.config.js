/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blogPrimary: "#ece7f3",
        blogSecondary: "#6e67ed"
      },
      boxShadow: {
        blogPriceShadow: "5px 5px rgb(110,103,237)",
        blogCardShadow:
          "5px 5px 5px rgba(0, 0, 0, 0.2), -5px -5px 5px rgba(0, 0, 0, 0.2)",
      },
    },
    fontFamily: {
      poppins: ["Poppins-Regular", "serif"],
    },
  },
  plugins: [],
};
