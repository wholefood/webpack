var HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: { //빌드저장결과물을
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/i, //판별하라
        use: [MiniCssExtractPlugin.loader, 'css-loader'], //true 면  style-loader를 사용하라
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          //아래 순서 어긋나면 안됨
          //make .css from JS strings
          MiniCssExtractPlugin.loader, //css 추출
          'css-loader',
          'postcss-loader',
          'sass-loader' //사스화일만들고
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new MiniCssExtractPlugin()]
};