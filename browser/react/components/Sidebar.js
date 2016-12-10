'use strict';

import React from 'react';
import {Link} from 'react-router';

const Sidebar = () => {
  return (
    <sidebar>
      <img src="/juke.svg" className="logo" />
      <section>
        <h4 className="menu-item">
          <Link to="/albums" activeClassName="active">ALBUMS</Link>
        </h4>
      </section>
      <section>
        <h4 className="menu-item">
          <Link to="/artists" activeClassName="active">ARTISTS</Link>
        </h4>
      </section>
      <hr />
      <section>
        <h4 className="text-muted">PLAYLISTS</h4>
        <h4>
          <Link to="/playlist/new" className="btn btn-primary btn-block">
            <span className="glyphicon glyphicon-plus"></span> PLAYLIST
          </Link>
        </h4>
      </section>
    </sidebar>
  );
};

export default Sidebar;
