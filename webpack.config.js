const path = require('path');
const webpack = require('webpack');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractCSS = new ExtractTextPlugin('allstyles.css');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
module.exports = {
   optimization: {
      minimizer: [new UglifyJsPlugin()],
   },
  entry: {
   Index: path.resolve(__dirname, './wwwroot/react/entrypoints/Index.jsx'),
   Test: path.resolve(__dirname, './wwwroot/react/entrypoints/Test.jsx')
  },
  output: {
            path: path.resolve(__dirname, 'wwwroot/dist'),
            filename: '[name].js'
          },
  plugins: [
   extractCSS,
    new webpack.ProvidePlugin({
               $: 'jquery',
          jQuery: 'jquery',
        'window.jQuery': 'jquery',
        Popper: ['popper.js', 'default']
                     }),
          ],
   module: {
      rules: [
         {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
              fallback: "style-loader",
              use: "css-loader"
            })
          },
         {
            test: /\.jsx?$/,
            use: {
               loader: 'babel-loader', options: {
                  presets:
                  ['@babel/preset-react' ,'@babel/preset-env']
               }
            }
         },
      ]
   },
   resolve: {
      extensions: ['.js', '.jsx']
    },
          
};