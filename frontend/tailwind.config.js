module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        suncanyon: "url('./assets/images/kitchen_one.jpg')",
        desert: "url('./assets/images/kitchen_2.jpg')",
      }),
    },
  },
  plugins: [],
};
