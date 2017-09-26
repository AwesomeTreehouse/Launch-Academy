import React from 'react';
import Song from './Song';

const SongCollection = props => {

  let songs = props.songs.map(song => {
    let className =''
    if( song.id === props.selectedSongId){
      className = `selected`
    }

    let handleClick = () => {
      props.handleClick(song.id)
    }

    return(
      <Song
        name = {song.name}
        key = {song.id}
        artist = {song.artist}
        album = {song.album}
        className = {className}
        handleClick = {handleClick}
      />
    )
  })
  return(
    <ul>
      {songs}
    </ul>
  )
}
export default SongCollection
