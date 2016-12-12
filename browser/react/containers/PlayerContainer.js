import React, { Component } from 'react';
import { connect } from 'react-redux';

import Player from '../components/Player';
import AUDIO from '../audio';
import { prev, next, progressBar, toggleOne } from '../action-creators/player';

const mapStateToProps = state => {
  return {
    currentSong: state.player.currentSong,
    currentSongList: state.player.currentSongList,
    isPlaying: state.player.isPlaying,
    progress: state.player.progress
  };
};

const mapDispatchToProps = dispatch => {
  return {
    next() {
      dispatch(next());
    },
    prev() {
      dispatch(prev());
    },
    setProgress() {
      dispatch(progressBar(AUDIO.currentTime / AUDIO.duration));
    },
    toggleOne(song, list) {
      dispatch(toggleOne(song, list));
    }
  };
};

const PlayerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(
  class IntermediatePlayerContainer extends Component {
    componentDidMount () {
      AUDIO.addEventListener('ended', this.props.next);
      AUDIO.addEventListener('timeupdate', () => {
        this.props.setProgress(AUDIO.currentTime / AUDIO.duration);
      });
    }
    render () {
      return <Player {...this.props} />;
    }
  }
);

export default PlayerContainer;
