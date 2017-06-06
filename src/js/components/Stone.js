import React from "react";
import {Circle} from "react-shapes";

export default class Stone extends React.Component {
  render() {
  	var colorMap = {
  		1 : "#FF0000", 	//red
		2 : "#FF8000",	//orange
		3 : "#FFFF00",	//yellow
		4 : "#00FF00",	//green
		5 : "#0000FF",	//blue
		6 : "#6600CC",	//purple
  	}
  
    return (
      <Circle r={20} fill={{color: colorMap[this.props.value]}} stroke={{color:'#000000'}} strokeWidth={1} />
    );
  }
}