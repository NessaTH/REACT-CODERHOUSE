import "./ItemListContainer.css"
import getFetch from "../../Data/Data"
import Data from "../../Data/Data"
import { useState, useEffect } from "react"
import ItemList from "../../ItemList/ItemList"
import { useParams } from "react-router-dom";

const ItemListContainer = (props) => {

  
  const[data, setData]=useState([])
  const[loading, setLoading]=useState(true)

  const {category} = useParams();

  const getProducts = async () =>{
    if(category){
      const response= await Data.filter((item) => item.category === category);
      setData(response);
    }else{
      const response = await Data;
      setData(response);
    }
  }


  useEffect(() =>{
    getProducts()
    // .then((resp) => setData(resp))
    // .catch(err => console.log(err))
    // .finally(() => setLoading(false))
  }, [])

  return (<>

        <div className="saludito">{props.greeting}</div>

        {
          // loading ? <span>Cargando...</span> :
          <ItemList products={data}></ItemList>
        }

    </>)
}

export default ItemListContainer;