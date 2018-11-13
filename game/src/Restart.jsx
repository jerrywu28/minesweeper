import React from 'react';
import './Styles/Restart.css';

const Restart = props => (
  <div>
    <button id="restart" onClick={props.fillBoard}></button>
  </div>
)

export default Restart