import React from "react";

//distract feature of ES6
//var WeatherMessage = ({location, temparature}) => {
var WeatherMessage = (props) => {
  let {location, temparature} = props;

  return (
    <h3 className="text-center">The temprature of {location} is {temparature}!!!</h3>
  )
};

export default WeatherMessage;
