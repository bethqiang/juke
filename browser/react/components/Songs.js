'use strict';

import React from 'react';

const Songs = (props) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th></th>
          <th>Name</th>
          <th>Artists</th>
          <th>Genre</th>
        </tr>
      </thead>
      <tbody>
      {props.album.songs.map(song => (
        <tr key={song.id} className={song.id === props.currentSong.id && props.isPlaying ? 'active' : null}>
          <td>
            <button className="btn btn-default btn-xs">
            {song.id === props.currentSong.id && props.isPlaying ?
              <span className="glyphicon glyphicon-pause" onClick={props.pause}></span> :
              <span className="glyphicon glyphicon-play" onClick={() => props.start(song, props.album.songs)}></span>
            }
            </button>
          </td>
          <td>{song.name}</td>
          <td>{song.artists.map(artist => artist.name)}</td>
          <td>{song.genre}</td>
        </tr>
      ))}
      </tbody>
    </table>
  );
};

export default Songs;
