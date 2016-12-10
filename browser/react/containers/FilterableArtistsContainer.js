'use strict';

import React, {Component} from 'react';

import FilterInput from '../components/FilterInput';
import Artists from '../components/Artists';

class FilterableArtistContainer extends Component {

  constructor() {
    super();
    this.state = {
      inputVal: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const inputVal = event.target.value;
    this.setState({inputVal});
  }

  render() {

    const inputVal = this.state.inputVal;
    const filteredArtists = this.props.artists.filter(artist =>
      artist.name.match(inputVal));

    return (
      <div>
        <FilterInput handleChange={this.handleChange} />
        <Artists artists={filteredArtists} />
      </div>
    );
  }

}

export default FilterableArtistContainer;
