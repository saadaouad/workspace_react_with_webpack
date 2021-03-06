var path = require('path');

module.exports = {
  entry: './app/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    inline: true,
    host: '0.0.0.0',
    port: 9000,
    historyApiFallback: true
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        test: /\.js$/,
      },
      {
        loaders: ['style-loader', 'css-loader', 'sass-loader'],
        test: /\.scss$/,
      },
      // {
      //   loaders: ['url-loader'],
      //   test: /\.png$/,
      // }
    ],
  },
};
