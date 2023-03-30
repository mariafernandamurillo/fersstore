import "./cart.css"
import globalContext from "../state/globalContext";
import { useContext } from "react";
import ProductInCart from "../component/productInCart";

function Cart() {
    const getNumberOfProducts = useContext(globalContext).getNumOfProducts;
    const cart = useContext(globalContext).cart;

    return (
        <div className="shopping-cart-container">
            <h1>Shopping Cart</h1>
            <h5>You have {getNumberOfProducts()} items in the cart. </h5>

            <div className="shopping-cart">


                <div className="products">
                    {cart.map(prod => (<ProductInCart key={prod._id} data={prod}></ProductInCart>))}
                </div>

                <div className="receipt">
                    <label>Aquí</label>
                </div>
            </div>
        </div>
    );
}

export default Cart;