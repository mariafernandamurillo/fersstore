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

    {/*Variable for the Key of the products */}
    const [category, setCategory] = useState([]);

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

        let cats = ["Pouch", "Clutch", "Shoulder Bag", "Handbag"];
        setCategory(cats); //Passing the categories
    }

    function filter(category){
        console.log(category);

        let list = [];

        /*Find the products of the category and added them to the list */
        for(let i=0; i<products.length;i++){
            let prod = products[i];
            if(prod.category == category){
                list.push(prod);
            }
        }

        console.log(list);
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
            {/*We need to add the ket to the products, but we can not use key={1}
            we need to use an state variable*/}
            <br></br>
            {/*Here we added a btn-filter class of bootstrap, but I am not using boostrap*/}
            {category.map(c => <button onClick={()=>filter(c)} className="category-btn">{c}</button>)}
            <br></br>

            {products.map((p) => (<Product key={p._id} data = {p}></Product>))}
            
        </div>
    );
}

export default Catalog;


/* Activity class 2
1. Create the product component with an h5 for title and
2. Render QuantityPicker
3. Render the Product in the Catalog 5 times.*/