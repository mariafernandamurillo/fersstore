/*Activity class 2*/

import QuantityPicker from "./quantityPicker";
import "./product.css"
import { useEffect, useState } from "react";
import { Toast } from "bootstrap";

function Product(props) {

    const [quantity, setQuantity] = useState(1);

    useEffect(function () {
        console.log("Hey, I am a product!");
    }, []);

    function onQuantityChange(qty) {
        console.log("New value: " + qty);
        setQuantity(qty);
    }

    function getTotal() {
        let total = props.data.price * quantity;
        return total.toFixed(2);
    }

    return (
        <div className="product">
            <h5>{props.data.title}</h5>

            <img className="image-product" src={props.data.image} alt="" />

            <div className="prices">
                <label>Price <span>${props.data.price.toFixed(2)}</span></label>
                <label>Total <span>${getTotal()}</span></label>
            </div>

            <div className="controls">
                <QuantityPicker onChange={onQuantityChange}></QuantityPicker>

                <button className="add-btn">Add</button>
            </div>

        </div>
    );
}

export default Product;