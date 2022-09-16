import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar'
import CartWidget from './components/CartWidget/CartWidget';
import ItemListContainer from './components/containers/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import ItemDetailContainer from './components/containers/ItemDetailContainer/ItemDetailContainer';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <NavBar>
        <CartWidget/>
      </NavBar>

      <ItemDetailContainer/>
      <ItemListContainer greeting= "¡Bienvenidos a Geschenkbox!"/>
      <ItemCount stock={10}/> */}

      <BrowserRouter>
        <NavBar>
          <CartWidget/>
        </NavBar>
        <Routes>
          <Route path="/" element={<ItemListContainer/>}/>
          <Route path="contact" element={<div>Contact</div>}/>
          <Route path="detail/:id" element={<ItemDetailContainer/>}/>
          <Route path="/category/:category" element={<ItemListContainer/>}/>
        </Routes>
      </BrowserRouter>

      {/* <header className="App-header">
        
        
      </header> */}
    </div>
  );
}

export default App;
