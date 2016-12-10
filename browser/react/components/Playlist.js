'use strict';

import React, {Component} from 'react';

import Songs from './Songs';

class Playlist extends Component {

  constructor(props){
    super(props);
  }

  componentDidMount() {
    const playlistId = this.props.params.playlistId;
    const selectPlaylist = this.props.selectPlaylist;
    selectPlaylist(playlistId);
  }

  componentWillReceiveProps(nextProps) {
    const nextPlaylistId = nextProps.params.playlistId;
    const currentPlaylistId = this.props.params.playlistId;
    const selectPlaylist = this.props.selectPlaylist;
    if (nextPlaylistId !== currentPlaylistId) selectPlaylist(nextPlaylistId);
  }

  render() {

    const playlist = this.props.selectedPlaylist;

    return (
      <div>
        <h3>{playlist.name}</h3>
        <Songs {...this.props} songs={playlist.songs} />
        {playlist.songs && !playlist.songs.length && <small>No songs.</small>}
        <hr/>
      </div>
    );
  }
}

export default Playlist;
