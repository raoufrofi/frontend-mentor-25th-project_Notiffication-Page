/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["../*.html"],
  mode: "jit",
  content: [],
  theme: {
    extend: {
      colors: {
        "White": "hsl(0, 0%, 100%)",
        "Very-light-grayish-blue": "hsl(210, 60%, 98%)",
        "Light-grayish-blue-1": "hsl(211, 68%, 94%)",
        "Light-grayish-blue-2": "hsl(205, 33%, 90%)",
        "Grayish-blue": "hsl(219, 14%, 63%)",
        "Dark-grayish-blue": "hsl(219, 12%, 42%)",
        "Very-dark-blue": "hsl(224, 21%, 14%)",
        "links": "hsl(231, 75%, 44%)"
      },
      fontFamily: {
        "jakarta": "Plus Jakarta Sans"
      }
    },
  },
  plugins: [],
}
