import React from "react";
import Stone from "./Stone";

export default class CodeHolder extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
  	var codeHolderStyle = {
      textAlign: "center",
      width: "220px",
      height: "50px",
      float: "left"
    }
    var buttonStyle = {
      margin: "0",
      padding: "0",
      textAlign: "center",
      border: "none",
      background: "#ac7339",
      outline: "none"
    }
    return (
      <div style={codeHolderStyle}>
        <button style={buttonStyle} onClick={this.props.changeValue1}>
          <Stone value={this.props.first}/>
        </button>
        <button style={buttonStyle} onClick={this.props.changeValue2}>
          <Stone value={this.props.second}/>
        </button>
        <button style={buttonStyle} onClick={this.props.changeValue3}>
          <Stone value={this.props.third}/>
        </button>
        <button style={buttonStyle} onClick={this.props.changeValue4}>
          <Stone value={this.props.fourth}/>
        </button>
      </div>
    );
  }
}