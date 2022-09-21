import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Data from "../../Data/Data";
import ItemDetail from '../../ItemDetail/ItemDetail';


const ItemDetailContainer = () => {
  const[product, setProduct]=useState([]);

  const {id} = useParams();

  useEffect(() =>{
    getDetail
    .then((response) => {
      const dataFiltrada = response.filter((product) => product.id === id);
      setProduct(...dataFiltrada);
    })
    .catch(err => console.log(err))
  });

  const getDetail = new Promise((resolve) => {
    setTimeout(() => {
      resolve(Data)
     }, 2000)
  });

  return (<>
  <ItemDetail detail={product}/>

    </>)

}

export default ItemDetailContainer;