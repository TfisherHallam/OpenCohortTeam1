import './App.css';
import {Route, Routes, Navigate, Link } from 'react-router-dom';
import {SearchBar} from './components/SearchBar/SearchBar';
import Header from './components/Header/header.js';
//TF adds - needs to be incorporated into the header
import Main from './components/Main/index.jsx';
import Signup from './components/signup/signup.jsx';
import Login from './components/login/login.jsx';
import {useState} from 'react';
import {SearchResultsList} from './components/SearchBar/SearchResultsList';
import Listings from "./pages/Listings";
import Buying from "./pages/Buying";
import MyAccount from "./pages/MyAccount";
import Home from "./pages/Home";

function App() {

  const user = localStorage.getItem("token");
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

  return (
    <Routes>
      {user && <Route path="/" exact element={<Main/>}/>}
      <Route path="/signup" exact element={<Signup/>}/>
      <Route path="/login" exact element={<Login/>}/>
      <Route path="/" exact element={<Navigate replace to = "/login"/>}/>
    </Routes>
  );
}

export default App;
