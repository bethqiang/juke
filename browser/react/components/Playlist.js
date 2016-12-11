import React from 'react';

import Songs from './Songs';
import AddSongContainer from '../containers/AddSongContainer';

const Playlist = props => {

  const playlist = props.selectedPlaylist;

  console.log(props);

  return (
    <div>
      <h3>{playlist.name}</h3>
      <Songs {...props} songs={playlist.songs} />
      {playlist.songs && !playlist.songs.length && <small>No songs.</small>}
      <hr/>
      <AddSongContainer selectedPlaylist={props.selectedPlaylist} />
    </div>
  );
};

export default Playlist;
