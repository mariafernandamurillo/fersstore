import "./admin.css"

import { useState } from "react";
import { getByTitle } from "@testing-library/react";
import DataService from "../dataServices/dataService";

function Admin() {

    //cont [getByTitle, setTitle] = useState(""); 
    /*We are getting an string */

    const [product, setProduct] = useState({});
    /*We do not need an string, we need an object {}*/

    const [discount, setDiscount] = useState({});


    function handleTextChange(e) {
        console.log("changed: ", e.target.value);
        /*Similar to a Document.getElementById().value;*/

        //setTitle(e.target.value);
        /*Everytime the text changes, I want to set
        the value of the input */

        /*That is for one field, but we need it for
        all the inputs*/
        const value = e.target.value; //the value of the input
        const name = e.target.name; //the "id" of the input

        let copy = { ...product };
        copy[name] = value;
        setProduct(copy);
    }

    function saveProduct() {
        console.log(product);

        //Create a copy to parse price to number
        let copy = { ...product };
        copy.price = parseFloat(copy.price);

        let service = new DataService();
        service.saveProduct(copy);

        setProduct({
            title: '',
            image: '',
            category: '',
            price: ''
        });
    }

    function handleDiscountText(e) {
        const value = e.target.value; //the value of the input
        const name = e.target.name; //the "id" of the input

        let copy = { ...discount };
        copy[name] = value;
        setDiscount(copy);
    }

    function saveDiscount() {
        let copy = { ...discount };
        copy.discount = parseFloat(copy.discount);

        let service = new DataService();
        service.saveDiscount(copy);

        setDiscount({
            code: '',
            discount: ''
        });

        console.log(discount);
    }



    return (
        <div className="Admin">
            <h1>Welcome, Admin!</h1>
            <div className="forms">
                <form className="form-new-product">
                    <label className="lbl-subtitle">New product</label>

                    <div className="product-name-content product-attribute">
                        <label>Name </label>
                        <input value={product.title} name="title" onChange={handleTextChange} className="ip-product-name ip-text" type="text" />
                    </div>

                    <div className="product-category-content product-attribute">
                        <label>Category </label>
                        <input value={product.category} name="category" onChange={handleTextChange} className="ip-category-name ip-text" type="text" />
                    </div>

                    <div className="product-price-content product-attribute">
                        <label>Price </label>
                        <input value={product.price} name="price" onChange={handleTextChange} className="ip-price-name ip-text" type="text" />
                    </div>

                    <div className="product-image-content product-attribute">
                        <label>Image </label>
                        <input value={product.image} name="image" onChange={handleTextChange} className="ip-image-name ip-text" type="text" />
                    </div>
                    <div className="btn-save">
                        <button className="btn-primary" type="button" onClick={saveProduct}>Save Product</button>
                    </div>
                </form>

                <form className="form-new-discount">
                    <label className="lbl-subtitle">New discount</label>
                    <div className="product-attribute">
                        <label>Code </label>
                        <input value={discount.code} name="code" onChange={handleDiscountText} className="ip-text" type="text" />
                    </div>

                    <div className="product-attribute">
                        <label>Discount </label>
                        <input value={discount.discount} name="discount" onChange={handleDiscountText} className="ip-text" type="number" />
                    </div>

                    <div className="btn-save">
                        <button className="btn-primary" type="button" onClick={saveDiscount}>Save Coupon</button>
                    </div>

                </form>
            </div>
        </div>
    );
}

export default Admin;