import { useContext } from "react"
import { Link } from "react-router-dom";
import { CartContext } from "../../context/cartContext"
import { collection, addDoc, getFirestore, connectFirestoreEmulator } from "firebase/firestore"
import moment from "moment/moment";

const Cart = () => {

    const {cart, addToCart, removeItem} = useContext(CartContext);
    console.log('cart', cart);

    const createOrder = () =>{
        const db = getFirestore();
        const order = {
            buyer: {
                name: "Mey",
                phone: "1122222222",
                email: "testqtest.com"
            },
            items: cart,
            total: cart.reduce((valorPasado, valorActual) => valorPasado + valorActual.price * valorActual.quantity , 0),
            date: moment().format(),
            
        };
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
            {/* <div>
                <button onClick={createOrder}>Crear orden</button>
            </div>         */}
            </>
            
        )}

    </div>
          
  
  </>
    
  );
};

export default Cart;