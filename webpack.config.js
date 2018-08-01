const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');


module.exports = {
  entry: {
    "main": './src/index.js',
    "actions/grid-align": "./src/modules/actions/grid_align.js",
    "space-shooter": './src/modules/space-shooter/index.js'
  },
  mode: 'development',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist'
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new CopyWebpackPlugin([
      {
        from: 'src/assets/',
        to: 'assets/'
      },
      {
        from: 'CNAME'
      }
    ]),
    // index
    new HtmlWebpackPlugin({
      title: 'Phaser Test v3',
      template: './src/index.handlebars',
      chunks: ['main']
    }),

    // actions/grid-align
    new HtmlWebpackPlugin({
      title: 'Actions - Grid Align',
      template: './src/example.handlebars',
      filename: 'actions/grid-align/index.html',
      chunks: ['actions/grid-align']
    }),

    // space-shooter
    new HtmlWebpackPlugin({
      title: 'Space Shooter',
      template: './src/example.handlebars',
      filename: 'space-shooter/index.html',
      chunks: ['space-shooter']
    })
  ],
  module: {
    rules: [
      /// ------------------------------------
      // Handlebars Loader
      // ------------------------------------
      {
        test: /\.handlebars$/,
        use: ['handlebars-loader']
      },

      /// ------------------------------------
      // CSS and Style Loader
      // ------------------------------------
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },

      /// ------------------------------------
      // Babel Loader
      // ------------------------------------
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: { presets: ['env'] }
        }
      }
    ]
  }
};
