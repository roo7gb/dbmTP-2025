const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './assets/index.js', // Your entry point (React)
  output: {
    path: path.resolve(__dirname, 'build'), // This will be the Django static folder
    filename: 'index-bundle.js',
    publicPath: '/static/', // This tells Django where to find static files
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader', // Transpiles JSX and ES6+
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'], // Handles CSS imports
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './templates/index.html', // Default template from create-react-app
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, 'build'),
    port: 3000, // React will run on port 3000 by default
    proxy: {
      '/api': 'http://localhost:8000', // Proxy API calls to Django
    },
  },
};
