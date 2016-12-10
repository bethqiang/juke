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
      <Route path="/playlist/new" component={NewPlaylistContainer} />
    </Route>
  </Router>,
  document.getElementById('app')
);
