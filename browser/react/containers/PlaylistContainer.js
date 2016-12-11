import React, { Component } from 'react';

import store from '../store';
import Playlist from '../components/Playlist';
import { toggleOne } from '../action-creators/player';

class PlaylistContainer extends Component {

  constructor() {
    super();
    this.state = store.getState();
  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.setState(store.getState());
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  toggle(song, list) {
    store.dispatch(toggleOne(song, list));
  }

  render() {
    return (
      <Playlist
        player={this.state.player}
        selectedPlaylist={this.state.playlists.selected}
        toggleOne={this.toggle} />
    );
  }

}

export default PlaylistContainer;
