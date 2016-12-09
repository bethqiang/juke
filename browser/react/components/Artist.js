'use strict';

import React, {Component} from 'react';
import {Link} from 'react-router';

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
    const children = this.props.children;
    const propsToPassToChildren = {
      albums: artist.albums,
      songs: artist.songs,
      currentSong: this.props.currentSong,
      isPlaying: this.props.isPlaying,
      toggleOne: this.props.toggleOne
    };

    return (
      <div>
        <h3>{artist.name}</h3>
        <ul className="nav nav-tabs">
          <li><Link to={`/artists/${artist.id}/albums`}>ALBUMS</Link></li>
          <li><Link to={`/artists/${artist.id}/songs`}>SONGS</Link></li>
        </ul>
        {children && React.cloneElement(children, propsToPassToChildren)}
      </div>
    );
  }
}

export default Artist;
