'use strict';

import React from 'react';

import Songs from './Songs';

const Album = (props) => {

  const album = props.selectedAlbum;
  // const currentSong = this.props.currentSong;
  // const isPlaying = this.props.isPlaying;
  const player = props.player;
  const toggleOne = props.toggleOne;

  return (
    <div className="album">
      <div>
        <h3>{album.name}</h3>
        <img src={album.imageUrl} className="img-thumbnail" />
      </div>
      <Songs
        songs={album.songs}
        // currentSong={currentSong}
        // isPlaying={isPlaying}
        player={player}
        toggleOne={toggleOne} />
    </div>
  );
};

export default Album;
