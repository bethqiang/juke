'use strict';

import React from 'react';

const Albums = (props) => {
  return (
    <div>
      <h3>Albums</h3>
      <div className="row">
      {props.albums.map(album => (
        <div key={album.id} className="col-xs-4">
          <a className="thumbnail" href="#">
            <img src={album.imageUrl} />
            <div className="caption">
              <h5>
                <span>{album.name}</span>
              </h5>
              <small>{album.songs.length}</small>
            </div>
          </a>
        </div>
      ))}
      </div>
    </div>
  );
};

export default Albums;
