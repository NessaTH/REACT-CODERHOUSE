import { useContext, useState } from "react"
import { Link } from "react-router-dom";
import { CartContext } from "../../context/cartContext"
import { collection, addDoc, getFirestore, connectFirestoreEmulator } from "firebase/firestore"
import moment from "moment/moment";
import "./Cart.css"

const Cart = () => {

    const {cart, removeItem, clear} = useContext(CartContext);
    console.log('cart', cart);

    const [order, setOrder]= useState({
        buyer: {
            name: "",
            phone: 0,
            email: ""
        },
        items: cart,
        total: cart.reduce((valorPasado, valorActual) => valorPasado + valorActual.price * valorActual.quantity , 0),
        date: moment().format(),
        
    });
  

    const createOrder = () =>{
        const db = getFirestore();

        const query = collection(db, 'orders');
        addDoc(query, order)
        .then(({id}) =>{
            console.log(id)
            alert("Tu compra ha sido exitosa");
        })
        .catch((error) =>{
            alert("tu compra no pudo ser procesada. Inténtalo de nuevo más tarde")
        })
    };

    const handleInputChange= (e) => {
        setOrder({
            ...order,
            buyer:{
                ...order.buyer,
                [e.target.name]: e.target.value,
            }
        })
    };

  return (<>
    <div>
        <h2 style={{color : "white"}}>Cart</h2>
        {cart.length === 0 ? (
            <>
                <h2 style={{color : "lightgrey"}}>No hay productos en tu carrito</h2>
                <Link style={{color : "#d2f5ff"}} to={"/"}>Volver a inicio</Link>       
            </>
        )
        : (
            <>
                {
                    cart.map((item) => (
                        <div key={item.id} className="cuadro">
                            <img src={`${item.img}`} alt={item.name} width={150} height={150}/>
                            <h3>{item.name}</h3>
                            <h2>{item.price}</h2>
                            <p>{item.quantity}</p>
                            <button className="lastButton" onClick={() => removeItem(item.id)}>Eliminar producto</button>
                        </div>
                        
                    ))
                }   
            <div >
                <div >
                    <form className="form">
                        <h2>Completa tus datos para realizar la compra</h2>
                        <input name="name" type="text" placeholder="Nombre" value={order.buyer.name} onChange={handleInputChange}/>
                        <label for="phone">Teléfono</label>
                        <input name="phone" type="number" placeholder="Telefono" value={`${order.buyer.phone}`} onChange={handleInputChange}/>
                        <input name="email" type="email" placeholder="Correo Electrónico" value={`${order.buyer.email}`} onChange={handleInputChange}/>                      
                    </form>
                </div>
                <button onClick={createOrder}>Comprar</button>
            </div>
            <div>
                <button className="lastButton"onClick={() => clear()}>Vaciar carrito</button>
            </div>           
            </>
            
        )}

    </div>
          
  
  </>
    
  );
};

export default Cart;