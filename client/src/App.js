import './App.css';
import { SearchBar } from './components/header/Searchbar/SearchBar';
import Header from './components/header/Header/header.js';

function App() {
  return (
    <div className="App">
      <Header/>
      <SearchBar/>
    </div>
  );
}

export default App;
