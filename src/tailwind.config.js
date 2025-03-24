module.exports = {
  content: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        honey: {
          light: "#FFF3CD",
          DEFAULT: "#FFD700",
          dark: "#DAA520",
        },
      },
    },
  },
};
