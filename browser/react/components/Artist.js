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

    const artist = this.props.selectedArtist;
    const albums = artist.albums || [];
    const songs = artist.songs || [];
    const children = this.props.children;

    return (
      <div>
        <h3>{ artist.name }</h3>
        <ul className="nav nav-tabs">
          <li><Link to={`/artists/${artist.id}/albums`}>ALBUMS</Link></li>
          <li><Link to={`/artists/${artist.id}/songs`}>SONGS</Link></li>
        </ul>
        {
          children && React.cloneElement(children, Object.assign({}, this.props, {
            albums: albums,
            songs: songs
          }))
        }
      </div>
    );
  }
}

export default Artist;
