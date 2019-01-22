
const browsersync = require('rollup-plugin-browsersync');
const postcss = require('rollup-plugin-postcss');
const postcssNormalize = require('postcss-normalize');
const autoPrefixer = require('autoprefixer');
const cssNano = require('cssnano');
const babel = require('rollup-plugin-babel');
const resolve = require('rollup-plugin-node-resolve');
const commonJs = require('rollup-plugin-commonjs');
const {terser} = require("rollup-plugin-terser");


const isProduction = process.env.NODE_ENV === 'production';
const isDevelopment = isProduction === false;

module.exports = {
  input: 'src/scripts/index.js',
  output: {
  file: 'public/giphy.js',
  format: 'iife',
  sourcemap: true
  },

  plugins:
  [
    postcss ({
      extract: true,
      sourceMap: isDevelopment,
      plugins:[
        postcssNormalize(),
        autoPrefixer(),
        cssNano(),
      ],
    }),
    babel(),
    resolve(),
    commonJs(),
    terser(),
    (isDevelopment && browsersync({server: 'public'})),
    ]
};
