/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts}"],
  theme: {
    extend: {
      colors: {
        brand: {
          blue:  "#253380",
          white: "#e8e9eb",
          orange:"#d48715",
          green: "#267510",
        }
      },
      boxShadow: { card: "0 6px 24px rgba(0,0,0,.15)" },
      borderRadius: { "2xl": "1.25rem" }
    },
    container: { center: true, padding: "1rem" }
  },
  plugins: [],
}
