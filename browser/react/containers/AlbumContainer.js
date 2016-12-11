import React, {Component} from 'react';
import store from '../store';
import Album from '../components/Album';

import {toggleOne} from '../action-creators/player';

class AlbumContainer extends Component {

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
      <Album
        selectedAlbum={this.state.albums.selected}
        player={this.state.player}
        toggleOne={this.toggle} />
    );
  }

}

export default AlbumContainer;
