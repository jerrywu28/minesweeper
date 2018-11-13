import React from 'react';

const BoardRow = props => (
  <div>
    {props.row.map((col, colIndex) => {
      return <button key={colIndex} index={colIndex}>{col}</button>
    })}
  </div>
)

export default BoardRow;