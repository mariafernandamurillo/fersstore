/*Activity class 2*/

import QuantityPicker from "./quantityPicker";
import "./product.css"
import { useEffect } from "react";

function Product(props){

    useEffect(function(){
        console.log("Hey, I am a product!");
    }, []);

    return(
        <div className="product">
            <h5>{props.data.title}</h5>
            
            <img className="image-product" src={props.data.image} alt=""/>

            <div className="prices">
                <label>Price <span>${props.data.price}</span></label>
                <label>Total $ </label>
            </div>

            <QuantityPicker></QuantityPicker>

            <button className="add-btn">Add</button>
        </div>
    );
}

export default Product;