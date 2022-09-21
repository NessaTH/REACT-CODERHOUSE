import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';

const ItemDetail = ({detail}) => {

    const [items, setItems] = useState(1)
    const handleClick = () =>{
        console.log(items);
    };

    return(
        
        <>
            <div className="cardDetail">
                <div className="innerCardDetail">
                    <img src={`${detail.img}`} alt={detail.name} width={150} height={150}/>
                    <div>
                        <h5>{detail.name}</h5>
                        <p>{detail.detail}</p>
                        <p>{detail.price}</p>
                    </div>
                    <ItemCount stock={detail.stock} setItems={setItems} items={items}/>
                    <Link to={"/cart"}>
                        <button onClick={handleClick}>Ir al carrito</button>
                    </Link>
                </div>
            </div>
        </>

    );
}

export default ItemDetail;