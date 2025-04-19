import React, { useState } from 'react';

import { FaSearch } from 'react-icons/fa';
import './SearchBar.css';

export const SearchBar = ({ setResults }) => {
  const [input, setInput] = useState('');

  const fetchData = (value) => {
    fetch('https://restcountries.com/v3.1/all')
      .then((response) => response.json())
      .then((json) => {
        const results = json.filter((country) => {
          return (
            value &&
            country &&
            country.name &&
            country.name.common &&
            country.name.common.toLowerCase().includes(value.toLowerCase())
          );
        });
        setResults(results);
      });
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <div className="input-wrapper">
      <FaSearch id="search-icon" />
      <input
        placeholder="Type to search..."
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};
