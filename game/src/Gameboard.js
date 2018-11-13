import React from 'react';
import BoardRow from './BoardRow.js';

const Gameboard = props => (
  <div>
    {props.board.map((row, rowIndex) => {
      return <BoardRow key={rowIndex} row={row} rowIndex={rowIndex}>row</BoardRow>
    })}
  </div>
)

export default Gameboard;