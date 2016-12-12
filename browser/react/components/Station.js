import React from 'react';

import Songs from './Songs';

const Station = props => {

  const genreName = props.genreName;
  const songs = props.songs;
  const player = props.player;
  const toggleOne = props.toggleOne;

  return (
    <div>
      <h3>{genreName} Station</h3>
      <Songs
        songs={songs}
        player={player}
        toggleOne={toggleOne}
      />
    </div>
  );
};

export default Station;
