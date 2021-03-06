const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');


module.exports = {
  entry: {
    "main": './src/index.js',
    "actions/grid-align": './src/modules/actions/grid_align.js',
    "actions/inc-x-layers": './src/modules/actions/inc_x_layers.js',
    "actions/place-on-a-circle-multi": './src/modules/actions/place_on_a_circle_multi.js',
    "actions/place-on-a-circle-reversed": './src/modules/actions/place_on_a_circle_reversed.js',
    "actions/place-on-a-circle": './src/modules/actions/place_on_a_circle.js',
    "actions/place-on-ellipse": './src/modules/actions/place_on_ellipse.js',
    "actions/place-on-line": './src/modules/actions/place_on_line.js',
    "actions/place-on-part-of-a-circle": './src/modules/actions/place_on_part_of_a_circle.js',
    "actions/place-on-rectangle-shift": './src/modules/actions/place_on_rectangle_shift.js',
    "actions/place-on-rectangle": './src/modules/actions/place_on_rectangle.js',
    "actions/place-on-triangle": './src/modules/actions/place_on_triangle.js',
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
    // actions/inc-x-layers
    new HtmlWebpackPlugin({
      title: 'Actions - Inc X Layers',
      template: './src/example.handlebars',
      filename: 'actions/inc-x-layers/index.html',
      chunks: ['actions/inc-x-layers']
    }),
    // actions/place-on-a-circle-multi
    new HtmlWebpackPlugin({
      title: 'Actions - Place on a Circle Multi',
      template: './src/example.handlebars',
      filename: 'actions/place-on-a-circle-multi/index.html',
      chunks: ['actions/place-on-a-circle-multi']
    }),
    // actions/place-on-a-circle-reversed
    new HtmlWebpackPlugin({
      title: 'Actions - Place on a Circle Reversed',
      template: './src/example.handlebars',
      filename: 'actions/place-on-a-circle-reversed/index.html',
      chunks: ['actions/place-on-a-circle-reversed']
    }),
    // actions/place-on-a-circle
    new HtmlWebpackPlugin({
      title: 'Actions - Place on a Circle',
      template: './src/example.handlebars',
      filename: 'actions/place-on-a-circle/index.html',
      chunks: ['actions/place-on-a-circle']
    }),
    // actions/place-on-ellipse
    new HtmlWebpackPlugin({
      title: 'Actions - Place on Ellipse',
      template: './src/example.handlebars',
      filename: 'actions/place-on-ellipse/index.html',
      chunks: ['actions/place-on-ellipse']
    }),
    // actions/place-on-line
    new HtmlWebpackPlugin({
      title: 'Actions - Place on Line',
      template: './src/example.handlebars',
      filename: 'actions/place-on-line/index.html',
      chunks: ['actions/place-on-line']
    }),
    // actions/place-on-part-of-a-circle
    new HtmlWebpackPlugin({
      title: 'Actions - Place on Part of a Circle',
      template: './src/example.handlebars',
      filename: 'actions/place-on-part-of-a-circle/index.html',
      chunks: ['actions/place-on-part-of-a-circle']
    }),
    // actions/place-on-rectangle-shift
    new HtmlWebpackPlugin({
      title: 'Actions - Place on Rectangle Shift',
      template: './src/example.handlebars',
      filename: 'actions/place-on-rectangle-shift/index.html',
      chunks: ['actions/place-on-rectangle-shift']
    }),
    // actions/place-on-rectangle
    new HtmlWebpackPlugin({
      title: 'Actions - Place on Rectangle',
      template: './src/example.handlebars',
      filename: 'actions/place-on-rectangle/index.html',
      chunks: ['actions/place-on-rectangle']
    }),
    // actions/place-on-trinagle
    new HtmlWebpackPlugin({
      title: 'Actions - Place on Triangle',
      template: './src/example.handlebars',
      filename: 'actions/place-on-triangle/index.html',
      chunks: ['actions/place-on-triangle']
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
