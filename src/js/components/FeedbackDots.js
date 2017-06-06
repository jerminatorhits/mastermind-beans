import React from "react";
import {Circle} from "react-shapes";

export default class FeedbackDots extends React.Component {
  render() {
  	var style = {
  	}
  	var colorMap = {
  		b : "#000000", 	//red
		w : "#FFFFFF",	//orange
  	}
    return (
        <Circle style={style} r={10} fill={{color: colorMap[this.props.value]}} stroke={{color:'#000000'}} strokeWidth={1} />
    );
  }
}