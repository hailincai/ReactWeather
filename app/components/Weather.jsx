import React from "react";
import WeatherForm from "WeatherForm";
import WeatherMessage from "WeatherMessage";
import OpenWeatherMap from "OpenWeatherMap";

var Weather = React.createClass({
  handleSearch: function(location) {
    //http://api.openweathermap.org/data/2.5/weather?q=Shanghai&units=metric&appid=b4d2d3c275ece46d164936eb77e7d974
    var that = this;

    that.setState({
      isLoading: true
    });

    OpenWeatherMap.getTemp(location)
                .then(function(temp){
                  that.setState({
                    location: location,
                    temparature: temp,
                    isLoading: false
                  });
                })
                .catch(function(errorMessage){
                  alert(errorMessage);
                  that.setState({
                    isLoading: false
                  });
                });
  },

  getInitialState: function(){
    return(
      {
        isLoading: false
      }
    );
  },

  render: function(){
    let location = this.state.location;
    let temparature = this.state.temparature;
    let isLoading = this.state.isLoading;

    function renderMessage() {
      if (isLoading){
        return (<h3>Fetching weather...</h3>);
      }else if (temparature && location){
        return (<WeatherMessage location={location} temparature={temparature}/>);
      }
    }

    return (
      <div>
        <h3>Get Weather</h3>
        <WeatherForm location={location} onSearch={this.handleSearch}/>
        {renderMessage()}
      </div>
    )
  }
});

export default Weather;
