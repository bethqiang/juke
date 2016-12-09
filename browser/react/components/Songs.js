'use strict';

import React from 'react';

const Songs = (props) => {

  const songs = props.songs;
  const currentSong = props.currentSong;
  const isPlaying = props.isPlaying;
  const toggleOne = props.toggleOne;

  return (
    <div>
      <h3>Songs</h3>
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
          {
            songs && songs.map(song => (
              <tr key={song.id} className={song.id === currentSong.id && isPlaying ? 'active' : null}>
                <td>
                  <button className="btn btn-default btn-xs" onClick={() => toggleOne(song, songs)}>
                    <span className={song.id === currentSong.id && isPlaying ? 'glyphicon glyphicon-pause' : 'glyphicon glyphicon-play'}></span>
                  </button>
                </td>
                <td>{song.name}</td>
                <td>
                  <span>{song.artists ? song.artists.map(artist => artist.name).join(', ') : null}</span>
                </td>
                <td>{song.genre}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
};

export default Songs;
