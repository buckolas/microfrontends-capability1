var concat = require('concat')

const es5 = [
  './dist/microfrontends-capability1/runtime-es5.js', 
  './dist/microfrontends-capability1/polyfills-es5.js', 
  './dist/microfrontends-capability1/main-es5.js',
  './dist/microfrontends-capability1/scripts.js'
];

const es2015 = [
  './dist/microfrontends-capability1/runtime-es2015.js', 
  './dist/microfrontends-capability1/polyfills-es2015.js', 
  './dist/microfrontends-capability1/main-es2015.js',
  './dist/microfrontends-capability1/scripts.js'
];

concat(es5, './preview/elements-es5.js');
concat(es2015, './preview/elements-es2015.js');