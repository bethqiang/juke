'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRedirect } from 'react-router';

import AppContainer from './containers/AppContainer';
import Albums from './components/Albums';
import Album from './components/Album';
import FilterableArtistsContainer from './containers/FilterableArtistsContainer';
import Artist from './components/Artist';
import Songs from './components/Songs';
import NewPlaylistContainer from './containers/NewPlaylistContainer';
import Playlist from './components/Playlist';
import LyricsContainer from './containers/LyricsContainer';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={AppContainer}>
      <IndexRedirect to="/albums" />
      <Route path="/albums" component={Albums} />
      <Route path="/albums/:albumId" component={Album} />
      <Route path="/artists" component={FilterableArtistsContainer} />
      <Route path="/artists/:artistId" component={Artist}>
        <Route path="albums" component={Albums} />
        <Route path="songs" component={Songs} />
      </Route>
      <Route path="/playlists/new" component={NewPlaylistContainer} />
      <Route path="/playlists/:playlistId" component={Playlist} />
      <Route path="/lyrics" component={LyricsContainer} />
    </Route>
  </Router>,
  document.getElementById('app')
);
