import React from 'react';
import './index.css';

import SelectSearch, { fuzzySearch } from 'react-select-search';

function Select({
  options, value, handleChange, placeholder, error,
}) {
  return (
    <div className="form__input">
      <SelectSearch
        options={options}
        value={value}
        onChange={handleChange}
        search
        filterOptions={fuzzySearch}
        placeholder={placeholder}
      />

      <p className="error__message">
        {error}
      </p>
    </div>
  );
}

export default Select;
