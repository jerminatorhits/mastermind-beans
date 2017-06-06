import React from "react";
import GameContainer from "../components/GameContainer";
import Menu from "../components/Menu";

export default class Wrapper extends React.Component {
  render() {
  	var style = {
      width: "50%",
      margin: "0 auto",
      textAlign: "center",
    }
    return (
      <div style={style}>
        <GameContainer />
        <Menu />
      </div>
    );
  }
}
