import React from "react";
import Nav from "Nav";

var Main = (props) => {
  return (
    <div>
      <Nav></Nav>
      <h2>Main Component</h2>
      {props.children}
    </div>
  );
};

export default Main;
