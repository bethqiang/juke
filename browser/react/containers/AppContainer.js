'use strict';

import React, {Component} from 'react';

import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

class AppContainer extends Component {

  constructor() {
    super();
    this.state = {
      text: 'Hello world!'
    }
  }

  render() {
    return(
      <div id="main" className="container-fluid">
        <Sidebar />
        <Footer />
      </div>
    );
  }
}

export default AppContainer;
