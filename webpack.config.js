
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require('dotenv-webpack');
const path = require('path');

module.exports = (env, argv) => {
  const entryPath = argv.mode === 'development' ? './src/index_dev.js' : './src/index.js'
  return {
    module: {
      rules: [
        {
          test: /\.(css)$/i,
          use: ["style-loader", "css-loader"]
        },
        {
          test: /\.(png|jpe?g|gif)$/i,
          use: [{loader: 'file-loader'}]
        }
      ]
    },
    entry: {
      main: path.resolve(__dirname, entryPath),
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'build')
    },
    // Configurazione di un plugin, necessario per sveltire il processo di sviluppo vedi asterischi nello snippet successivo **
    devServer: {
      contentBase: './build',
      open: true
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: "Pollution Forecast API",
        template: path.resolve(__dirname, './src/index.html'),
        favicon: path.resolve(__dirname, './src/project-icon.ico'),
        link: path.resolve(__dirname, './src/style.css')
      }),
      new Dotenv()
    ]
  }
};
