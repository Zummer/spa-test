const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractLess = new ExtractTextPlugin({
  filename: "[name].css",
  disable: process.env.NODE_ENV === "development"

});

module.exports = {
  devtool: 'source-map',
  entry: [
    './index.js',
    './less/index.js'
  ],
  output: {
    path: 'build',
    filename: 'bundle.js'

  },
  module: {
    rules: [{
      test: /\.(js)$/,
      loader: 'babel-loader',
      query: {
        presets: ["react", "stage-0"]
      }
    },
      {
        test: /\.less$/,
        use: extractLess.extract({
          use: [{
            loader: "css-loader"

          }, {
            loader: "less-loader"

          }],
          // use style-loader in development
          fallback: "style-loader"

        })

      }]

  },
  plugins: [
    extractLess

  ]
};
