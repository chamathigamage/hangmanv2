import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

class WordBoxes extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            letterMatch: false
        }
    }

    render() {
        let letterArr = [];
        for (let i = 0; i < this.props.word.length; i++)
            letterArr.push(<Square userGuess={this.props.guess}correctWord={this.props.word} value={this.props.word[i]} correct={this.state.letterMatch} />);
        return letterArr
    }
}

function Square(props) {
    // if (props.values.includes(props.userGuess)) {
    //     props.correct = true
    // }
    if (props.correct) {
        return <div className="square">{props.value}</div>;
    } else {
        return <div className="square"></div>;
    }
}
class UserInput extends React.Component  {
    render() {
        return (
            <label>
            Input:
            <input type="text" onKeyDown={this.props.onclick} />
            </label>
        );
    }
}


class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          userGuess: null,
        };

        this.word = "hello";
    }
    GetInputValue(event) {
        let value = event.target.value;
        var guess = [];
        if (event.key === "Enter") {
            event.target.value = ""
            guess.push(value)
        };
        this.setState({
            userGuess: guess
        })
    }
    render() {
      return (
        <div className="game">
          <div className="game-board">
                  <WordBoxes guess={this.state.userGuess} word={this.word}/>
          </div>
              <div className="game-info">
                  <UserInput onclick={(event) =>this.GetInputValue(event)}/>
          </div>
        </div>
      );
    }
}
  
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);
  