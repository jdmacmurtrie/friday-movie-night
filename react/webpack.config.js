var config = {
  entry: {
    path: "./react/src/main.js"
  },
  output: {
    path: "./app/assets/javascripts",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel",
        query: {
          stage: 0,
          optional: ["runtime"],
          plugins: [
            "react-require" // <-- THIS IS YOUR AMENDMENT
          ]
        }
      }
    ]
  },
  devtool: "eval-source-map"
};

if (process.env.NODE_ENV === "production") {
  delete config.devtool;
  var webpack = require("webpack");
  config.plugins = [
    new webpack.DefinePlugin({ "process.env.NODE_ENV": '"production"' })
  ];
}

export default config;
