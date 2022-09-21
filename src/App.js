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
      <BrowserRouter>
        <NavBar>
          <CartWidget/>
        </NavBar>
        <Routes>
          <Route path="/" element={<ItemListContainer/>}/>
          <Route path="contact" element={<div>Contact</div>}/>
          <Route path="/detail/:id" element={<ItemDetailContainer/>}/>
          <Route path="/category/:category" element={<ItemListContainer greeting= "¡Bienvenidos a Geschenkbox!"/>}/>
        </Routes>
      </BrowserRouter>

      {/* <header className="App-header">
        
        
      </header> */}
    </div>
  );
}

export default App;
