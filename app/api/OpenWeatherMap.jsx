var axios = require("axios");

const OPEN_WEATHER_MAP_URL = "http://api.openweathermap.org/data/2.5/weather?units=metric&appid=b4d2d3c275ece46d164936eb77e7d974";

const OPEN_WEATHER_API = {
  getTemp: function(location) {
    let encodedLocation = encodeURIComponent(location);
    let requestURL = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    //promise then and catch return value is wrapped in the promise also
    return axios.get(requestURL)
          .then(function(res){
            debugger;
            if (res.data.cod && res.data.message){
              //means something went wrong
              throw new Error(res.data.message);
            }else{
              return res.data.main.temp;
            }
          })
          .catch(function(res){
            throw new Error(res.data.message);
          })
  }
}

export default OPEN_WEATHER_API
