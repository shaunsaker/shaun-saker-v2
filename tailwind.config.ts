import defaultTheme from 'tailwindcss/defaultTheme'

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      minWidth: {
        'img-md': '256px', // Adjust based on design requirements
      },
      minHeight: {
        'img-md': '144px', // Adjust based on design requirements
      },
      aspectRatio: {
        '16/9': { paddingBottom: '56.25%' },
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
