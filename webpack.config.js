
// 使用webpack打包
module.exports = {
  entry: "./src/main.js",
  output: {
    filename: "build.js",
	path: __dirname
  },
  module: {
    loaders: [
	  //.css 文件使用 style-loader 和 css-loader 来处理
	  {
        test: /\.less$/,
        loader: "style!css!less"
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  plugins: []
};