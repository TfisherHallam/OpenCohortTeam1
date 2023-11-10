import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/header.js';
import Boilerplate from './components/boilerplate/boilerplate.jsx';
import Listings from "./pages/Listings.js";
import Selling from "./pages/Selling.js";
import Buying from "./pages/Buying.js";
import MyAccount from "./pages/MyAccount.js";
import Loginpage from "./pages/Login.js";
import Registerpage from "./pages/Register.js";
import Home from "./pages/Home.js";
import Helpcentre from './pages/Helpcentre.js';
import Privacy from './pages/Privacy.js';
import Termsofuse from './pages/Termsofuse.js';
import BurgerMenu from "./components/burgerNavigation/burgerMenu.js";


function App() {

  return (
    <>
      <Header />
      <BurgerMenu />
      <div className="App">
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/Listing' element={<Listings/>} />
          <Route path='/Sell' element={<Selling/>} />
          <Route path='/Buying' element={<Buying/>} />
          <Route path='/Account' element={<MyAccount/>} />
          <Route path='/Login' element={<Loginpage/>} />
          <Route path='/Register' element={<Registerpage/>} />
          <Route path='/Termsofuse' element={<Termsofuse/>} />
          <Route path='/Helpcentre' element={<Helpcentre/>} />
          <Route path='/Privacy' element={<Privacy/>} />
        </Routes>
        <Boilerplate />
      </div>
    </>);
}

export default App;