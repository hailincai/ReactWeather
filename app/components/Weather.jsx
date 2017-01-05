import React from "react";
import WeatherForm from "WeatherForm";
import WeatherMessage from "WeatherMessage";
import OpenWeatherMap from "OpenWeatherMap";
import ErrorModal from "ErrorModal";

var Weather = React.createClass({
  handleSearch: function(location) {
    //http://api.openweathermap.org/data/2.5/weather?q=Shanghai&units=metric&appid=b4d2d3c275ece46d164936eb77e7d974
    var that = this;

    that.setState({
      isLoading: true,
      errorMessage: undefined
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
                  that.setState({
                    isLoading: false,
                    errorMessage: errorMessage.message
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
    let errorMessage = this.state.errorMessage;

    function renderMessage() {
      if (isLoading){
        return (<h3 className="text-center">Fetching weather...</h3>);
      }else if (temparature && location){
        return (<WeatherMessage location={location} temparature={temparature}/>);
      }
    }

    function renderError () {
      if (typeof errorMessage === 'string') {
        return (
          <ErrorModal errMessage={errorMessage}/>
        )
      }
    }

    return (
      <div>
        <h1 className="text-center">Get Weather</h1>
        <WeatherForm location={location} onSearch={this.handleSearch}/>
        {renderMessage()}
        {renderError()}
      </div>
    )
  }
});

export default Weather;
