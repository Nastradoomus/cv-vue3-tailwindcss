module.exports = {
  // purge: [],
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    ripple: (theme) => ({
      colors: theme("colors"),
      darken: 0.1,
      modifierTransition: "background 0.2s",
      activeTransition: "background 0.1s"
    }),
    fontFamily: {
      sans: ["Montserrat"],
      serif: ["Montserrat"],
      mono: ["Montserrat"],
      display: ["Montserrat"],
      body: ["Montserrat"]
    },
    extend: {}
  },
  variants: {
    animation: ["responsive", "motion-safe", "motion-reduce"]
  },
  // eslint-disable-next-line @typescript-eslint/no-var-requires, global-require
  plugins: [require("tailwindcss-ripple")()]
}
