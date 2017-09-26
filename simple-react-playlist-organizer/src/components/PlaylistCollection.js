import React from 'react';
import Playlist from './Playlist'

const PlaylistCollection = props => {

  let playlists = props.playlists.map(playlist => {

    let handleClick = () => {
      props.handleClick(playlist.id)
    }

    let className = ''
    if (playlist.id === props.selectedPlaylistId) {
      className = 'selected'
    }
    return(
      <Playlist
        key = {playlist.id}
        name = {playlist.name}
        songs = {playlist.songs}
        className = {className}
        handleClick = {handleClick}
      />
    )
  })

  return(
    <ul>
      {playlists}
    </ul>
  )
}

export default PlaylistCollection;
