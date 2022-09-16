import { useParams } from "react-router-dom";

const ItemDetail = ({product}) => {

   
    return(
        
        <>
            <div>
                <img src={`${product.img}`} width={150} height={150}/>
                <div>
                    <h5>{product.name}</h5>
                    <p>{product.detail}</p>
                    <p>{product.price}</p>
                </div>
            </div>
        </>

    );
}

export default ItemDetail;