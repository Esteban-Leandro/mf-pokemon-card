const merge = require('concat');

const files = [
  './dist/mf-pokemon-card/main.js',
  './dist/mf-pokemon-card/polyfills.js',
  './dist/mf-pokemon-card/runtime.js'
]

merge(files, './dist/mf-pokemon-card/mf-pokemon-card.js');
console.info('file generated');
