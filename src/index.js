import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

class WordBoxes extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            word: "hello",
            letterMatch: false
        }
    }

    render() {
        let letterArr = [];
        for (let i = 0; i < this.state.word.length; i++)
            letterArr.push(<Square value={this.state.word[i]} />);
        return letterArr
    }
}
// class Square extends React.Component{
//     render() {
//         return <div className="square">{this.props.value}</div>
//     }
// } 

function Square(state) {
    if (state.letterMatch) {
        return <div className="square">{this.props.value}</div>;
    } else {
        return <div className="square"></div>;
    }
}
class UserInput extends React.Component {
    render() {
        return (
            <label>
            Input:
            <input type="text" onKeyDown={this.props.f} />
            </label>
        );
        }}
 
  const GetInputValue = (event) => {
    const input = [];
    const value = event.target.value;
    if (event.key === "Enter") {
      input.push(value);
      WordBox(input);
    }
  };
  const WordBox = (value) => {
    const word = value;
    console.log(word, word.length);
  };
class Game extends React.Component {
    render() {
      return (
        <div className="game">
          <div className="game-board">
            <WordBoxes />
          </div>
              <div className="game-info">
                  <UserInput f={GetInputValue} />
          </div>
        </div>
      );
    }
}
  
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);
  