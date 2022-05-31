import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function Square(props) {
        if (props.letterGuess) {
            return <div id="letterBox">{props.letter}</div>;
        } else {
            return <div id="letterBox"></div>;
        }
}

class Word extends React.Component {
    renderSquare(i) {
        return (<Square
            value={this.props.squares[i]}
        />);
        
    }
  
    render() {
      return (
        <div>
          <div className="Word-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
        </div>
      );
    }
  }



class Game extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            letter: "a",
            letterGuess: false
        }
    }
    checkLetter(letter) {
        if (letter === this.props.letter) {
            this.setState({ letterGuess: !this.state.letterGuess})
        }
    };
    render() {
        return (
            <div className="game">
                <div className="gameBoard">
                    <Word input="Hello" />
                </div>
            </div>
            
        )
    }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);
