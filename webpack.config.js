const path                 = require('path')
const HtmlWebpackPlugin    = require('html-webpack-plugin')
const CleanWebpackPlugin   = require('clean-webpack-plugin')

module.exports = {
  entry: { main: './src/index.tsx' },
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
        test: /\.scss$/,
        use:  [  
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
    })
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 8000
  }
}