// const CopyWebpackPlugin = require("copy-webpack-plugin");
// const HtmlWebpackPlugin = require("html-webpack-plugin");
// const MiniCSSExtractPlugin = require("mini-css-extract-plugin");

// vue-loader
const { VueLoaderPlugin } = require("vue-loader");

const path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "./app.ts"),
  externals: {
    //包名:  modulex.exports 的名字
    vue: "Vue",
    // "element-plus": "ElementPlus",
    // "@antv/x6": "X6", // 这里的 X6 是你从 CDN 中引入的全局变量名
    // "@antv/x6-plugin-dnd": "X6DND",
  },
  resolve: {
    extensions: [".ts", ".vue", ".tsx", ".js", ".jsx", ".json"], // 改变引入文件， 可以不写后缀名
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./dist"),
    library: "MyPlugin",
    libraryTarget: "umd",
  },
  plugins: [
    // 引入插件
    new VueLoaderPlugin(),
  ],
  optimization: {
    minimize: false,
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: "ts-loader",
        options: {
          appendTsSuffixTo: [/\.vue$/],
        },
      },
      // vue
      {
        test: /\.vue$/,
        use: {
          loader: "vue-loader",
        },
      },
      // JS
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              // 开始
              [
                "@babel/preset-env",
                {
                  useBuiltIns: "usage",
                  corejs: {
                    version: 3,
                  },
                  //   targets: {
                  //     chrome: '60',
                  //     firefox: '60',
                  //     ie: '9',
                  //     safari: '10',
                  //     edge: '17',
                  //   },
                },
              ],
              // 结束
            ],
          },
        },
      },
      // CSS
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },

      // Images
      {
        test: /\.(jpg|png|gif|svg)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: "assets/images/",
            },
          },
        ],
      },

      // Fonts
      {
        test: /\.(ttf|eot|woff|woff2)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: "assets/fonts/",
            },
          },
        ],
      },
    ],
  },
};
