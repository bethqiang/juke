import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRedirect } from 'react-router';

import axios from 'axios';

import store from './store';
import {receiveAlbums, getAlbumById} from './action-creators/albums';
import {receiveArtists, getArtistById} from './action-creators/artists';
import {receivePlaylists, getPlaylistById} from './action-creators/playlists';

import AppContainer from './containers/AppContainer';
import AlbumsContainer from './containers/AlbumsContainer';
import Albums from './components/Albums';
import AlbumContainer from './containers/AlbumContainer';
import FilterableArtistsContainer from './containers/FilterableArtistsContainer';
import ArtistContainer from './containers/ArtistContainer';
import Songs from './components/Songs';
import NewPlaylistContainer from './containers/NewPlaylistContainer';
import PlaylistContainer from './containers/PlaylistContainer';
import LyricsContainer from './containers/LyricsContainer';

const onAppEnter = function() {
  Promise.all([
    axios.get('/api/albums'),
    axios.get('/api/artists'),
    axios.get('/api/playlists')
  ])
  .then(responses => responses.map(res => res.data))
  .then(([albums, artists, playlists]) => {
    store.dispatch(receiveAlbums(albums));
    store.dispatch(receiveArtists(artists));
    store.dispatch(receivePlaylists(playlists));
  });
};

const onAlbumEnter = function(nextRouterState) {
  const albumId = nextRouterState.params.albumId;
  store.dispatch(getAlbumById(albumId));
};
const onArtistEnter = function(nextRouterState) {
  const artistId = nextRouterState.params.artistId;
  store.dispatch(getArtistById(artistId));
};
const onPlaylistEnter = function(nextRouterState) {
  const playlistId = nextRouterState.params.playlistId;
  store.dispatch(getPlaylistById(playlistId));
};

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={AppContainer} onEnter={onAppEnter}>
      <IndexRedirect to="/albums" />
      <Route path="/albums" component={AlbumsContainer} />
      <Route path="/albums/:albumId" component={AlbumContainer} onEnter={onAlbumEnter} />
      <Route path="/artists" component={FilterableArtistsContainer} />
      <Route path="/artists/:artistId" component={ArtistContainer} onEnter={onArtistEnter}>
        <Route path="albums" component={Albums} />
        <Route path="songs" component={Songs} />
      </Route>
      <Route path="/playlists/new" component={NewPlaylistContainer} />
      <Route path="/playlists/:playlistId" component={PlaylistContainer} onEnter={onPlaylistEnter} />
      <Route path="/lyrics" component={LyricsContainer} />
    </Route>
  </Router>,
  document.getElementById('app')
);
