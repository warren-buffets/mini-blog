/**
 * Tailwind CSS configuration.
 *
 * The `content` array tells Tailwind where to look for class names.
 * You can extend the default theme here or install plugins if needed.
 */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {}
  },
  plugins: []
};