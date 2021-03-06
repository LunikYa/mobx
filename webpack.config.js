const path                 = require('path')
const HtmlWebpackPlugin    = require('html-webpack-plugin')
const CleanWebpackPlugin   = require('clean-webpack-plugin')
const webpack              = require('webpack')
const Dotenv               = require('dotenv-webpack')

module.exports = {
  entry: { 
    main: './src/index.tsx'
  },
  devtool: "source-map",
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  },
  module: {
    rules: [
      { 
        test: /\.js$/, 
        exclude: /node_modules/, 
        loader: ["babel-loader", "source-map-loader"] ,
        enforce: 'pre'
      },
      { 
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: ["babel-loader", "awesome-typescript-loader"]
      },
      {
        test: /\.(png|jp(e*)g|svg|eot|ttf|woff|woff2|otf)$/,
        loader: ['url-loader', 'image-webpack-loader']
      },
      {
        test: /\.(scss|css)$/,
        use:  [
          'css-hot-loader',
          'style-loader', 
          'css-loader', 
          'postcss-loader', 
          'sass-loader'
        ]
      },
      
    ]
  },
  plugins: [ 
    new CleanWebpackPlugin('dist', {} ),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new Dotenv({path: `./.env.${process.env.REACT_APP_ENV}`})
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    hot: true,
    port: 8000
  }
}