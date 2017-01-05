import React from "react";

var ErrModal = React.createClass({
  componentDidMount: function() {
    var modal = new Foundation.Reveal($("#error-modal"));
    modal.open();
  },

  getDefaultProps: function(){
    return {
      title: "Error"
    }
  },

  propTypes: {
    title: React.PropTypes.string,
    errMessage: React.PropTypes.string.isRequired
  },


  render: function(){
    return(
      <div className="reveal tiny text-center" id="error-modal" data-reveal="">
        <h4>{this.props.title}</h4>
        <p>{this.props.errMessage}</p>
        <button className="button hollow" data-close="">
          Okay
        </button>
      </div>
    );
  }
});

export default ErrModal;
