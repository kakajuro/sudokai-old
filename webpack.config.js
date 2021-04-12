const path = require('path');

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    publicPath: '/build',
    compress: true,
    port: 9001,
    inline: true,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /.svelte$/,
        loader: 'svelte-loader',
        options: { hotReload: true },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      }
    ],
  },
};