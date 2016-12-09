'use strict';

import React from 'react';

import Songs from './Songs';

const Album = (props) => {
  return (
    <div className="album">
    <div>
      <h3>{props.album.name}</h3>
      <img src={props.album.imageUrl} className="img-thumbnail" />
    </div>
    <Songs
      album={props.album}
      start={props.start}
      pause={props.pause}
      currentSong={props.currentSong}
      isPlaying={props.isPlaying} />
  </div>
  );
};

export default Album;
