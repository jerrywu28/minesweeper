import React from 'react';
import './Styles/Restart.css';

const Restart = props => {
  let face = props.gameStarted ? '😅' : '😐';
  if (props.gameOver) {
    face = '💀';
  }
  return (
    <div>
      <button id="restart" onClick={props.fillBoard}>{face}</button>
    </div>
  )
}

export default Restart