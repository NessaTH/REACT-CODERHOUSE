import { useEffect, useState } from "react";
import getFetch from "../../Data/Data"
import ItemDetail from '../../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {

    const[data, setData]=useState([])
    const[loading, setLoading]=useState(true)
  
  
    useEffect(() =>{
      getFetch
      .then((resp) => setData(resp))
      .catch(err => console.log(err))
      .finally(() => setLoading(false))
    }, [])
  
    return (<>
      {
        loading ? <span>Cargando...</span> :
        <ItemDetail products={data}></ItemDetail>
      }
      </>)

}

export default ItemDetailContainer;