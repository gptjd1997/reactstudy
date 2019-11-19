const path = require("path");
const webpack = require("webpack");

module.exports = {
  name: "word-relay-setting",
  mode: "development", //실서비스 : production
  devtool: "eval",
  resolve: {
    extensions: [".js", ".jsx"]
  },

  //엔트리의 파일을 읽어 모듈을 적용해 아웃풋에 출력
  entry: {
    app: ["./client"] //워드릴레이는 client.jsx에서 임포트 했기때문에 안쳐줘도됨
  }, //입력

  module: {
    rules: [
      {
        test: /\.jsx?/, //정규표현식 //규칙을 적용할 파일들 js와 jsx파일들을
        loader: "babel-loader", //babel-loader 로  로드해주겠다
        options: {
          presets: [
            [
              "@babel/preset-env",
              {
                targets: {
                  browsers: ["> 2% in KR"] //한국에서 5퍼센트 점유율 이상 OR 최신 크롬버전 두개
                },
                debug: true
              }
            ],
            "@babel/preset-react"
          ], // 이 바벨의 옵션들로
          plugins: ["react-hot-loader/babel"]
        }
      }
    ]
  },
  plugins: [new webpack.LoaderOptionsPlugin({ debug: true })],
  output: {
    path: path.join(__dirname, "dist"), //디스트폴더가됨
    filename: "app.js"
    //현재폴더 안에 dist 안에 app.js 에 출력
  } //출력
};
