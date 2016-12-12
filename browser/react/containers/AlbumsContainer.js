import { connect } from 'react-redux';

import Albums from '../components/Albums';

const mapStateToProps = state => {
  return {
    albums: state.albums.list
  };
};

const AlbumsContainer = connect(
  mapStateToProps
)(Albums);

export default AlbumsContainer;
