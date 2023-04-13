import "./cart.css"
import globalContext from "../state/globalContext";
import { useContext, useState } from "react";
import ProductInCart from "../component/productInCart";
import { useEffect } from "react";
import { car } from "fontawesome";
import DataService from "../dataServices/dataService";
import { Link } from "react-router-dom";

function Cart() {
    const getNumberOfProducts = useContext(globalContext).getNumOfProducts;
    const cart = useContext(globalContext).cart;
    const getReceiptTotal = useContext(globalContext).getTotalToPay;
    let [code, setCode] = useState();
    let [newPrice, setNewPrice] = useState(0); 

    const refresh = () => window.location.reload(true)

    useEffect(() => {
        if (cart.length == 0) {
            document.getElementById("receipt-div").classList.add("receipt-hidden");
        }
        else {
            document.getElementById("receipt-div").classList.add("receipt");
        }
        if(!code){
            document.getElementById("lbl-div").classList.add("totalToPay-discount-hiden");
        }
    });

    function getCode(e) {
        let inputCode = e.target.value;
        //console.log(inputCode);

        setCode(inputCode);
    }

    async function applyDiscount() {
        
        let service = new DataService();
        let couponCode = await service.getCouponeByCode(code);
        console.log(couponCode)

        let r = getReceiptTotal();
        let t = 0;
        let d = 0;
        
        if(!couponCode){
            console.log("Error");
            alert ("Invalid code!");  
        }
        else{
            let p = couponCode.discount;

            if (couponCode.code == code) {
                d = (r / 100) * p;
                t = r - d;
    
                setNewPrice(t);
    
                document.getElementById("span-total").classList.add("span-total-to-pay"); 
                document.getElementById("lbl-div").classList.remove("totalToPay-discount-hiden");
                document.getElementById("lbl-div").classList.add("totalToPay-discount");
            }
        }
    }

    return (
        <div className="shopping-cart-container">

            <h2>Yo have {getNumberOfProducts()} product(s) in the cart!</h2> 

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
                        <label className="total-to-pay">Total: <span id="span-total">$ {getReceiptTotal()}</span></label>
                        <label id="lbl-div" className="totalToPay-discount">Total: <span id="span-discount">${newPrice}</span></label>
                    </div>

                    <div className="discount">
                        <h3>I have a code!</h3>
                        <input name="code" onChange={getCode} className="ip-search" type="text" />
                        <button className="btn-primary btn-apply" onClick={applyDiscount}>Aply</button>
                    </div>

                    <button className="btn-primary btn-cancel" onClick={refresh}>Cancel</button>
                    <Link className="link-button" to={"/payment"}> <button className="btn-primary btn-pay"> Go pay!</button> </Link>


                </div>
            </div>
        </div>
    );
}

export default Cart;

/**
* handle input changes ssaves the code on an state variable. //setCode(inputCode);
* click on apply calls a fn
* the function calls the dataservice getCouponById function and passes the discount
* if you get a response, read the discount from the response, otherwise show an error to the user.
* 
*/
