'use strict';

import React from 'react';

const NewPlaylist = (props) => {

  const handleSubmit = props.handleSubmit;
  const playlistName = props.playlistName;
  const handleChange = props.handleChange;
  const valid = props.valid;
  const message = props.message;

  return (
  <div className="well">
    <form className="form-horizontal" onSubmit={handleSubmit}>
      <fieldset>
        <legend>New Playlist</legend>
        <div className="form-group">
          <label className="col-xs-2 control-label">Name</label>
          <div className="col-xs-10">
            <input
              className="form-control"
              type="text"
              value={playlistName}
              onChange={handleChange} />
          </div>
        </div>
        <div className="form-group">
          <div className="col-xs-10 col-xs-offset-2">
            {message ? <div className="alert alert-warning">{message}</div> : null}
            <button
              type="submit"
              className="btn btn-success"
              disabled={!valid} >
              Create Playlist
            </button>
          </div>
        </div>
      </fieldset>
    </form>
  </div>
  );
};

export default NewPlaylist;
