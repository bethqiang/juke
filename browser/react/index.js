'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRedirect } from 'react-router';

import AppContainer from './containers/AppContainer';
import Albums from './components/Albums';
import Album from './components/Album';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={AppContainer}>
      <IndexRedirect to="/albums" />
      <Route path="/albums" component={Albums} />
      <Route path="albums/:albumId" component={Album} />
    </Route>
  </Router>,
  document.getElementById('app')
);
