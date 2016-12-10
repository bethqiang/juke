import React, {Component} from 'react';
import axios from 'axios';

import store from '../store';
import Lyrics from '../components/Lyrics';
import {setLyrics} from '../action-creators/lyrics';

class LyricsContainer extends Component {

  constructor() {
    super();
    this.state = Object.assign({}, {
      artistQuery: '',
      songQuery: ''
    },
    store.getState());
    this.setArtist = this.setArtist.bind(this);
    this.setSong = this.setSong.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.setState(store.getState());
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  setArtist(event) {
    const artist = event.target.value;
    this.setState({artistQuery: artist});
  }

  setSong(event) {
    const song = event.target.value;
    this.setState({songQuery: song});
  }

  handleSubmit(event) {
    event.preventDefault();
    axios.get(`/api/lyrics/${this.state.artistQuery}/${this.state.songQuery}`)
    .then(res => {
      const setLyricsAction = setLyrics(res.data.lyric);
      store.dispatch(setLyricsAction);
    });
    console.log(this.state);
  }

  render() {
    return (
      <Lyrics
        text={this.state.text}
        setArtist={this.setArtist}
        setSong={this.setSong}
        artistQuery={this.state.artistQuery}
        songQuery={this.state.songQuery}
        handleSubmit={this.handleSubmit} />
    );
  }

}

export default LyricsContainer;
