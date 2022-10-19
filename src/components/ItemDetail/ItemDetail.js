import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css'
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/cartContext';

const ItemDetail = ({detail}) => {
    
    const {addToCart} = useContext(CartContext);
    const {clear} = useContext(CartContext);
    const {removeItem} = useContext(CartContext);

    const [items, setItems] = useState(1)

    const handleClick = () =>{
        console.log(items);
    };

    function onAdd(detail){
        addToCart(detail, items);
    };

    function onRemove(detail){
        removeItem(detail);
    };

    function onClear(){
        clear();
    };

    return(
        
        <>
            <div className="cardDetail">
                <Link to="/">
                        <button className="volver">VOLVER</button>
                </Link>
                <div className="innerCardDetail">

                    <img src={`${detail.img}`} alt={detail.name} width={150} height={150}/>
                    <div>
                        <h5>{detail.name}</h5>
                        <p>{detail.detail}</p>
                        <p>{detail.price}</p>
                    </div>
                    <ItemCount stock={detail.stock} setItems={setItems} items={items}/>
                    <div>
                        <button onClick={() => onAdd(detail)}>AGREGAR AL CARRITO</button>
                        <button onClick={() => onRemove(detail.id)}>ELIMINAR PRODUCTO</button>
                    </div>
                    <Link to={"/cart"}>
                        <button onClick={handleClick}>Ir al carrito</button>
                    </Link>
                </div>
            </div>
        </>

    );
}

export default ItemDetail;