import "./quantityPicker.css";
import { useState } from "react";

function QuantityPicker(){

    //Create an state variable
    //Name = quantity
    //Funtion to modify the variable = setQuantity (Mutable = No achange)
    let [quantity, setQuantity] = useState(1);

    //Add the logic
    function decrease(){
        //console.log("Decrease");
        if(quantity===1) return; //Avoid negative values
        let val = quantity - 1; //Decrease de quantity
        setQuantity(val); //Set the value
    }

    function increase(){
        console.log("Increase");
        let val = quantity + 1; //Increase one by one
        setQuantity(val); //Add the value
    }

    return (
        //Add the HTML elements
        <div className="qt-picker">
            <button className="btn-qt" onClick={decrease}>-</button>

            {/* Show the quantity in the label */}   
            <label>{quantity}</label>
            
            <button className="btn-qt" onClick={increase}>+</button>
        </div>
    )
}

export default QuantityPicker;