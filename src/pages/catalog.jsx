/* This is also a component but it is insede the folder pages just
to ptovide some order and organization */

import Product from "../component/product";
import "./catalog.css"
import { useEffect, useState } from "react";
import DataService from "../dataServices/dataService";


function Catalog() {

    {/*Last time we use a 1, but now we are using
      an emppty array as initial value (in case the catalog is empty)*/}
    const [products, setProducts] = useState([]);

    /*When the component load, do somenthin. 
    That is why we are using useEffect*/
    useEffect(function () {
        //console.log("Component loaded");
        loadCatalog();
    }, []);


    //Get the products from the Data Service
    function loadCatalog() {
        let service = new DataService();
        let prods = service.getProducts();
        console.log(prods);
        setProducts(prods); //Passing the values through  the useState
    }

    return (
        <div className="catalog">
            <h2>This is my catalog</h2>
            <h5>I have {products.length} new products for you!</h5> 

            {/*Activity class 2
            <Product></Product>
            <Product></Product>
            <Product></Product>
            <Product></Product>
            <Product></Product>*/}

            {/*We can not use for loop in JSX
            We are going to use map to print/transform the 
            number of products of the catalog*/}
            {products.map((p) => (
                <Product data = {p}></Product>
                ))}

        </div>
    );
}

export default Catalog;


/* Activity class 2
1. Create the product component with an h5 for title and
2. Render QuantityPicker
3. Render the Product in the Catalog 5 times.*/