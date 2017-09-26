import React from 'react';

const Answers = props => {

  return (
    <div>
     <button
       onClick={props.handleClick}>
       {props.answer}
     </button>
    </div>
  )
}

export default Answers;
