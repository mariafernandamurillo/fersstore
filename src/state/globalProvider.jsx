//2. Create the provider (which is a component)
import { Provider } from "react";
import GlobalContext from "./globalContext";
import { useState } from "react";

function GlobalProvider(props){
    const [cart, setCart] = useState([]);
    const [user, setUser] = useState({name: "Fernanda", id: 1808});

    function addToCart(prod){
        console.log("global fn");

        let copy = [...cart];
        copy.push(prod); 
        setCart(copy);

        console.log(copy);
    }

    function removeFromCart(){
        console.log("global remove");
    }

    return <GlobalContext.Provider value={{
        cart: cart,
        user: user,
        addToCart: addToCart,
        removeFromCart: removeFromCart,
    }}>{props.children}</GlobalContext.Provider>;
    //Children is a reserved word
}
export default GlobalProvider;