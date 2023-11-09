import './App.css';
import {SearchBar} from './components/SearchBar/SearchBar';
import Header from './components/Header/header.js';
import Footer from './components/Foot/footer.jsx';
import Boilerplate from './components/boilerplate/boilerplate.jsx';
import {useState} from 'react';
import {SearchResultsList} from './components/SearchBar/SearchResultsList';
import Listings from "./pages/Listings.js";
import Buying from "./pages/Buying.js";
import MyAccount from "./pages/MyAccount.js";
import Home from "./pages/Home.js";
import Helpcentre from './pages/Helpcentre.js';
import Privacy from './pages/Privacy.js';
import Termsofuse from './pages/Termsofuse.js';

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
    case "/Termsofuse":
      PageComponent = Termsofuse;
      break;
    case "/Helpcentre":
      PageComponent = Helpcentre;
      break;
    case "/Privacy":
      PageComponent = Privacy;
      break;
    default:
      window.location.pathname = "/"; // If we are on an unknown page, redirect to home
      break;
  }

  return (<div className="App">
<Header/>
<PageComponent/>
        <Boilerplate/>
        <Footer/>
      </div>);
}


export default App;