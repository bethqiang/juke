import React, { Component } from 'react';

import store from '../store';
import FilterInput from '../components/FilterInput';
import Artists from '../components/Artists';

class FilterableArtistContainer extends Component {

  constructor() {
    super();
    this.state = Object.assign({
      inputVal: ''
    }, store.getState().artists);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.setState(store.getState().artists);
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  handleChange(event) {
    const inputVal = event.target.value;
    this.setState({ inputVal });
  }

  render() {

    const inputVal = this.state.inputVal;
    const filteredArtists = this.state.list.filter(artist =>
      artist.name.match(inputVal));

    return (
      <div>
        <FilterInput handleChange={this.handleChange} inputVal={inputVal} />
        <Artists artists={filteredArtists} />
      </div>
    );
  }

}

export default FilterableArtistContainer;
