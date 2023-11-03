import './App.css';
import {SearchBar} from './components/SearchBar/SearchBar';
import Header from './components/Header/header.js';
import {useState} from 'react';
import {SearchResultsList} from './components/SearchBar/SearchResultsList';
import Listings from "./pages/Listings";
import Buying from "./pages/Buying";
import MyAccount from "./pages/MyAccount";
import Home from "./pages/Home";

function App() {

  const [results, setResults] = useState([]);
  let PageComponent; // This will be the component that changes for which page we are on;

  switch (window.location.pathname) { // Determines what page we are on,
      // and carries out the switch statement accordingly
    case "/":
      PageComponent = Home;
      break;
    case "/Listing":
      PageComponent = Listings;
      break;
    case "/Buying":
      PageComponent = Buying;
      break;
    case "/Account":
      PageComponent = MyAccount;
      break;
    default:
      window.location.pathname = "/"; // If we are on an unknown page, redirect to home
      break;
  }

  return (<div className="App">
        <Header/>
        <SearchBar setResults={setResults}/>
        <PageComponent/>
        <SearchResultsList results={results}/>
      </div>);
}

export default App;