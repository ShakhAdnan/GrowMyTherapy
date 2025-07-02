module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // Adjust based on your folder structure
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("tailwindcss-animate"),
  ],
};