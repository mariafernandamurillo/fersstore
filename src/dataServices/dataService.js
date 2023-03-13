var catalog = [
    {
        "title": "Product 1",
        "category":"Category N",
        "price":499,
        "image":"../images/purse_one.jpg",
        "_id":"1dfgdffg"
    },
    {
        "title": "Product 2",
        "category":"Category N",
        "price":249,
        "image":"../images/purse_two.jpg",
        "_id":"2dfgdffg"
    },
    {
        "title": "Product 3",
        "category":"Category N",
        "price":399,
        "image":"../images/purse_three.jpg",
        "_id":"3dfgdffg"
    },
    {
        "title": "Product 4",
        "category":"Category N",
        "price":399,
        "image":"../images/purse_four.jpg",
        "_id":"4dfgdffg"
    },
    {
        "title": "Product 5",
        "category":"Category N",
        "price":699,
        "image":"../images/purse_five.jpg",
        "_id":"5dfgdffg"
    }
];

/* Create a class for DataServices*/
class DataService{
    getProducts() {
        return catalog;
    }
}

export default DataService;