/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        title: ['Chakra Petch', 'sans-serif'], // replace 'CustomFont' with your font name
      },
      colors: {
        primary: '#243642',          // Main primary brand color (Dark Blue)
        accent: 'blue-500',           // Accent color for highlights (Light Blue)
        success: '#629584',          // Success or positive state (Greenish)
        background: '#E2F1E7',       // Light background color (Soft Greenish)
        darkBackground: '#00001C',   // Dark background color (Dark Navy/Black)
        buttonBackground: "#eaeaea", // Light background color for buttons
        textPrimary: "#333333",      // Main text color (Dark Gray)
        textSecondary: "#666666",    // Secondary text color (Gray)
        border: "#dddddd",           // Border color (Light Gray)
      },
    },
  },
  plugins: [],
}