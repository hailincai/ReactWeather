import React from "react";
import {Link} from "react-router";

//stateless function component
var About = (props) => {
  return (
    <div>
      <h1 className="text-center">About</h1>
      <p>Here are a few links for this project!</p>
      <ol>
        <li>
          <a href="http://murmuring-anchorage-74974.herokuapp.com/" target="_blank">Heroku application portal</a>
        </li>
        <li>
          <a href="https://github.com/hailincai/ReactWeather" target="_blank">Github repo for this project</a>
        </li>
        <li>
          <a href="http://foundation.zurb.com/sites/docs" target="_blank">Foundation document</a>
        </li>
        <li>
          <a href="http://openweathermap.org" target="_blank">OpenWeatherMap API</a> -- used for searching the weather of a specified city
        </li>
      </ol>
    </div>
  )
};

export default About;
