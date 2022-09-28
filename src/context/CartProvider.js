import { useState } from "react";
import { CartContext } from "./cartContext";

export const CartProvider = ({ children } ) => {
    const [cart, setCart] = useState([]);

    const addToCart = (item, quantity) => {
        if (isInCart(item.id)) {
            alert('Este producto ya está en el carrito');
        } else{
            setCart([...cart, {...item, quantity}]);
        }

        console.log('cart', [...cart, {...item, quantity}]);
    };  

    const isInCart = (id) => {
        return cart.some((item) => item.id === id);
    };


    const clear = () => {
        setCart([]);
    };
    
    const removeItem = (itemId) => {
        let newArray = [];
        cart.forEach((item) => {
            if(item.id === itemId){
                console.log(item);
            }else {
                newArray.push(item);
            }
        });
        setCart(newArray);
    };

    const totalItemsCart = () =>{
        return cart.reduce((acc, cartItem) => acc + cartItem.quantity, 0);
    }

    return(
        <CartContext.Provider value={{cart, addToCart, removeItem, clear, totalItemsCart}}>
            {children}
        </CartContext.Provider>
    );
};