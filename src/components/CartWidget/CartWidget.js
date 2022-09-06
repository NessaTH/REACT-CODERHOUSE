import carrito from "./media/carrito.png"
import "./CartWidget.css"

const CartWidget = () => {
  return (
    <div> 
      <a href="#">
        <img src={carrito} alt="Icono de regalo" className="iconoRegalo"/>
      </a>
    </div>
  )
};

export default CartWidget