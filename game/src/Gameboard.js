import React from 'react';
import BoardRow from './BoardRow.js';

const Gameboard = props => (
  props.board.map((row, rowIndex) => {
    return <BoardRow key={rowIndex} row={row} rowIndex={rowIndex}>row</BoardRow>
  })
)

export default Gameboard;