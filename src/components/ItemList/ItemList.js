import Item from "../Item/Item";
import './ItemList.css'
import { Link } from "react-router-dom";

const ItemList = ({products}) => {
    return (
        <>
            <div className="cardContainer">
                {
                    products.map((cerv) => (
                        <Link className="link" key={cerv.id} to={"/detail/" + cerv.id}>
                            <Item data={cerv}/>
                        </Link>
                    ))
                }
            </div>
        </>
    )
}

export default ItemList;