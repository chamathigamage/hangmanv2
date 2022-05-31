import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// class Square extends React.Component {
//   render() {
//     return (
//       <div className="square">{props.value}</div>
//     );
//   }
// }

function Square(props) {
  if (props.letterGuess) {
      return <div className="square">{props.value}</div>;
  } else {
      return <div className="square"></div>;
  }
}



  
class WordBoxes extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            word: "Hello",
            letterGuess: false
        }
    }
  renderSquare(i) {
    return <Square value={this.props.squares[i]}/>;
  }
  renderWord = (inputWord) => {
    for (let i = 0; i < inputWord.length; i++)
    {this.renderSquare(inputWord[i])}
}
  
    render() {
      const hangmanWord = this.state.word;
        return (
            <div>
            <div className="board-row"></div>
            {this.renderWord(hangmanWord)}
          </div>
      );
    }
  }
  
class Game extends React.Component {
    
    render() {
      return (
        <div className="game">
          <div className="game-board">
            <WordBoxes />
          </div>
          <div className="game-info">
          </div>
        </div>
      );
    }
  }
  
  // ========================================
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<Game />);
  