import './ItemCount.css'

const ItemCount = ({stock, setItems, items}) => {

    
    
    const sumar = () => items <= stock -1 ? setItems(items + 1) : alert("¡Ya no hay stock!")

    const restar = () => items > 0 ? setItems(items - 1) : alert("No tienes nada que restar")

  return (
    <div className="box">
        <div className="cardCounter">
            <div className="flexCounter">
                <button onClick={restar}>-</button>
                <p>Tengo {items} items</p>
                <button onClick={sumar}>+</button>  
            </div>        
            <p>Stock {stock}</p> 
        </div>
   </div>

  )
};

export default ItemCount;