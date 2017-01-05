import React from "react";
import {Link, IndexLink} from "react-router";

var Nav = React.createClass({
  onSearch: function(e){
    e.preventDefault();

    alert("No yet wired up!");
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
              <li><input type="search" placeholder="Search Weather"/></li>
              <li><input type="submit" className="button" value="Get Weathre"/></li>
            </ul>
          </form>
        </div>
      </div>
    )
  }
});

export default Nav;
