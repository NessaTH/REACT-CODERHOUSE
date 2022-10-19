import carrito from "./media/carrito.png"
import "./CartWidget.css"
import { Link } from "react-router-dom";
import { CartContext } from "../../context/cartContext";
import { useContext } from "react";

const CartWidget = () => {
  const {totalItemsCart} = useContext(CartContext);
  return (
    <>
    {
      totalItemsCart() > 0 ? (
        <>
          <div> 
            <Link to="/cart" >
              <img src={carrito} alt="Icono de regalo" className="iconoRegalo"/>
              <span>{totalItemsCart () }</span>
            </Link>
          </div>
        </>
      ) : 
      (
        <div></div>
      )
    }
    </>
  )
};

export default CartWidget;