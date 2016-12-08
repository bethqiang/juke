'use strict';

import React, {Component} from 'react';
import axios from 'axios';

import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import Albums from '../components/Albums';

class AppContainer extends Component {

  constructor() {
    super();
    this.state = {
      albums: []
    };
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
      this.setState({ albums: albums });
    })
    .catch(console.error.bind(console));
  }

  render() {
    return(
      <div id="main" className="container-fluid">
        <Sidebar />
        <div className="col-xs-10">
          <Albums albums={this.state.albums} />
        </div>
        <Footer />
      </div>
    );
  }

}

export default AppContainer;
