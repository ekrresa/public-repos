module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        faded: '#ffffffb3',
        link: '#0366d6',
        dull: '#e1e4e8',
        forest: '#2c974b',
        primary: '#24292e',
        khaki: '#444d56',
        secondary: '#57606a',
        shade: '#f6f8fa',
        marker: '#1b1f2426',
      },
      gridTemplateColumns: {
        main: '24% 1fr',
      },
      screens: {
        md: '868px',
      },
    },
  },
  plugins: [],
};
