import "./ItemListContainer.css"
import Data from "../../Data/Data"
import { useState, useEffect } from "react"
import ItemList from "../../ItemList/ItemList"
import { Link, useParams } from "react-router-dom";

const ItemListContainer = (props) => {
    const {category} = useParams();
    const[data, setData]=useState([]);
    const[loading, setLoading]=useState(true)
    useEffect(() => {
        if(category) {
            const response = Data.filter((response) => response.category === category)
            setData(response);
        }else {
            getProducts
            .then((response) => {
            setData(response)})
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
        };
    }, [category]);

    const getProducts = new Promise((resolve, reject) => {
    let condition=true
    if(condition){
        setTimeout(() =>{
            resolve(Data)
        }, 2000);
    }
    else{
        reject(console.log("No se consiguió la Data"))
    }
});


    return (
        <>
            <div className="saludito">{props.greeting}</div>
            <Link to="/cart" style={{color : "white"}}>Carrito</Link>
            {
                loading ? <span>Cargando...</span> :
                <ItemList products={data}></ItemList>
              }
        </>
    );
};

export default ItemListContainer;