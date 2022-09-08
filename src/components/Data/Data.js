

const Data=[{
    id: 1,
    name: " Osito de peluche",
    img: "media/osito.png",
    stock: 10
},
{
    id: 2, 
    name: " Lapiz de panda",
    img: "media/panda.png",
    stock: 25
},
{
    id: 3,
    name: " Mouse Rosa",
    img: "media/mouse.png",
    stock: 15
},
{
    id: 4,
    name: " Teclado con luces",
    img: "media/teclado.png",
    stock: 5
},
{
    id: 5,
    name: " Set de cremas",
    img: "media/cremas.png",
    stock: 13
}];

const getFetch= new Promise((res, rej) =>{
    let condition=true
    if(condition){
        setTimeout(() =>{
            res(Data)
        }, 2000);
    }
    else{
        rej(console.log("No se consiguió la Data"))
    }
});

export default getFetch;