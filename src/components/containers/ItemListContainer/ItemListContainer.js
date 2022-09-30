import "./ItemListContainer.css"
import { useState, useEffect } from "react"
import ItemList from "../../ItemList/ItemList"
import { Link, useParams } from "react-router-dom";
import { getFirestore, getDocs, collection, query, where } from "firebase/firestore";

const ItemListContainer = (props) => {
    const {category} = useParams();
    const[data, setData]=useState([]);
    const[loading, setLoading]=useState(true)
    useEffect(() => {
        getProducts()
    }, [category]);


    const getProducts = () => {
        const db = getFirestore();
        const querySnapshot = collection(db, 'items');
        

        if(category){
            const queryFilter = query(
                querySnapshot, 
                where('category', '==', category)
            );
            getDocs(queryFilter)
            .then((response) => {
                const data = response.docs.map((doc) =>{
                    return {id: doc.id, ...doc.data()};
                })
                setData(data);
            })
            .catch(error => console.log(error));
        }else{

        getDocs(querySnapshot)
        .then((response) => {
            const data = response.docs.map((doc) =>{
                return {id: doc.id, ...doc.data()};
            })
            setData(data);
        })
        .catch(error => console.log(error));
    }};


    return (
        <>
            <div className="saludito">{props.greeting}</div>
            <Link to="/cart" style={{color : "white"}}>Carrito</Link>
            {
                <ItemList products={data}></ItemList>
              }
        </>
    );
};

export default ItemListContainer;