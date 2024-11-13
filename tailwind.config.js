// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        title: ['Chakra Petch', 'sans-serif'], // Custom font for the title
      },
      colors: {
        // Primary colors
        primary: '#243642',             // Dark Slate
        highlight: '#6095ba',           // Soft Blue
        accentGreen: '#629584',         // Muted Green
        background: '#E2F1E7',          // Light Mint Background
        darkBlue: '#00001C',            // Almost Black Blue
        buttonBackground: '#eaeaea',    // Light Gray for Buttons
      },
    },
  },
  plugins: [],
};
