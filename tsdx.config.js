var postcss = require('rollup-plugin-postcss');
var autoprefixer = require('autoprefixer');
var cssnano = require('cssnano');
var atImport = require('postcss-import');
var url = require('@rollup/plugin-url');

module.exports = {
  rollup(config, options) {
    config.plugins.push(
      postcss({
        plugins: [
          atImport(),
          autoprefixer(),
          cssnano({
            preset: 'default',
          }),
          url({ include: ['**/*.ttf', '**/*.eot', '**/*.woff'] }),
        ],
        inject: false,
        // only write out CSS for the first bundle (avoids pointless extra files):
        extract: !!options.writeMeta,
      })
    );
    return config;
  },
};
