import React from 'react';

const AddSong = (props) => {

  const songs = props.songs;
  const error = props.error;
  const handleChange = props.handleChange;
  const handleSubmit = props.handleSubmit;

  return (
    <div className="well">
      <form className="form-horizontal" noValidate name="songSelect" onSubmit={handleSubmit}>
        <fieldset>
          <legend>Add to Playlist</legend>
          <div className="form-group">
            <label htmlFor="song" className="col-xs-2 control-label">Song</label>
            <div className="col-xs-10">
              <select
                className="form-control"
                name="song"
                required
                onChange={handleChange}>
                {
                  songs && songs.map(song => (
                    <option key={song.id} value={song.id}>{song.name}</option>
                  ))
                  }
              </select>
            </div>
          </div>
          <div className="form-group">
            <div className="col-xs-10 col-xs-offset-2">
              {error ? <div className="alert alert-warning">Duplicate songs cannot be added to a playlist.</div> : null}
              <button type="submit" className="btn btn-success">Add Song</button>
            </div>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default AddSong;
