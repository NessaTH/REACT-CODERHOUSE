import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from '../../ItemDetail/ItemDetail';
import {getFirestore, doc, getDoc} from 'firebase/firestore';


const ItemDetailContainer = () => {
  const[product, setProduct]=useState([]);
  const {id} = useParams();

  const db = getFirestore();

  useEffect(() =>{
    getDetail()
  });

  const getDetail = () =>{
    const queryDoc = doc(db, 'items', id);
    getDoc(queryDoc)
    .then(response => {
      setProduct(response.data())
  
    })
    .catch(error => console.log(error));
  };


  return (<>
  <ItemDetail detail={product}/>

    </>)

}

export default ItemDetailContainer;