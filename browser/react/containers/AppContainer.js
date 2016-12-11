import React, {Component} from 'react';
import axios from 'axios';

import initialState from '../initialState';
import {convertAlbums, convertSongs} from '../utils';

import store from '../store';
import {play, pause, load, startSong} from '../action-creators/player';

import Sidebar from '../components/Sidebar';
import PlayerContainer from '../containers/PlayerContainer';

class AppContainer extends Component {

  constructor(props) {
    super(props);
    this.state = Object.assign({}, initialState, store.getState());
    this.selectArtist = this.selectArtist.bind(this);
  }

  componentDidMount() {

    this.unsubscribe = store.subscribe(() => {
      this.setState(store.getState());
    });

    axios.get('/api/artists/')
    .then(res => res.data)
    .then(data => this.onLoad(data));
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  onLoad (artists) {
    this.setState({
      artists: artists
    });
  }

  play() {
    store.dispatch(play());
  }

  pause() {
    store.dispatch(pause());
  }

  load(currentSong, currentSongList) {
    store.dispatch(load(currentSong, currentSongList));
  }

  startSong(song, list) {
    store.dispatch(startSong(song, list));
  }

  selectArtist(artistId) {
    Promise.all([
      axios.get(`/api/artists/${artistId}`),
      axios.get(`/api/artists/${artistId}/albums`),
      axios.get(`/api/artists/${artistId}/songs`)
    ])
    .then(response => response.map(res => res.data))
    .then(data => this.onLoadArtist(...data));
  }

  onLoadArtist(artist, albums, songs) {
    songs = convertSongs(songs);
    albums = convertAlbums(albums);
    artist.albums = albums;
    artist.songs = songs;
    this.setState({selectedArtist: artist});
  }

  render() {

    const props = Object.assign({}, this.state, {
      toggleOne: this.toggleOne,
      toggle: this.toggle,
      selectAlbum: this.selectAlbum,
      selectArtist: this.selectArtist,
      addPlaylist: this.addPlaylist,
      selectPlaylist: this.selectPlaylist,
      loadSongs: this.loadSongs,
      addSongToPlaylist: this.addSongToPlaylist
    });

    return (
      <div id="main" className="container-fluid">
        <div className="col-xs-2">
          <Sidebar playlists={this.state.playlists.list} />
        </div>
        <div className="col-xs-10">
        {
          this.props.children && React.cloneElement(this.props.children, props)
        }
        </div>
        <PlayerContainer
          currentSong={this.state.player.currentSong}
          currentSongList={this.state.player.currentSongList}
          isPlaying={this.state.player.isPlaying}
          progress={this.state.player.progress}
        />
      </div>
    );
  }
}

export default AppContainer;
