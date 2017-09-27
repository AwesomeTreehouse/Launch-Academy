import React from 'react'

const SelectForm = (props) => {
  let stars = ['★', '★★', '★★★', '★★★★', '★★★★★']

  let starOptions = stars.map(option => {
    return(
      <option key={option} value={option}>{option}</option>
      );
    })

  return (
    <label>{props.label}
      <select
        name={props.name} value={props.content} onChange={props.handlerFunction}>
        <option value=""></option>
        {starOptions}
      </select>
    </label>
  );
}

export default SelectForm;
