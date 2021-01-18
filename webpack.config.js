const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

let paths = {
  src: path.join(__dirname, "/ts"),
  dist: path.join(__dirname, "/js")
};

module.exports = {
  entry: {
    'woldtwerk.image': path.join(paths.src, 'woldtwerk.image.ts'),
  },
  output: {
    path: paths.dist,
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          }
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          mangle: {
            reserved: ['Drupal'],
          },
        },
      }),
    ],
  },
}
