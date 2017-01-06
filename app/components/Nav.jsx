import React from "react";
import {Link, IndexLink} from "react-router";

var Nav = React.createClass({
  onSearch: function(e){
    e.preventDefault();

    let location = this.refs.search.value;
    if (typeof location === "string" && location.length > 0){
      this.refs.search.value = "";
      //this will change the weather component's properties
      window.location.hash = "#/?location=" + encodeURIComponent(location);
    }
  },

  render: function(){
    return (
      <div className="top-bar">
        {
          //this is top-bar-left component which will have menu inside
        }
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">React Weather App</li>
            <li>
              <IndexLink to="/">Get Weather</IndexLink>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/examples">Examples</Link>
            </li>
          </ul>
        </div>

        {
          //this is top bar right component
        }
        <div className="top-bar-right">
          <form onSubmit={this.onSearch}>
            <ul className="menu">
              <li><input type="search" ref="search" placeholder="Search weather by city"/></li>
              <li><input type="submit" className="button" value="Get Weathre"/></li>
            </ul>
          </form>
        </div>
      </div>
    )
  }
});

export default Nav;
