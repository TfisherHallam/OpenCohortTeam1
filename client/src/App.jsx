import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/header.jsx';
import Boilerplate from './components/boilerplate/boilerplate.jsx';
import ListingPage from "./pages/Listings.js";
import Selling from "./pages/Selling.js";
import Buying from "./pages/Buying.js";
import MyAccount from "./pages/MyAccount.js";
import Loginpage from "./pages/Login.js";
import Registerpage from "./pages/Register.js";
import Home from "./pages/Home.js";
import Helpcentre from './pages/Helpcentre.js';
import Privacy from './pages/Privacy.js';
import Termsofuse from './pages/Termsofuse.js';
import Page404 from './pages/404.js';
import Itemview from './components/ItemView/Itemview.jsx';
import React from 'react';
//import BurgerMenu from "./components/burgerNavigation/burgerMenu.js";


function App() {

  return (
    <>
      <div className="App">
        <Header />,
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/Listing' element={<ListingPage/>} />
          <Route path='/Sell' element={<Selling/>} />
          <Route path='/Buying' element={<Buying/>} />
          <Route path='/Itemview/:itemid' element={<Itemview/>} />
          <Route path='/Account' element={<MyAccount/>} />
          <Route path='/Login' element={<Loginpage/>} />
          <Route path='/Register' element={<Registerpage/>} />
          <Route path='/Termsofuse' element={<Termsofuse/>} />
          <Route path='/Helpcentre' element={<Helpcentre/>} />
          <Route path='/Privacy' element={<Privacy/>} />
          <Route path='/Privacy' element={<Privacy/>} />
          <Route path='/404' element={<Page404/>}/>
        </Routes>
        <Boilerplate />
      </div>
    </>);
}

export default App;