module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
         'cool': "url('cool-background.png')",       
      })
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
