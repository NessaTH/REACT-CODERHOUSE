import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar'
import CartWidget from './components/CartWidget/CartWidget';
import ItemListContainer from './components/containers/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import ItemDetailContainer from './components/containers/ItemDetailContainer/ItemDetailContainer';


function App() {
  return (
    <div className="App">
      <NavBar>
        <CartWidget/>
      </NavBar>

      <ItemDetailContainer/>
      <ItemListContainer greeting= "¡Bienvenidos a Geschenkbox!"/>
      <ItemCount stock={10}/>

  

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
      </header>
    </div>
  );
}

export default App;
