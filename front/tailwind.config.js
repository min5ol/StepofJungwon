/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'mobile': {'max': '767px'},
        'desktop': {'min': '768px'},
      },
      fontFamily: {
        'Pretendard-H': ['Pretendard-H'],
        'Pretendard-B': ['Pretendard-B'],
        'Pretendard-EB': ['Pretendard-EB'],
        'Pretendard-EL': ['Pretendard-EL'],
        'Pretendard-L': ['Pretendard-L'],
        'Pretendard-M': ['Pretendard-M'],
        'Pretendard-R': ['Pretendard-R'],
        'Pretendard-SB': ['Pretendard-SB'],
        'Pretendard-T': ['Pretendard-T'],
        'Jeju-M': ['Jeju-M'],
        'Weekend': ['Weekend'],
        'AppleSDGothicNeoUL': ['AppleSDGothicNeoUL'],
        'AppleSDGothicNeoL': ['AppleSDGothicNeoL'],
        'AppleSDGothicNeoR': ['AppleSDGothicNeoR'],
        'AppleSDGothicNeoM': ['AppleSDGothicNeoM'],
        'AppleSDGothicNeoB': ['AppleSDGothicNeoB'],
        'AppleSDGothicNeoEB': ['AppleSDGothicNeoEB'],
        'AppleSDGothicNeoH': ['AppleSDGothicNeoH'],
        'Display-H': ['Display-H'],
        'Display-B': ['Display-B'],
        'Display-EB': ['Display-EB'],
        'Display-M': ['Display-M'],
        'Display-R': ['Display-R'],
        'Display-SB': ['Display-SB'],
      },
    },
  },
  plugins: [],
};
