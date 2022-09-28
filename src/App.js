import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar'
import CartWidget from './components/CartWidget/CartWidget';
import ItemListContainer from './components/containers/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/containers/ItemDetailContainer/ItemDetailContainer';
import './App.css';
import { CartProvider } from './context/CartProvider';
import Cart from './components/Cart/Cart';

function App() {
  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <NavBar>
            <CartWidget/>
          </NavBar>
          <Routes>
            <Route path="/" element={<ItemListContainer greeting= "¡Bienvenidos a Geschenkbox!"/>}/>
            <Route path="contact" element={<div>Contact</div>}/>
            <Route path="/detail/:id" element={<ItemDetailContainer/>}/>
            <Route path="/category/:category" element={<ItemListContainer />}/>
            <Route path="cart" element={<Cart/>}/>
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
