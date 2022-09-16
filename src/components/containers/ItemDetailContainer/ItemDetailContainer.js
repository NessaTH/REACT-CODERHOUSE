import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Data from "../../Data/Data";
import ItemDetail from '../../ItemDetail/ItemDetail';


const ItemDetailContainer = () => {
  const[product, setProduct]=useState([]);

  const {id} = useParams();

  useEffect(() =>{
    getProducts()
    .then((resp) => {
      setProduct(resp)
    })
    .catch(err => console.log(err))
  }, [])

  const getProducts = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(Data.find(element => element.id===id))
    }, 2000)
  })

  return (<>
    {
      product 
      ? <ItemDetail products={product}></ItemDetail>
      : <h2>OBTENIENDO DETALLE</h2>
    }
    </>)

}

export default ItemDetailContainer;