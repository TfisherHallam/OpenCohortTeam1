import React from 'react';
import Header from '../components/Header/header.jsx';
import SearchResults from "../components/results/results.jsx";


function Buying() {
  return (
    <div>
      <Header />
      <h1 style={{ textAlign: 'center' }}>Buying Page</h1>
      <SearchResults />
    </div>
  )
}
export default Buying;