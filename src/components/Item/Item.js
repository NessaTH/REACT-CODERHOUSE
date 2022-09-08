const Item = ({data}) => {

    return(
        <>
            <h2>{data.id}</h2>
            <img src={`${data.img}`} width={150} height={150} />
        </>
    )
};

export default Item;

