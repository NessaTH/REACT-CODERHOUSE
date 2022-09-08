import "./ItemListContainer.css"
import getFetch from "../Data/Data"
import { useState, useEffect } from "react"
import ItemList from "../../components/ItemList/ItemList"

const ItemListContainer = (props) => {

  const[data, setData]=useState([])
  const[loading, setLoading]=useState(true)


  useEffect(() =>{
    getFetch
    .then((resp) => setData(resp))
    .catch(err => console.log(err))
    .finally(() => setLoading(false))
  }, [])

  return (<>
    <div className="saludito">{props.greeting}</div>

    {
      loading ? <span>Cargando...</span> :
      <ItemList products={data}></ItemList>
    }
    </>)
}

export default ItemListContainer;