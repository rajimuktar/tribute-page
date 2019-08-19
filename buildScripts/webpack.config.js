//imports
import webpack from 'webpack';
import path from 'path';
require("@babel/register");
const HtmlWebpackPlugin = require('html-webpack-plugin')


//Webpack configuration
module.exports = {
	//mode
	mode: 'development',
	
	//Entry
  entry: [
    path.resolve(__dirname, '../src/index.js')
  ],
	
	//Output
  output: {
    path: path.resolve(__dirname, 'src'),
    filename: 'index_bundle.js'
  },
	
	//Loaders
	  module: {
    rules : [
      // JavaScript/JSX Files
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'], //use or loaders
      },
			
      // CSS / SASS Files
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      }
    ]
  },
	
	//Plugins
  plugins: [
		new HtmlWebpackPlugin(),	// Generates default index.html
    new HtmlWebpackPlugin({		// Also generate a test.html
      title: 'My App',
      filename: 'test.html'
			meta: {viewport: 'width=device-width, initial-scale=1.0, shrink-to-fit=no', Author: content = 'Raji Muktar', Keywords: content = 'A,B'}
    })
  ]
	
	// OPTIONAL
  // Reload On File Change
  watch: true,
  // Development Tools (Map Errors To Source File)
  devtool: 'source-map',
}
