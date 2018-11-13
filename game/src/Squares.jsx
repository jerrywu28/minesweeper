import React, { Component } from 'react';
import './Styles/Squares.css';

class Squares extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rightClick: 0
    }
  }

  clickSquare(e) {
    if (this.props.gameStarted && !this.props.gameOver) {
      if (e.target.value !== '0') {
        e.target.innerText = e.target.value;
      }
      e.target.classList.add('left-clicked');
      if (e.target.value === 'M') {
        this.props.endGame();
      }
    }
  }

  rightClick(e) {
    if (this.props.gameStarted) {
      e.target.classList.add('right-clicked-flag');
      let { rightClick } = this.state;
      if (rightClick === 0) {
        rightClick = 1;
      } else if (rightClick === 1) {
        rightClick = 2;
      } else {
        rightClick = 0;
      }
      this.setState({rightClick: rightClick});
    }
  }

  render() {
    return (
      <div>
        {this.props.row.map((col, colIndex) => {
          return <button key={colIndex} index={colIndex} value={col} onClick={e => this.clickSquare(e)} onContextMenu={e => this.rightClick(e)}></button>
        })}
      </div>
    )
  }
}

export default Squares;