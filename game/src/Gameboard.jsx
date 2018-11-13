import React from 'react';
import Squares from './Squares.jsx';

const Gameboard = props => (
  <div>
    {props.board.map((row, rowIndex) => {
      return <Squares key={rowIndex} row={row} rowIndex={rowIndex}>row</Squares>
    })}
  </div>
)

export default Gameboard;