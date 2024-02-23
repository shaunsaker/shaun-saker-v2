import defaultTheme from 'tailwindcss/defaultTheme'

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      minWidth: {
        'img-md': '128px', // Adjust based on design requirements
      },
      minHeight: {
        'img-md': '72px', // Adjust based on design requirements
      },
      aspectRatio: {
        '16/9': { paddingBottom: '56.25%' },
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
