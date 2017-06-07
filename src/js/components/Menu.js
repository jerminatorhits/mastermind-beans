import React from "react";
import Button from "react-button";

export default class Menu extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
  	var style = {
  	  width: "120px",
  	  height: "700px",
      border: "1px black solid",
      margin: "10px auto",
      float: "left"
  	}
    return (
      <div style={style}>
        <Button onClick={this.props.createNewPlayer}>New Player</Button>
        <Button onClick={this.props.createNewGame}>New Game</Button>
        <h1>Hello</h1>
 		    <h1>{this.props.player}</h1>
      </div>
    );
  }
}