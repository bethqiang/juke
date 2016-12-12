import { connect } from 'react-redux';

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

const StationsContainer = connect(
  mapStateToProps
)(Stations);

export default StationsContainer;
