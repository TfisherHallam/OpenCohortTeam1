import './App.css';
import { SearchBar } from './components/SearchBar/SearchBar';
import Header from './components/Header/header.js';
import { useState } from 'react';
import { SearchResultsList } from './components/SearchBar/SearchResultsList';

function App() {

  const [results, setResults] = useState([]);
  return (
    <div className="App">
      <Header />
      <SearchBar setResults={setResults}/>
      <SearchResultsList results={results}/>
    </div>
  );
}
export default App;
