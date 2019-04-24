const path = require('path');
const webpack = require('webpack');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractCSS = new ExtractTextPlugin('allstyles.css');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
module.exports = {
   optimization: {
      minimizer: [new UglifyJsPlugin()],
   },
  entry: './wwwroot/source/app.js',
  output: {
            path: path.resolve(__dirname, 'wwwroot/dist'),
            filename: 'bundle.js'
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
            test: /\.js?$/,
            use: {
               loader: 'babel-loader', options: {
                  presets:
                  ['@babel/preset-react' ,'@babel/preset-env']
               }
            }
         },
      ]
   }
          
};