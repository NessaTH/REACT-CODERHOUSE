const ItemDetail = ({products}) => {
    return(
        <>
            <div>
                <img src={`${products[1].img}`} width={150} height={150}/>
                <div>
                    <h5>{products[1].name}</h5>
                    <p>{products[1].detail}</p>
                    <p>{products[1].price}</p>
                </div>
            </div>
        </>

    );
}

export default ItemDetail;