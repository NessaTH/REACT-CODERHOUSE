import { useContext } from "react"
import { Link } from "react-router-dom";
import { CartContext } from "../../context/cartContext"

const Cart = () => {

    const {cart, addToCart, removeItem} = useContext(CartContext);
    console.log('cart', cart);
  return (<>
    <div>
        <h2 style={{color : "white"}}>Cart</h2>
        {cart.length === 0 ? (
            <>
                <h2>No hay productos en tu carrito</h2>
                <Link to={"/"}>Volver a inicio</Link>       
            </>
        )
        : (
            <>
                {
                    cart.map((item) => (
                        <div key={item.id}>
                            <h3>{item.name}</h3>
                            <h2>{item.price}</h2>
                            <p>{item.quantity}</p>
                            <button onClick={() => removeItem(item.id)}>Eliminar producto</button>
                        </div>
                    ))
                }            
            </>
        )}

    </div>

  
  </>
    
  )
}

export default Cart;