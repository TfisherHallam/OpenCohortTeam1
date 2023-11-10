import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/header.js';
import Boilerplate from './components/boilerplate/boilerplate.jsx';
import Listings from "./pages/Listings.js";
import Selling from "./pages/Selling.js";
import Buying from "./pages/Buying.js";
import MyAccount from "./pages/MyAccount.js";
import Loginpage from "./pages/Login.js";
import Home from "./pages/Home.js";
import Helpcentre from './pages/Helpcentre.js';
import Privacy from './pages/Privacy.js';
import Termsofuse from './pages/Termsofuse.js';
import BurgerMenu from "./components/burgerNavigation/burgerMenu.js";


function App() {
<<<<<<< HEAD

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
    <Header />
    <BurgerMenu />
    <PageComponent  />
    <Boilerplate  />
    <Footer  />
  </div>);
=======
  return (
    <>
      <Header />
      <div className="App">
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/Listing' element={<Listings/>} />
          <Route path='/Sell' element={<Selling/>} />
          <Route path='/Buying' element={<Buying/>} />
          <Route path='/Account' element={<MyAccount/>} />
          <Route path='/Login' element={<Loginpage/>} />
          <Route path='/Termsofuse' element={<Termsofuse/>} />
          <Route path='/Helpcentre' element={<Helpcentre/>} />
          <Route path='/Privacy' element={<Privacy/>} />
        </Routes>
        <Boilerplate />
      </div>
    </>);
>>>>>>> 84808830047452fe216e49b390fab916dfa7064c
}

export default App;