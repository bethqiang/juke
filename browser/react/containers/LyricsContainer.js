import React, { Component } from 'react';
import { connect } from 'react-redux';

import Lyrics from '../components/Lyrics';
import { fetchLyrics } from '../action-creators/lyrics';

const mapStateToProps = state => {
  return {
    text: state.lyrics.text
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchLyrics(artistQuery, songQuery) {
      dispatch(fetchLyrics(artistQuery, songQuery));
    }
  };
};

const LyricsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(
  class IntermediateLyricsContainer extends Component {

    constructor() {
      super();
      this.state = Object.assign({}, {
        artistQuery: '',
        songQuery: ''
      });
      this.setArtist = this.setArtist.bind(this);
      this.setSong = this.setSong.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    setArtist(event) {
      const artist = event.target.value;
      this.setState({ artistQuery: artist });
    }

    setSong(event) {
      const song = event.target.value;
      this.setState({ songQuery: song });
    }

    handleSubmit(event) {
      event.preventDefault();
      if (this.state.artistQuery && this.state.songQuery) {
        this.props.fetchLyrics(this.state.artistQuery, this.state.songQuery);
      }
    }

    render() {
      return (
        <Lyrics
          {...this.props}
          {...this.state}
          setArtist={this.setArtist}
          setSong={this.setSong}
          handleSubmit={this.handleSubmit} />
      );
    }

  }
);

export default LyricsContainer;
