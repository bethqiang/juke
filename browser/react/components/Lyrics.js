import React from 'react';

const Lyrics = (props) => {

  const text = props.text; // lyrics
  const setArtist = props.setArtist;
  const artistQuery = props.artistQuery;
  const setSong = props.setSong;
  const songQuery = props.songQuery;
  const handleSubmit = props.handleSubmit;

  return (
    <div style={{marginTop: '20px'}}>
      <form onSubmit={handleSubmit}>
        <div className="form-group row">
          <div className="col-md-6 col-xs-12">
            <label className="col-xs-2 control-label">Artist</label>
            <input
              className="form-control"
              type="text"
              value={artistQuery}
              placeholder="Enter an artist name"
              onChange={setArtist}
            />
          </div>
          <div className="col-md-6 col-xs-12">
            <label className="col-xs-2 control-label">Song</label>
            <input
              className="form-control"
              type="text"
              value={songQuery}
              placeholder="Enter a song name"
              onChange={setSong}
            />
          </div>
        </div>
        <pre>{text || 'Search above!'}</pre>
        <button type="submit" className="btn btn-success">
          Search for Lyrics
        </button>
      </form>
    </div>
  );
};

export default Lyrics;
