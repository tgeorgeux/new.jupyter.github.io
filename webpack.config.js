var CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
  entry: './src/index.tsx',
  devServer: {
    contentBase: 'dist',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
      {from:'src/images',to:'images'}
    ]),
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },
};
