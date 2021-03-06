module.exports = {
  entry: "./frontend/entry.jsx",
  output: {
    filename: "./static/bundle.js"
  },
  resolve: {
    extensions: [".js", ".jsx", ".css", "*" ]
  },
  module: {
    loaders: [
      {
        test: /\.(png|jpg)$/,
        loader: 'url?limit=25000'
      },
      {
        test: [/\.jsx?$/, /\.js?$/],
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  devtool: 'source-map',
};
