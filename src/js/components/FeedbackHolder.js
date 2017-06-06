import React from "react";
import FeedbackDots from "./FeedbackDots";

export default class FeedbackHolder extends React.Component {
  render() {
  	var style = {
  	  marginLeft: "10px",
  	  textAlign: "center",
  	  padding: "auto 0",
  	  width: "50px",
  	  height: "50px",
  	  float: "left"
  	}
  	//this.props.correctDigits
  	//this.props.misplacedDigits
  	//var list = document.getElementById('feedback');
  	/*
  	{
        	for (var i = 0; i < this.props.correctDigits; i++) {
		  		return <FeedbackDots value="b"/>;
		  	}
		  	for (var j = 0; j < this.props.misplacedDigits; j++) {
		  		return <FeedbackDots value="w"/>;
		  	}
        }
    */
    
    var black = [];
    for(var i = 0; i < this.props.correctDigits; i++){
    	black.push(0);
    }
    var white = [];
    for(var i = 0; i < this.props.misplacedDigits; i++){
    	white.push(0);
    }
    
    return (
      <div id="feedback" style={style}>
      {black.map(function(object, i){
        return <FeedbackDots value="b" />;
       })}
      {white.map(function(object, i){
        return <FeedbackDots value="w" />;
       })}

      </div>
    );
  }
}