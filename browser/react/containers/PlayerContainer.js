import React, {Component} from 'react';
import AUDIO from '../audio';
import store from '../store';
import {prev, next, progressBar, toggleOne} from '../action-creators/player';
import Player from '../components/Player';

class PlayerContainer extends Component {

  constructor() {
    super();
    this.state = store.getState().player;
    this.toggle = this.toggle.bind(this);
  }

  componentDidMount() {

    AUDIO.addEventListener('ended', this.next);
    AUDIO.addEventListener('timeupdate', () => {
      store.dispatch(progressBar(AUDIO.currentTime / AUDIO.duration));
    });

    this.unsubscribe = store.subscribe(() => {
      this.setState(store.getState().player);
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  next() {
    store.dispatch(next());
  }

  prev() {
    store.dispatch(prev());
  }

  toggle() {
    store.dispatch(toggleOne(this.state.currentSong, this.state.currentSongList));
  }

  render() {
    return (
      <Player
        {...this.state}
        next={this.next}
        prev={this.prev}
        toggleOne={this.toggle} />
    );
  }

}

export default PlayerContainer;
