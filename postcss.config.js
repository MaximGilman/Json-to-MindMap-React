module.exports = {
    plugins: {
      'postcss-bem-fix': {
        style: 'bem',
        separators: {
          descendent: '__',
        },
        shortcuts: {
          component: 'b',
          descendent: 'e',
          modifier: 'm'
        }
      }
    }
  }
  