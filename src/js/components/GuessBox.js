import React from "react";
import CodeHolder from "./CodeHolder";
import Button from "react-button";

export default class GuessBox extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
  	var style = {
  	}
    return (
      <div style={style}>
        <CodeHolder 
        	changeValue1={this.props.changeValue1}
        	changeValue2={this.props.changeValue2}
        	changeValue3={this.props.changeValue3}
        	changeValue4={this.props.changeValue4}
        	first = {this.props.first}
            second = {this.props.second}
            third = {this.props.third}
            fourth = {this.props.fourth}	/>
        <Button onClick={this.props.guessTheCode}>Submit</Button>
      </div>
    );
  }
}