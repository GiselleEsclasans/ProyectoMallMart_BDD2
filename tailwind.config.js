/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        naranjaunimet: "#fd8001",
        naranjaclaro: "#ff9719",
        moradooscuro: "#490b56",
        morarosa: "#ae5c95",
        moradoclaro: "#7c56a9",
        violetaoscuro: "#240048",
        violetaclaro: "#4c1a55",
        rojoapagado: "#a93c51",
        rojoencendido: "#d54544",
        azulmorado: "#332556"
      },
      fontFamily: {
        robotoRegular:['Regular'],
        robotoMedium:['Medium'],
        robotoBold:['Bold'],
      }
    },
  },
  plugins: [],
}

