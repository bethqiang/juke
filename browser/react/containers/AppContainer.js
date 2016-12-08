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
      currentSong: {}
    };
    this.handleClick = this.handleClick.bind(this);
    this.deselectAlbum = this.deselectAlbum.bind(this);
    this.start = this.start.bind(this);
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

  start(song) {
    audio.src = `api/songs/${song.id}/audio`;
    // audio.src = 'https://learndotresources.s3.amazonaws.com/workshop/5616dbe5a561920300b10cd7/Dexter_Britain_-_03_-_The_Stars_Are_Out_Interlude.mp3';
    audio.pause();
    audio.load();
    audio.play();
    this.setState({currentSong: song});
  }

  render() {
    return(
      <div id="main" className="container-fluid">
        <Sidebar deselectAlbum={this.deselectAlbum}/>
        <div className="col-xs-10">
          {this.state.album.id ? <Album album={this.state.album} start={this.start} currentSong={this.state.currentSong}/> : <Albums albums={this.state.albums} handleClick={this.handleClick} />}
        </div>
        <Footer />
      </div>
    );
  }
}

export default AppContainer;
