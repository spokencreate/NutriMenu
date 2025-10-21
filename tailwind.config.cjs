/** @type {import('tailwindcss').Config} */
module.exports = {
  // CRITICAL: Ensure these paths are exactly correct for scanning files.
  content: [
    "./index.html",
    // This is the common wildcard
    "./src/**/*.{js,ts,jsx,tsx}", 
    // Add explicit path to the main app file for good measure
    "./src/App.tsx", 
  ],
  theme: {
    // Setting a custom font family may help force a reload/recompile
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
    extend: {
      // Define your warm, African-themed color palette explicitly here:
      colors: {
        'clay': '#7b3f00',       // Dark Brown/Red Earth
        'ochre': '#cc7722',      // Orange-Brown Earth Tones
        'emerald-green': '#046A38', // Deep Green
        'sun-gold': '#FFC72C',   // Bright Yellow/Gold
      }
    },
  },
  plugins: [],
}
