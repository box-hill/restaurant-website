const path = require('path');

module.exports = {
  entry: {
    index: './src/index.js',
    'first-tab': './src/first-tab.js'
  },
  output: {
    filename: '[name].main.js',
    path: path.resolve(__dirname, 'dist'),
  }
};