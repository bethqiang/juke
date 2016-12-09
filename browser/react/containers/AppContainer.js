'use strict';

import React, {Component} from 'react';
import axios from 'axios';

import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import Album from '../components/Album';
import Albums from '../components/Albums';

const audio = document.createElement('audio');

class AppContainer extends Component {

  constructor() {
    super();
    this.state = {
      albums: [],
      album: {},
      currentSong: {},
      currentSongList: [],
      isPlaying: false,
      progress: 0
    };
    this.handleClick = this.handleClick.bind(this);
    this.deselectAlbum = this.deselectAlbum.bind(this);
    this.start = this.start.bind(this);
    this.pause = this.pause.bind(this);
    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);
  }

  componentDidMount() {
    let albums;
    axios.get('api/albums')
    .then(res => res.data)
    .then(albumsFromServer => {
      albums = albumsFromServer.map(album => {
        album.imageUrl = `/api/albums/${album.id}/image`;
        return album;
      });
      this.setState({albums: albums});
    })
    .catch(console.error.bind(console));

    // when song ends, play the next song
    audio.addEventListener('ended', () => this.next());

    // progress bar
    audio.addEventListener('timeupdate', () => {
      this.setState({
        progress: 100 * audio.currentTime / audio.duration
      });
    });
  }

  handleClick(album) {
    axios.get(`api/albums/${album.id}`)
    .then(res => res.data)
    .then(albumFromServer => {
      albumFromServer.imageUrl = `/api/albums/${album.id}/image`;
      this.setState({album: albumFromServer});
    })
    .catch(console.error.bind(console));
  }

  deselectAlbum() {
    this.setState({album: {}});
  }

  start(song, list) {
    audio.src = `api/songs/${song.id}/audio`;
    audio.pause();
    audio.load();
    audio.play();
    this.setState({
      currentSong: song,
      currentSongList: list,
      isPlaying: true
    });
  }

  pause() {
    audio.pause();
    this.setState({isPlaying: false});
  }

  skip(interval, {currentSongList, currentSong}) {
    let idx = currentSongList.map(song => song.id).indexOf(currentSong.id);
    const mod = (num, m) => ((num % m) + m) % m;
    idx = mod(idx + interval, currentSongList.length);
    const next = currentSongList[idx];
    return [next, currentSongList];
  }

  next() {
    this.start(...this.skip(1, this.state));
  }

  prev() {
    this.start(...this.skip(-1, this.state));
  }

  render() {
    return (
      <div id="main" className="container-fluid">
        <Sidebar deselectAlbum={this.deselectAlbum}/>
        <div className="col-xs-10">
          {this.state.album.id ?
            <Album
              album={this.state.album}
              start={this.start}
              pause={this.pause}
              currentSong={this.state.currentSong}
              isPlaying={this.state.isPlaying}/> :
            <Albums
              albums={this.state.albums}
              handleClick={this.handleClick} />}
        </div>
        {this.state.currentSong.id ?
          <Footer
          start={this.start}
          pause={this.pause}
          currentSong={this.state.currentSong}
          currentSongList={this.state.currentSongList}
          isPlaying={this.state.isPlaying}
          next={this.next}
          prev={this.prev}
          progress={this.state.progress} /> : null}
      </div>
    );
  }
}

export default AppContainer;
