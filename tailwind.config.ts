import defaultTheme from 'tailwindcss/defaultTheme'

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      aspectRatio: {
        '4/3': { paddingBottom: '75%' }, // Example additional aspect ratio
        // Add more aspect ratios if required
      },
    },
    fontFamily: {
      sans: ['Inter', ...defaultTheme.fontFamily.sans],
      display: ['Knewave', ...defaultTheme.fontFamily.sans],
    },
  },
  plugins: [],
}
