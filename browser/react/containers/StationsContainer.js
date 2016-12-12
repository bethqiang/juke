import React from 'react';
import { connect } from 'react-redux';

import store from '../store';
import Stations from '../components/stations';

const convertSongsToStations = songsArray => {
  const stations = {};
  songsArray.forEach(song => {
    const genre = song.genre;
    stations[genre] = stations[genre] || [];
    stations[genre].push(song);
  });
  return stations;
};

const mapStateToProps = state => {
  return {
    stations: convertSongsToStations(state.songs)
  };
};

const mapDispatchToProps = dispatch => {
  return {

  };
};

const StationsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Stations);

export default StationsContainer;
