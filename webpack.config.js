var webpack = require("webpack");

module.exports = {
  entry: {
    "externals": ["script!jquery/dist/jquery.min.js",
    "script!foundation-sites/dist/foundation.min.js"],
    "app": "./app/app.jsx"
  },

  externals: {
    "jquery": "jQuery" //jquery will be availabel as var jQuery, because foundation require this name
  },

  plugins: [
    new webpack.ProvidePlugin({
      "$": "jquery",
      "jQuery": "jquery"
    })
  ],

  output: {
    path: __dirname,
    filename: "./public/[name].js"
  },

  resolve: {
    root: __dirname,
    alias: {
      Main: "app/components/Main.jsx",
      Nav: "app/components/Nav.jsx",
      Weather: "app/components/Weather.jsx",
      About: "app/components/About.jsx",
      Examples: "app/components/Examples.jsx",
      WeatherMessage: "app/components/WeatherMessage.jsx",
      WeatherForm: "app/components/WeatherForm.jsx",
      OpenWeatherMap: "app/api/OpenWeatherMap.jsx",
      ErrorModal: "app/components/ErrModal.jsx"
    },
    extensions: ["", ".js", ".jsx"]
  },

  module: {
    loaders:[
      {
        loader: "babel-loader",
        query: {
          presets: ["es2015", "react", "stage-0"]
        },
        test: /\.jsx$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  },

  devtool: "inline-source-map" //only for develope purpose because it makes the bundle.js is very bigger
};
