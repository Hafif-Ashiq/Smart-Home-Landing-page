/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  darkMode:"class",
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#1E5AFA",
        back_dark: "#1F1F1F",
        secondary_dark: "#767676",
        secondary: "#000F37",
        black_text: "#313131",
        faded_text: "#FAFAFA",
        black_light: '#575757'
      },
      
      screens: {
        xs: "480px",
        ss: "620px",
        sm: "768px",
        md: "1060px",
        lg: "1200px",
        xl: "1700px",
      
      },
      fontFamily:{
        poppins: ['Poppins']
      }
      
    },
  },
  plugins: [],
};