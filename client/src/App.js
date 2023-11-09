import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/header.js';
import Boilerplate from './components/boilerplate/boilerplate.jsx';
import Listings from "./pages/Listings.js";
import Buying from "./pages/Buying.js";
import MyAccount from "./pages/MyAccount.js";
import Home from "./pages/Home.js";
import Helpcentre from './pages/Helpcentre.js';
import Privacy from './pages/Privacy.js';
import Termsofuse from './pages/Termsofuse.js';

function App() {
  return (
    <>
      <Header />
      <div className="App">
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/Sell' element={<Listings/>} />
          <Route path='/Buying' element={<Buying/>} />
          <Route path='/Account' element={<MyAccount/>} />
          <Route path='/Termsofuse' element={<Termsofuse/>} />
          <Route path='/Helpcentre' element={<Helpcentre/>} />
          <Route path='/Privacy' element={<Privacy/>} />
        </Routes>
        <Boilerplate />
      </div>
    </>);
}

export default App;