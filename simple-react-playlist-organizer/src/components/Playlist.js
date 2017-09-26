import React from 'react';

const Playlist = (props) => {

  return(
    <li onClick={props.handleClick} className={props.className}>
      {props.name}
    </li>
  )
};

export default Playlist
