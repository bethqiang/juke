'use strict';

import React from 'react';

const Album = (props) => {
  return (
    <div className="album">
    <div>
      <h3>{props.album.name}</h3>
      <img src={props.album.imageUrl} className="img-thumbnail" />
    </div>
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
        <tr key={song.id}>
          <td>
            <button className="btn btn-default btn-xs">
              <span className="glyphicon glyphicon-play"></span>
            </button>
          </td>
          <td>{song.name}</td>
          <td>{song.artists.map(artist => artist.name)}</td>
          <td>{song.genre}</td>
        </tr>
      ))}
      </tbody>
    </table>
  </div>
  );
};

export default Album;