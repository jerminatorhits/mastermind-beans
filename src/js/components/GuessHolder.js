import React from "react";
import PrintedCode from "./PrintedCode";
import FeedbackHolder from "./FeedbackHolder";

export default class GuessHolder extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
  	var style = {
  	  marginTop: "5px",
  	  marginBottom: "5px",
      width: "300px",
      height: "50px",
      float: "left"
  	}
    return (
      <div style={style}>
        <PrintedCode 
        	first={this.props.first}
        	second={this.props.second}
        	third={this.props.third}
        	fourth={this.props.fourth} />
        <FeedbackHolder 
        	correctDigits={this.props.correctDigits}
        	misplacedDigits={this.props.misplacedDigits} />
      </div>
    );
  }
}