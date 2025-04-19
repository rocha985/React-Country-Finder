import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import { SearchBar } from './components/SearchBar';
import { SearchResultsList } from './components/SearchResultsList';
import { CountryDetail } from './components/CountryDetail';
import logo from './components/assets/images/Country-4-18-2025.png';

function App() {
  const [results, setResults] = useState([]);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <div className='home'>
                <header className="app-header">
                  <img src={logo} alt="Logo" className="app-logo" />
                </header>

                <div className="search-bar-container">
                  <SearchBar setResults={setResults} />
                  <SearchResultsList results={results} />
                </div>
              </div>
            }
          />
          <Route path="/country/:name" element={<CountryDetail setResults={setResults}/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
