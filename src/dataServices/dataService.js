//A tool to send http request
import axios from "axios";

var catalog = [
    {
        "title": "Meredith",
        "category": "Pouch",
        "price": 499,
        "image": "../images/purse_one.jpg",
        "_id": "1dfgdffg"
    },
    {
        "title": "Izzie",
        "category": "Clutch",
        "price": 249,
        "image": "../images/purse_two.jpg",
        "_id": "2dfgdffg"
    },
    {
        "title": "Lexie",
        "category": "Shoulder Bag",
        "price": 399,
        "image": "../images/purse_three.jpg",
        "_id": "3dfgdffg"
    },
    {
        "title": "Arizona",
        "category": "Handbag",
        "price": 399,
        "image": "../images/purse_four.jpg",
        "_id": "4dfgdffg"
    },
    {
        "title": "Cristina",
        "category": "Clutch",
        "price": 699,
        "image": "../images/purse_five.jpg",
        "_id": "5dfgdffg"
    },
    {
        "title": "Miranda",
        "category": "Handbag",
        "price": 399,
        "image": "../images/purse_six.jpg",
        "_id": "6dfgdffg"
    },
    {
        "title": "Calliope",
        "category": "Shoulder Bag",
        "price": 399,
        "image": "../images/purse_seven.jpg",
        "_id": "7dfgdffg"
    }

];

/* Create a class for DataServices*/
class DataService {
    async getProducts() {

        let response = await axios.get("http://127.0.0.1:5000/api/catalog");
        return response.data;
    }

    async saveDiscount(discount) {
        let response = await axios.post("http://127.0.0.1:5000/api/coupons", discount);
        return response.data;
    }

    async saveProduct(product) {
        let response = await axios.post("http://127.0.0.1:5000/api/catalog", product);
        return response.data;
    }

    async getCouponeByCode(code) {
        try {
            let response = await axios.get(`http://127.0.0.1:5000/api/coupons/${code}`);

            return response.data;
        } catch (error) {
            return (null);
        }
    }


    async getProductByTitle(title) {
        try {
            let response = await axios.get(`http://127.0.0.1:5000/api/products/search/${title}`);

            return response.data;
        } catch (error) {
            return (null);
        }
    }
}

export default DataService;