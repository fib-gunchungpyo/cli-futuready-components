import vue from 'rollup-plugin-vue';
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import { terser } from 'rollup-plugin-terser';

const babelConfig = {
  exclude: 'node_modules/**',
  runtimeHelpers: true,
  babelrc: false,
  presets: [['@babel/preset-env', { modules: false }]]
};

export default [
  // ESM build to be used with webpack/rollup.
  {
    input: 'src/components/index.js',
    external: ['vue'],
    output: {
      format: 'esm',
      file: 'dist/fib.esm.js'
    },
    plugins: [
      resolve({
        extensions: ['.vue', '.js']
      }),
      vue({
        template: {
          isProduction: true
        }
      }),
      babel(babelConfig),
      commonjs(),
      terser()
    ]
  },
  // SSR build.
  {
    input: 'src/components/index.js',
    external: ['vue'],
    output: {
      format: 'cjs',
      file: 'dist/fib.ssr.js'
    },
    plugins: [
      resolve({
        extensions: ['.vue', '.js']
      }),
      vue({ template: { optimizeSSR: true, isProduction: true } }),
      babel(babelConfig),
      commonjs(),
      terser()
    ]
  },
  // Browser build.
  {
    input: 'src/components/browser.js',
    external: ['vue'],
    output: {
      format: 'iife',
      file: 'dist/fib.js'
    },
    plugins: [
      resolve({
        extensions: ['.vue', '.js']
      }),
      vue({
        template: {
          isProduction: true
        }
      }),
      babel(babelConfig),
      commonjs(),
      terser()
    ]
  }
];
