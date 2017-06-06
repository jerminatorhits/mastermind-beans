import React from "react";
import GuessHolder from "./GuessHolder";
import GuessBox from "./GuessBox";
import $ from 'jquery';

export default class GameContainer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
  	var containerStyle = {
      paddingTop: "10px",
  	  width: "300px",
  	  height: "700px",
      margin: "0px auto",
      float: "left",
      position: "relative",
      paddingLeft: "0"
    }
    var guessStyle = {
      position: "absolute",
      bottom: 5,
      left: 0
    }
    var guess2Style = {
      width: "300px",
      height: "700px",
      margin: "10px auto",
      border: "1px black solid",
      float: "left",
      position: "relative",
      backgroundColor: "#ac7339"
    }
    /*
    var newHTML = [];
    var jquery = require('jquery');
    for (var i = 0; i < this.props.attempts.length; i++) {
      $("#list").append("<GuessHolder " +
        "first=" + this.props.attempts[i][0] + " " +
        "second=" + this.props.attempts[i][1] + " " +
        "third=" + this.props.attempts[i][2] + " " +
        "fourth=" + this.props.attempts[i][3] + " " + 
        "correctDigits=" + this.props.attempts[i][4] + " " +
        "misplacedDigits=" + this.props.attempts[i][5] + " />");
    }
    */
    
    /*
    var items = [];

     $.each(this.props.attempts, function(i, item) {
        items.push("<GuessHolder " +
        "first=" + item[0] + " " +
        "second=" + item[1] + " " +
        "third=" + item[2] + " " +
        "fourth=" + item[3] + " " + 
        "correctDigits=" + item[4] + " " +
        "misplacedDigits=" + item[5] + " />");
     });  // close each()

     $('#list').append( items.join('') );
     */
    return (
      <div style={guess2Style}>
        <ul id="list" style={containerStyle}>
          {
              this.props.attempts.map(function(item, i) {
              return <GuessHolder key={i}
                first={item[0]} 
                second={item[1]} 
                third={item[2]} 
                fourth={item[3]} 
                correctDigits={item[4]}
                misplacedDigits={item[5]} />;
              })
          }
        </ul>
        <div style={guessStyle}>
            <GuessBox guessTheCode={this.props.guessTheCode}
                      changeValue1 = {this.props.changeValue1}
                      changeValue2 = {this.props.changeValue2}
                      changeValue3 = {this.props.changeValue3}
                      changeValue4 = {this.props.changeValue4} 
                      first = {this.props.first}
                      second = {this.props.second}
                      third = {this.props.third}
                      fourth = {this.props.fourth} />
          </div>
      </div>
    );
  }
}