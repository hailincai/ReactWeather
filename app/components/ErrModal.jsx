import React from "react";
import ReactDOM from "react-dom";
import ReactDOMServer from "react-dom/server";

var ErrModal = React.createClass({
  getDefaultProps: function(){
    return {
      title: "Error"
    }
  },

  propTypes: {
    title: React.PropTypes.string,
    errMessage: React.PropTypes.string.isRequired
  },

  componentDidMount: function() {
    let {title, errMessage} = this.props;

    var modalMarkup = (
      <div className="reveal tiny text-center" id="error-modal" data-reveal="">
        <h4>{title}</h4>
        <p>{errMessage}</p>
        <button className="button hollow" data-close="">
          Okay
        </button>
      </div>
    );

    var $modal = $(ReactDOMServer.renderToString(modalMarkup));//jQuery will create new element if you pass in the element in selector
    $(ReactDOM.findDOMNode(this)).html($modal);
    var modal = new Foundation.Reveal($("#error-modal"));
    modal.open();
  },

  render: function(){
    return (
      <div></div>
    );
  }
});

export default ErrModal;
