import "./cart.css"
import globalContext from "../state/globalContext";
import { useContext } from "react";
import ProductInCart from "../component/productInCart";
import { useEffect } from "react";
import { car } from "fontawesome";

function Cart() {
    const getNumberOfProducts = useContext(globalContext).getNumOfProducts;
    const cart = useContext(globalContext).cart;
    const getReceiptTotal = useContext(globalContext).getTotalToPay;

    useEffect(() => {
        if (cart.length == 0) {
            document.getElementById("receipt-div").classList.add("receipt-hidden");
        }
        else {
            document.getElementById("receipt-div").classList.add("receipt");
        }

    });

    function appliDiscount(e) {
        let code = e.target.value;
        let r = getReceiptTotal();
        let t=0;
        let d=0;
        if (code == "my101bag") {
            d = (r/100)*15;
            t = r-d;
        }

        return t;
    }

    return (
        <div className="shopping-cart-container">
            <div className="shopping-cart">


                <div className="products">
                    {/*ProductInCart is a component
                    It displays the information of every product added to the cart
                    based on the info passed in data={prod} */}
                    {cart.map(prod => (<ProductInCart key={prod._id} data={prod}></ProductInCart>))}
                </div>

                <div id="receipt-div" className="receipt">

                    <div className="receip-header">
                        <div className="logo">
                            <img src="./images/fs-logo.png" />
                        </div>

                        <label className="order-confirmation">Order Confirmation</label>
                    </div>

                    <div className="totalToPay">
                        <label>You are buying <span>{getNumberOfProducts()}</span> product(s)</label>
                        <label>Total: <span>$ {getReceiptTotal()}</span></label>
                    </div>

                    <div className="dicount">
                        <h3>I have a code!</h3>
                        <input name="code" onChange={appliDiscount}  className="ip-search" type="text" />

                        <button className="btn-primary btn-apply">Aply</button>
                    </div>

                    <button className="btn-primary btn-cancel">Cancel</button>
                    <button className="btn-primary btn-pay">Go pay!</button>

                </div>
            </div>
        </div>
    );
}

export default Cart;