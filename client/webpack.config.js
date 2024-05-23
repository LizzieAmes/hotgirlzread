// const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

// module.exports = {
//   entry: './src/index.js',
//   output: {
//     path: path.resolve(__dirname, 'build'),
//     filename: 'bundle.js',
//     publicPath: '/',
//   },
//   module: {
//     rules: [
//       {
//         test: /\.(js|jsx)$/,
//         exclude: /node_modules/,
//         use: {
//           loader: 'babel-loader',
//         },
//       },
//       {
//         test: /\.css$/,
//         use: ['style-loader', 'css-loader', 'postcss-loader'],
//       },
//     ],
//   },
//   plugins: [
//     new HtmlWebpackPlugin({
//       template: './public/index.html',
//     }),
//   ],
//   devServer: {
//     static: {
//       directory: path.join(__dirname, 'build'),
//     },
//     historyApiFallback: true,
//     proxy: {
//       '/api': 'http://localhost:5000',
//     },
//     port: 3000,
//   },
//   resolve: {
//     extensions: ['.js', '.jsx'],
//   },
// };

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'build'),
    },
    historyApiFallback: true,
    proxy: {
      '/api': 'http://localhost:5000',
    },
    port: 3000,
    client: {
      logging: 'info', // Change to 'verbose' or 'info' for detailed logging
      overlay: {
        warnings: true,
        errors: true,
      },
    },
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};

