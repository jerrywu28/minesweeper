import React from 'react';
import './Styles/Squares.css';

const Squares = props => {

  const clickSquare = e => {
    if (e.target.value !== '0') {
      e.target.innerText = e.target.value;
    }
    e.target.classList.add('left-clicked');
  }

  const rightClick = e => {
    console.log(e.target.classList, e.target.value);
  }

  return (
    <div>
      {props.row.map((col, colIndex) => {
        return <button key={colIndex} index={colIndex} value={col} onClick={e => clickSquare(e)} onContextMenu={e => rightClick(e)}></button>
      })}
    </div>
  )
}

export default Squares;