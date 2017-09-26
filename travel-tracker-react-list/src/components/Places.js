import React from 'react';

const Places = props => {

  return(
    <div>
      <div className={props.className} onClick={props.handleClick}>{props.place}</div>
    </div>
  )
};

export default Places;
