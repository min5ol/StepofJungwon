module.exports = {
  mode: 'jit',
  purge: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        AppleSDGothicNeoH: ['AppleSDGothicNeoH'],
        AppleSDGothicNeoEB: ['AppleSDGothicNeoEB'],
        AppleSDGothicNeoSB: ['AppleSDGothicNeoSB'],
        AppleSDGothicNeoB: ['AppleSDGothicNeoB'],
        AppleSDGothicNeoM: ['AppleSDGothicNeoM'],
        AppleSDGothicNeoR: ['AppleSDGothicNeoR'],
        AppleSDGothicNeoL: ['AppleSDGothicNeoL'],
        AppleSDGothicNeoUL: ['AppleSDGothicNeoUL'],
        AppleSDGothicNeoT: ['AppleSDGothicNeoT'],
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
