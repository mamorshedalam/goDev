module.exports = {
  content: ["*.{html,js}"],
  // darkMode: "class",
  theme: {
    extend: {},
    fontFamily: {
      sans: ["Gagalin", "ui-sans-serif", "system-ui"],
      serif: ["ui-serif", "Georgia"],
      mono: ["ui-monospace", "SFMono-Regular"],
      moon: ["MoonTime", "ui-sans-serif", "system-ui"],
      bitter: ["Bitter", "ui-sans-serif", "system-ui"],
    },
    screens: {
      xs: "460px",
      sm: '640px',
      md: '820px',
      lg: '1024px',
      xl: '1280px',
      "2xl": '1400px',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'black': '#000000',
      'green-100': '#60b380',
      'blue-100': '#23527c',
      'gray-100': '#7a7a7a',
      'ash-100': '#888888',
    }
  },
  plugins: [],
};
