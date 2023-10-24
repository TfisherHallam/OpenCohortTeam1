import './App.css';
import { SearchBar } from './components/header/searchbar/SearchBar';
import Header from './components/header/header.js';

function App() {
  return (
    <div className="App">
      <Header/>
      <SearchBar/>
    </div>
  );
}

export default App;
