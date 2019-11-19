const path = require("path");

module.exports = {
  mode: "development",
  devtool: "eval",

  resolve: {
    extensions: [".jsx", ".js"]
  },

  entry: {
    app: "./client"
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        options: {
          presets: [
            [
              "@babel/preset-env",
              {
                targets: {
                  browsers: ["> 5% in KR", "last 2 chrome versions"] //한국에서 5퍼센트 점유율 이상 OR 최신 크롬버전 두개
                },
                debug: true
              }
            ],
            "@babel/preset-react"
          ]
        }
      }
    ]
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "app.js"
  }
};
