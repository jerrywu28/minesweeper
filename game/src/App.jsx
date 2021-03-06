import React, { Component } from 'react';
import Gameboard from './Gameboard.jsx';
import Timer from './Timer.jsx';
import Restart from './Restart.jsx';
import Minesleft from './Minesleft.jsx';
import './Styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      board: [],
      remaining: 10,
      gameStarted: false,
      restarted: false,
      gameOver: false
    }
    this.fillBoard = this.fillBoard.bind(this);
    this.endGame = this.endGame.bind(this);
  }

  componentDidMount() {
    this.makeBoard('new');
    document.oncontextmenu = (e) => e.preventDefault();
  }

  makeBoard(newOrRestart) {
    const { board } = this.state;
    //Generates 8x8 board with all 0s
    for (let i = 0; i < 8; i++) {
      let row = Array(8).fill(0);
      board.push(row);
    }
    if (newOrRestart === 'new') {
      this.setState({board: board});
    } else {
      return board;
    }
  }

  fillBoard() {
    let { board, gameStarted } = this.state;

    if (gameStarted) {
      this.makeBoard('restart');
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
    this.setState({
      board: board,
      gameStarted: true,
      restarted: true,
    });
  }

  endGame() {
    this.setState({
      gameStarted: false,
      gameOver: true});
  }

  render() {
    return (
      <div className="App">
        <div id="status-bar">
          <Timer id="timer" gameStarted={this.state.gameStarted} gameOver={this.state.gameOver}/>
          <Restart fillBoard={this.fillBoard} gameStarted={this.state.gameStarted} restarted={this.state.restarted} gameOver={this.state.gameOver}/>
          <Minesleft id="mines-left" remaining={this.state.remaining} />
        </div>
        <div id="game-board">
          <Gameboard board={this.state.board} gameStarted={this.state.gameStarted} restarted={this.state.restarted} endGame={this.endGame} gameOver={this.state.gameOver}/>
        </div>
      </div>
    );
  }
}

export default App;
