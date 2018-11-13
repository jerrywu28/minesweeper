import React from 'react';
import './Styles/Squares.css';

const Squares = props => {

  const clickSquare = e => {
    console.log(e.target.value);
    e.target.innerText = e.target.value;
    e.target.classList.add('left-clicked');
  }

  return (
    <div>
      {props.row.map((col, colIndex) => {
        return <button key={colIndex} index={colIndex} value={col} onClick={e => clickSquare(e)}></button>
      })}
    </div>
  )
}

export default Squares;