'use strict';

import React, {Component} from 'react';

import Albums from './Albums';
import Songs from './Songs';

class Artist extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount () {
    const artistId = this.props.params.artistId;
    const selectArtist = this.props.selectArtist;
    selectArtist(artistId);
  }

  render() {
    const artist = this.props.artist;
    return (
      <div>
        <h3>{artist.name}</h3>
        <Albums albums={artist.albums} />
        <h3>Songs</h3>
        <Songs currentSong={this.props.currentSong} songs={artist.songs} />
      </div>
    );
  }
}

export default Artist;
