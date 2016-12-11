import React from 'react';
import { Link } from 'react-router';

const Sidebar = props => {

  const playlists = props.playlists;

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
      <section>
        <h4 className="menu-item">
          <Link to="/lyrics" activeClassName="active">LYRICS</Link>
        </h4>
      </section>
      <hr />
      <section>
        <h4 className="text-muted">PLAYLISTS</h4>
        <ul className="list-unstyled">
        {playlists.map(playlist => (
            <li key={playlist.id} className="playlist-item menu-item">
              <Link to={`/playlists/${playlist.id}`}>{playlist.name}</Link>
            </li>
          ))}
        </ul>
        <h4>
          <Link to="/playlists/new" className="btn btn-primary btn-block">
            <span className="glyphicon glyphicon-plus"></span> PLAYLIST
          </Link>
        </h4>
      </section>
    </sidebar>
  );
};

export default Sidebar;
