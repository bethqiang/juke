'use strict';

import React from 'react';

const FilterInput = (props) => {

  const handleChange = props.handleChange;
  const inputVal = props.inputVal;

  return (
    <form className="form-group" style={{marginTop: '20px'}}>
      <input
        className="form-control"
        placeholder="Enter artist name"
        value={inputVal}
        onChange={handleChange}
      />
    </form>
  );
};

export default FilterInput;
