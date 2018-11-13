import React from 'react';
import './Styles/Squares.css';

const Squares = props => (
  <div>
    {props.row.map((col, colIndex) => {
      return <button key={colIndex} index={colIndex}>{col}</button>
    })}
  </div>
)

export default Squares;