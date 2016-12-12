import React, { Component } from 'react';
import { connect } from 'react-redux';

import FilterInput from '../components/FilterInput';
import Artists from '../components/Artists';

const mapStateToProps = state => {
  return {
    artists: state.artists
  };
};

const FilterableArtistContainer = connect(
  mapStateToProps
)(
  class IntermediateFilterableArtistContainer extends Component {

    constructor() {
      super();
      this.state = {
        inputVal: ''
      };
      this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
      const inputVal = event.target.value;
      this.setState({ inputVal });
    }

    render() {
      const inputVal = this.state.inputVal;
      const filteredArtists = this.props.artists.list.filter(artist =>
        artist.name.match(inputVal));
      return (
        <div>
          <FilterInput handleChange={this.handleChange} inputVal={inputVal} />
          <Artists artists={filteredArtists} />
        </div>
      );
    }
  }
);

export default FilterableArtistContainer;
