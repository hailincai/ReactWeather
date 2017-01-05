import React from "react";

var WeatherForm = React.createClass({
  onFormSubmit: function(e){
    e.preventDefault();

    let location = this.refs.location.value;
    if (location.length > 0){
      this.refs.location.value = "";
      this.props.onSearch(location);
    }
  },

  render: function(){
    return(
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input type="text" ref="location" defaultValue={this.props.location} placeholder="Enter city name"/>
          <button className="hollow button expanded">Get Weather</button>
        </form>
      </div>
    )
  }
});

export default WeatherForm;
