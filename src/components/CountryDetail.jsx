import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './CountryDetail.css';

export const CountryDetail = ({ setResults }) => {
  const { name } = useParams();
  const navigate = useNavigate();
  const [country, setCountry] = useState(null);

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${name}?fullText=true`)
      .then((res) => res.json())
      .then((data) => setCountry(data[0]))
      .catch((err) => console.error(err));
  }, [name]);

  if (!country) return <p>Loading...</p>;

  const handleBackClick = () => {
    setResults([]);
    navigate(-1);
  };

  return (
    <div className="country-detail">
      <button className="back-button" onClick={handleBackClick}>
        &larr; Back
      </button>
      <div className="country-header">
        <img
          className="country-flag"
          src={country.flags.svg}
          alt={`Flag of ${country.name.common}`}
        />
        <div className="country-info">
          <h1>{country.name.common}</h1>
          <p className="region">Region: {country.region}</p>
          <p className="capital">Capital: {country.capital?.[0]}</p>
        </div>
      </div>

      <div className="country-details">
        <div className="detail-item">
          <strong>Population:</strong> {country.population.toLocaleString()}
        </div>
        <div className="detail-item">
          <strong>Languages:</strong>{' '}
          {Object.values(country.languages || {}).join(', ')}
        </div>
        <div className="detail-item">
          <strong>Timezones:</strong> {country.timezones?.join(', ')}
        </div>
        <div className="detail-item">
          <strong>Currency:</strong>{' '}
          {country.currencies
            ? Object.keys(country.currencies).join(', ')
            : 'N/A'}
        </div>
      </div>
    </div>
  );
};
