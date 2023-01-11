const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');

module.exports = {
  /* entry: 다른 모듈을 사용하고 있는 최상위 자바스크립트 파일 위치 */
  entry: path.join(__dirname, 'src', 'index.js'),
  mode: 'development',
  /* output: 내보내기할 경로 지정 */
  output: {
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      /* js, jsx - babel-loader 설정 */
      {
        test: /\.?(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
        resolve: {
          extensions: ['', '.js', '.jsx'],
        },
      },
      /* sa[c]ss - style-loader(css-loader, sass-loader) 설정 */
      {
        test: /\.s[ac]ss/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      },
      /* 이미지 파일(git, png, jp[e]g, svg): file-loader */
      {
        test: /\.(png|jp(e*)g|svg|gif)$/,
        use: ['file-loader?name=[path][name].[ext]'],
        /* file-loader는 이미지 파일의 이름을 만들고 폴더를 이동시킴 */
        /* [path][name].[ext]: 'dist/이미지 파일 경로/이미지.확장자' */
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          {
            loader: ImageMinimizerPlugin.loader,
            options: {
              minimizer: {
                implementation: ImageMinimizerPlugin.imageminMinify,
                options: {
                  plugins: [
                    "imagemin-gifsicle",
                    "imagemin-mozjpeg",
                    "imagemin-pngquant",
                    "imagemin-svgo",
                  ],
                },
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'public', 'index.html'),
    }),
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'development'
    })
  ],
  devServer: {
    hot: true,
    host: 'localhost',
    port: 3002,
  },
};