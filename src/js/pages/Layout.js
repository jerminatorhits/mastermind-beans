import React from "react";
import GameContainer from "../components/GameContainer";
import Menu from "../components/Menu";
import $ from "jquery";

const initialState = {
	player: "",
	playerId: "",
  wins: "",
  losses: "",
	first: 1,
	second: 1,
	third: 1,
	fourth: 1,
	wasCorrect: "",
	correctDigits: "",
	misplacedDigits: "",
	remainingGuesses: 10,
	attempts: []
};

const resetBoardState = {
	first: 1,
	second: 1,
	third: 1,
	fourth: 1,
  activeGame: false,
	wasCorrect: "",
	correctDigits: "",
	misplacedDigits: "",
	remainingGuesses: 10,
	attempts: []
}

export default class Layout extends React.Component {
  constructor() {
  	super();
  	this.state = initialState;

  	this.displayName = this.displayName.bind(this);
  	this.createNewPlayer = this.createNewPlayer.bind(this);
  	this.createNewGame = this.createNewGame.bind(this);
  	this.guessTheCode = this.guessTheCode.bind(this);
  	this.changeValue1 = this.changeValue1.bind(this);
  	this.changeValue2 = this.changeValue2.bind(this);
  	this.changeValue3 = this.changeValue3.bind(this);
  	this.changeValue4 = this.changeValue4.bind(this);
  }

  displayName(e) {
    /*
  	e.preventDefault()
  	this.setState({
	  name: "someValue"
  	})
    */
  }

  createNewPlayer() {
  	this.setState(initialState);
  	var name = prompt("Enter your name:");
  	var obj = new Object();
    obj.name = name;
    var myString = JSON.stringify(obj);
    var that = this;
    $.ajax({
      type: "POST",
      url: "http://challenge.thebeans.io:3000/api/player",
      // The key needs to match your method's input parameter (case-sensitive).
      data: myString,
      contentType: "application/json; charset=utf-8",
      dataType: "json",
      success: function(data){
        alert(JSON.stringify(data.playerId));
        that.setState({player: name});
        that.setState({playerId: data.playerId});
      },
      failure: function(errMsg) {
          alert(errMsg);
      }
    });
  }

  createNewGame() {
    var that = this;
    $.ajax({
      type: "POST",
      url: "http://challenge.thebeans.io:3000/api/player/" + that.state.playerId + "/new-game",
      // The key needs to match your method's input parameter (case-sensitive).
      success: function(data){
        alert(JSON.stringify("New Game Successfully Created!"));
  		  that.setState(resetBoardState);
        that.setState({activeGame: true});
        that.setState({attempts: []});
      },
      failure: function(errMsg) {
          alert(errMsg);
      }
    });
  }

  handleChange(e) {
      this.props.changeGreeting(this.state.player);
  }

  guessTheCode() {
  	if(this.state.activeGame == true) {
    var that = this;
    var obj = new Object();
    var guess = "" + this.state.first + this.state.second + this.state.third + this.state.fourth;
    alert(guess);
    obj.guess = guess;
    var myString = JSON.stringify(obj);
    alert(myString);
    $.ajax({
      type: "POST",
      url: "http://challenge.thebeans.io:3000/api/player/" + that.state.playerId + "/guess",
      // The key needs to match your method's input parameter (case-sensitive).
      data: myString,
      contentType: "application/json; charset=utf-8",
      dataType: "json",
      success: function(data){
        console.log(JSON.stringify(data));
        that.setState({wasCorrect: data.wasCorrect});
        that.setState({correctDigits: data.correctDigits});
        that.setState({misplacedDigits: data.misplacedDigits});
        that.setState({remainingGuesses: data.remainingGuesses});
        that.state.attempts.push([
			that.state.first,
			that.state.second,
			that.state.third,
			that.state.fourth,
			that.state.correctDigits,
			that.state.misplacedDigits]);
    	that.forceUpdate();
    	that.setState({first: 1});
	    that.setState({second: 1});
	    that.setState({third: 1});
	    that.setState({fourth: 1});
	    if(that.state.wasCorrect) {
	    	alert("Congratulations! You solved the puzzle!");
	    	that.setState(resetBoardState);
	    	that.forceUpdate();
        $(".guesses").remove();
        $.ajax({
          type: "GET",
          url: "http://challenge.thebeans.io:3000/api/stats",
          dataType: "json",
          success: function(data){
            that.setState({wins: data.wins});
            that.setState({losses: data.losses});
          },
          failure: function(errMsg) {
              alert(errMsg);
          }
        });
	    }
	    else if(that.state.remainingGuesses < 1) {
	    	alert("Sorry, you ran out of moves. Better luck next time!");
	    	that.setState(resetBoardState);
	    	that.forceUpdate();
        $(".guesses").remove();
        $.ajax({
          type: "GET",
          url: "http://challenge.thebeans.io:3000/api/stats",
          dataType: "json",
          success: function(data){
            that.setState({wins: data.wins});
            that.setState({losses: data.losses});
          },
          failure: function(errMsg) {
              alert(errMsg);
          }
        });
	    }
      },
      failure: function(errMsg) {
          alert(errMsg);
      }
    });
	} else {
		this.setState(resetBoardState);
    $(".guesses").remove();
	}
  }

  changeValue1() {
    var num = this.state.first;
    if(num < 6){
      num++;
    }
    else {
      num = 1;
    }
    this.setState({first : num});
  }

  changeValue2() {
    var num = this.state.second;
    if(num < 6){
      num++;
    }
    else {
      num = 1;
    }
    this.setState({second : num});
  }

  changeValue3() {
    var num = this.state.third;
    if(num < 6){
      num++;
    }
    else {
      num = 1;
    }
    this.setState({third : num});
  }

  changeValue4() {
    var num = this.state.fourth;
    if(num < 6){
      num++;
    }
    else {
      num = 1;
    }
    this.setState({fourth : num});
  }
  render() {
  	var style = {
      width: "50%",
      margin: "0 auto",
      textAlign: "center",
    }
    return (
      <div style={style}>
        <GameContainer guessTheCode={this.guessTheCode}
        	  changeValue1 = {this.changeValue1}
		  	  changeValue2 = {this.changeValue2}
		  	  changeValue3 = {this.changeValue3}
		  	  changeValue4 = {this.changeValue4}
		  	  first = {this.state.first}
	  		  second = {this.state.second}
	  		  third = {this.state.third}
	  		  fourth = {this.state.fourth}
	  		  turnsLeft = {this.state.remainingGuesses}
	  		  attempts = {this.state.attempts}
          activeGame = {this.state.activeGame}
	  		   />

        <Menu displayName={this.displayName}
        	  createNewPlayer={this.createNewPlayer}
        	  createNewGame={this.createNewGame}
        	  player={this.state.player}
            wins={this.state.wins}
            losses={this.state.losses} />
      </div>
    );
  }
}
