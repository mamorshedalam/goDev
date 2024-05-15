module.exports = {
  content: ["*.{html,js}"],
  // darkMode: "class",
  theme: {
    extend: {},
    fontFamily: {
      sans: ["Gagalin", "ui-sans-serif", "system-ui"],
      serif: ["ui-serif", "Georgia"],
      mono: ["ui-monospace", "SFMono-Regular"],
    },
    screens: {
      xs: "380px",
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      "2xl": '1400px',
    },
  },
  plugins: [],
};
