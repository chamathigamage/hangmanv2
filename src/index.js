import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


class Square extends React.Component {
    render() {
      return (
        <div className="square">
        </div>
      );
    }
  }
  
class Board extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            word: "Hello",
            letterGuess: false
        }
    }
    renderSquare(i) {
      return <Square />;
    }
  
    render() {
        const hangmanWord = this.state.word;
        return (
            <div>
            <div className="board-row"></div>
                for (i = 0; i < hangmanWord.length; i++){
                    { this.renderSquare(hangmanWord[i]) }
                }
          </div>
        </div>
      );
    }
  }
  
class Game extends React.Component {
    
    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
  }
  
  // ========================================
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<Game />);
  