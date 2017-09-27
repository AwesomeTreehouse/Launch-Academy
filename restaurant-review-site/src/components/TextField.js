import React from 'react'

const TextField = (props) => {

  return(
    <label>{props.lable}
      <input
        name={props.name}
        type='text'
        placeholder={props.lable}
        value={props.content}
        onChange={props.handlerFunction}
      />
    </label>
  );
}

export default TextField;
