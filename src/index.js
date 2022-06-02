import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './importing_pics.js';

class WordBoxes extends React.Component {
    render() {
        let letterArr = [];
        for (let i = 0; i < this.props.word.length; i++) {
            console.log(this.props.guess, this.props.word[i])
            var letterMatch = false
            if (this.props.guess !== null && (this.props.guess === this.props.word[i] || this.props.guess.split("").includes(this.props.word[i]))) {
                letterMatch = true;
            };
            letterArr.push(<Square value={this.props.word[i]} correct={letterMatch} />);
        }
        return letterArr
    }
}

class Square extends React.Component {
    constructor(props) {
        super(props)
        this.state = {letterMatch : false}
        }
    render()
    {
    if(this.state.letterMatch === false){
        this.state.letterMatch = this.props.correct
    }
    if (this.state.letterMatch) {
        return <div className="square">{this.props.value}</div>;
    } else {
        return <div className="square"></div>;
        }
    }
}
class UserInput extends React.Component  {
    render() {
        return (
            <label>
            Input:
                <input type="text" onKeyDown={this.props.onclick}/>
            </label>
        );
    }
}

class Hangman extends React.Component{
    constructor(props) {
        super(props);
        this.gameOver = "./hangman_pics/game_over.png"
        this.gameWon = "./hangman_pics/game_won.png"
        this.hangmanArr = ["./hangman_pics/pic0.png", "./hangman_pics/pic1.png", "./hangman_pics/pic2.png", "./hangman_pics/pic3.png", "./hangman_pics/pic4.png", "./hangman_pics/pic5.png", "./hangman_pics/pic6.png", "./hangman_pics/pic7.png", "./hangman_pics/pic8.png", "./hangman_pics/pic9.png", "./hangman_pics/pic10.png", "./hangman_pics/pic11.png", "./hangman_pics/pic12.png", "./hangman_pics/pic13.png", "./hangman_pics/pic14.png"];
    }
    render() {
        if (this.props.incorrect >= 14) {
            return (
                <img src={this.hangmanArr[this.props.incorrect]} alt={this.props.incorrect}/>
            );
        } else {
            return (
                <img src={this.gameOver} alt={this.props.incorrect}/>
            );
           
        }
    }
}


class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userGuess: null,
            incorrectGuess: 0,
        };
        this.randomWordArr = ["hello", "affair", "jump", "hook", "trouble", "advice", "rub", "cook", "tradition", "differ", "graphic", "punish", "heavy", "hotdog", "reveal", "confront", "railroad", "union", "journal", "recover", "mold", "revise", "interest", "braid", "dump", "cabin", "adventure", "knife", "explode", "jealous"]
        this.word = this.randomWordArr[Math.floor(Math.random() * this.randomWordArr.length)];
    }
    GetInputValue(event) {
        let value = event.target.value;
        var guess = [];
        if (event.key === "Enter") {
            event.target.value = ""
            guess.push(value)
            this.CheckGuess(guess)
        };
    }
    CheckGuess(guess) {
        var incorrectGuess= this.state.incorrectGuess
        var guessStr = guess[0]
        const correctWord = this.word.split("")
        if (guessStr.length > 1) {
            if (guessStr === this.word) {
                this.setState({
                    userGuess: guessStr
                })
            } else {
                this.setState({
                    incorrectGuess: incorrectGuess + 1
                })
            }
        } else if (guessStr.length === 1) {
            if (correctWord.includes(guessStr)) {
                this.setState({
                    userGuess: guessStr 
                })
            } else {
                this.setState({
                    incorrectGuess: incorrectGuess + 1
                })
            }
        };
        
    }
    render() {
      return (
        <div className="game">
          <div className="game-board">
                  <WordBoxes guess={this.state.userGuess} word={this.word}/>
          </div>
              <div className="game-info">
                  <UserInput onclick={(event) => this.GetInputValue(event)} />
                  <Hangman incorrect={this.state.incorrectGuess} />
          </div>
        </div>
      );
    }
}
  
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);
  