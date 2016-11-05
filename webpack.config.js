const ExtractTextPlugin = require("extract-text-webpack-plugin");

var config = {
   entry: './main.js',
	
   output: {
      path:'./',
      filename: 'index.js',
   },
	
   devServer: {
      inline: true,
      port: 8080
   },
	
   module: {
      loaders: [
         {
            test: /\.js?$/,
            exclude: /node_modules/,
            loader: 'babel',
				
            query: {
               presets: ['es2015', 'react']
            }
         },

           {
             test: /\.css$/,
             loader: ExtractTextPlugin.extract("style-loader", "css-loader")
         }
      ]
   },

       plugins: [
        new ExtractTextPlugin("styles.css")
    ]
}

module.exports = config;