const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  plugins: [
    new HtmlWebpackPlugin(
        {
            hash: true, //Cache busting
            title: "Title",
            header: "Header",
            metaDesc: "Description",
            template: "./src/index.html", //This line tells webpack to use a template html instead of generating its own and putting it into /dist
            filename: "./index.html", //Filename for the output file in /dist
            inject: "body", //Inject js script in <body> instead of <head>
        }
    )
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(csv|tsv)$/i,
        use: ['csv-loader'],
      },
      {
        test: /\.xml$/i,
        use: ['xml-loader'],
      },
    ],
  },

  mode: 'development', //Change to mode: 'production' when ready to deploy
  
  output: {
    clean: true, //Clean /dist folder before each build
  },

  watch: true, //Auto reload on save
};