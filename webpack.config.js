module.exports = {
  entry: "./app/app.jsx",

  output: {
    path: __dirname,
    filename: "./public/bundle.js"
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
      OpenWeatherMap: "app/api/OpenWeatherMap.jsx"
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
