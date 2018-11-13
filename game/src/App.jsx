import React, { Component } from 'react';
import Gameboard from './Gameboard.jsx';
import Timer from './Timer.jsx';
import './Styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      board: [],
    }
  }

  componentDidMount() {
    this.makeBoard();
  }

  makeBoard() {
    const { board } = this.state;
    
    //Generates 8x8 board with all 0s
    for (let i = 0; i < 8; i++) {
      let row = Array(8).fill(0);
      board.push(row);
    }
    //Creates 10 random, unique mines
    const mineLocations = [];
    while (mineLocations.length < 10) {
      let mine = Math.floor(Math.random() * 64);
      if (mineLocations.includes(mine) === false) {
        mineLocations.push(mine);
      }
    }
    //Places mines into gameboard
    mineLocations.forEach(mine => {
      let row = Math.floor(mine / 8);
      let column = mine - (row * 8);
      board[row][column] = 'M';
    })
    //Checks each square to determine # of mines surrounding it
    board.forEach((row, rowIndex) => {
      row.forEach((col, colIndex) => {
        //Only checks if current square does not contain mine
        if (col !== 'M') {
          let previousRow = (rowIndex - 1 >= 0) ? rowIndex - 1 : null;
          let nextRow = (rowIndex + 1 <= 7) ? rowIndex + 1 : null;
          let previousCol = (colIndex - 1 >= 0) ? colIndex - 1 : null;
          let nextCol = (colIndex + 1 <= 7) ? colIndex + 1 : null;
          let count = 0;
          //Checks previous row
          if (previousRow !== null) {
            if (previousCol !== null) {
              if (board[previousRow][previousCol] === 'M') count += 1;
            }
            if (nextCol !== null) {
              if (board[previousRow][nextCol] === 'M') count += 1;
            }
            if (board[previousRow][colIndex] === 'M') count += 1;
          }
          //Checks current row
          if (previousCol !== null) {
            if (board[rowIndex][previousCol] === 'M') count += 1;
          }
          if (nextCol !== null) {
            if (board[rowIndex][nextCol] === 'M') count += 1;
          }
          //Checks next row
          if (nextRow !== null) {
            if (previousCol !== null) {
              if (board[nextRow][previousCol] === 'M') {
                count += 1;
              }
            }
            if (nextCol !== null) {
              if (board[nextRow][nextCol] === 'M') count += 1;
            }
            if (board[nextRow][colIndex] === 'M') count += 1;
          }
          //Assigns # of adjacent mines to square
          board[rowIndex][colIndex] = count;
        }
      });
    });

    console.table(board);
    this.setState({board: board});
  }

  render() {
    return (
      <div className="App">
        <Timer /><button id="restart">8)</button>
        <Gameboard board={this.state.board} />
      </div>
    );
  }
}

export default App;
