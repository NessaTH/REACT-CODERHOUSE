import osito from './media/osito.png';
import panda from './media/panda.png';
import mouse from './media/mouse.png';
import teclado from './media/teclado.png';
import cremas from './media/cremas.png';
import vuelo from './media/vuelo.png';
import rafting from './media/rafting.png';

const Data=[{
    id: "1",
    name: " Osito de peluche",
    price: "ARS 850,00",
    detail: "Peluche hipoalergénico con estuche para esencias",
    img: osito,
    stock: 10,
    category: "Miscelánea"
},
{
    id: "2", 
    name: " Lapiz de panda",
    price: "ARS 250,00",
    detail: "Es un lápiz de tinta azul con adornos de Panda",
    img: panda,
    stock: 25,
    category: "Miscelánea"

},
{
    id: "3",
    name: " Mouse Rosa",
    price: "ARS 1.500,00",
    detail: "Mouse rosado Logitech con click silencioso",
    img: mouse,
    stock: 15,
    category: "Electrónica"

},
{
    id: "4",
    name: " Teclado con luces",
    price: "ARS 2.650,00",
    detail: "Teclado gamer con luces de colores con ritmos y patrones configurables",
    img: teclado,
    stock: 5,
    category: "Electrónica"

},
{
    id: "5",
    name: " Set de cremas",
    price: "ARS 1.200,00",
    detail: "Cremas veganas hidratantes con fragancia duradera",
    img: cremas,
    stock: 13,
    category: "Cosmética"

},
{
    id: "6",
    name: " Clase de vuelo",
    price: "ARS 28.000,00",
    detail: "Clase de vuelo de tres horas con piloto altamente calificado",
    img: vuelo,
    category: "Experiencias"
},
{
    id: "7",
    name: " Rafting en San Rafael",
    price: "ARS 7.800,00",
    detail: "Navegación en río Atuel con personal calificado y animadores. Incluye equipo y traslado desde centro de San Rafael",
    img: rafting,
    category: "Experiencias"

}];


export default Data;