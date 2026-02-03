/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Core darks
        'bg-primary': '#08090a',
        'bg-secondary': '#0e1011',
        'bg-card': '#121416',
        'bg-card-hover': '#181a1d',
        'bg-elevated': '#1a1c1f',
        
        // Gunmetal / Silver palette
        'gunmetal': {
          DEFAULT: '#5c6370',
          light: '#7a8290',
        },
        'silver': {
          DEFAULT: '#a8b2bc',
          light: '#c8cfd7',
        },
        'chrome': '#dce1e6',
        
        // Accent
        'accent': {
          DEFAULT: '#8b9daa',
          light: '#a8bcc9',
        },
        
        // Borders
        'border': {
          DEFAULT: '#1e2124',
          light: '#2a2d31',
          hover: '#3a3d42',
        },
        
        // Text
        'text': {
          primary: '#e8eaed',
          secondary: '#8b939c',
          muted: '#555a61',
        },
        
        // Status
        'status': {
          green: '#4a9c6d',
          red: '#9c4a4a',
        },
      },
      fontFamily: {
        'tactical': ['Rajdhani', 'sans-serif'],
        'body': ['Barlow', 'sans-serif'],
      },
      maxWidth: {
        'container': '1140px',
      },
      backgroundImage: {
        'gradient-gunmetal': 'linear-gradient(135deg, #5c6370 0%, #7a8290 100%)',
        'gradient-silver': 'linear-gradient(135deg, #a8b2bc 0%, #dce1e6 100%)',
        'gradient-text': 'linear-gradient(135deg, #a8b2bc 0%, #dce1e6 50%, #c8cfd7 100%)',
      },
    },
  },
  plugins: [],
}