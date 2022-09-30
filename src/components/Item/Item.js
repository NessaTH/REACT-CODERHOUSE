import './Item.css'


const Item = ({data}) => {

    return(
        <>
            <div className='card'>
                <div className='innerCard'>
                    <h2>{data.name}</h2>
                    <img src={`${data.img}`} width={150} height={150} />
                    <p>{data.price}</p>
                </div>
            </div> 

        </>
    )
};

export default Item;

