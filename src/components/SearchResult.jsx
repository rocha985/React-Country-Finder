import React from 'react';
import { useNavigate } from 'react-router-dom';

import './SearchResult.css';

export const SearchResult = ({ result }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/country/${encodeURIComponent(result.name.common)}`);
  };

  return (
    <div className="search-result" onClick={handleClick}>
      <img src={result.flags?.png} alt={`Flag of ${result.name?.common}`} />
      <p>{result.name?.common}</p>
    </div>
  );
};
