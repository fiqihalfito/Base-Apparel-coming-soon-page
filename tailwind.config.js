/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        custom: {
          primary: {
            red: "hsl(0, 36%, 70%)",
            softRed: "hsl(0, 93%, 68%)",
          },
          neutral: {
            red: "hsl(0, 6%, 24%)"
          },
          gradient: {
            from1: "hsl(0, 0%, 100%)",
            to1: "hsl(0, 100%, 98%)",
            from2: "hsl(0, 80%, 86%)",
            to2: "hsl(0, 74%, 74%)",
          }
        }
      },
      backgroundImage: {
        desktopPattern: "url(/images/bg-pattern-desktop.svg)"
      }
    },
  },
  plugins: [],
}
