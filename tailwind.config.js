/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  theme: {
    extend: {
      height: theme => ({
        '80': '412px'
      }),
      colors: {
        primary: {
          font: '#616161'
        },
        secondary: {
          font: '#a3a3a3'
        },
        active: '#25bbf1'
      }
    }
  },
  variants: {},
  plugins: []
};
