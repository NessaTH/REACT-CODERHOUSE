import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar.js';
import CartWidget from './components/CartWidget';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar>
        <CartWidget/>
      </NavBar>
      <ItemListContainer greeting= "¡Bienvenidos a Geschenkbox!"/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
      </header>
    </div>
  );
}

export default App;
