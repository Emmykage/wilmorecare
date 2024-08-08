/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        theme: "#057a2e",
        themeVariant: "#00a0a6"
      },
      backgroundColor: {
        theme: "#057a2e",
        themeVariant: "#00a0a6"
      },
      gridTemplateColumns: {
        "layout-styles":  "3fr 1fr"
        
        
      },
      borderWidth: {
        "3": "3px"
      }
    },
  },
  plugins: [],
}

