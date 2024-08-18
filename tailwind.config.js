/** @type {import('tailwindcss').Config} */
export default {
  plugins: [require('daisyui')],

  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],

  daisyui: {
    themes: [{
      ada: {
        "primary": "#07A570",
        "primary-content": "#1f2937",
        "secondary": "#FFAB01",
        "accent": "#A51A07",
        "neutral": "#f4ffff",
        "base-100": "#ffffff",
        "info": "#22d3ee",
        "success": "#4ade80",
        "warning": "#facc15",
        "error": "#ef4444",
      }
    }]
  }
}

