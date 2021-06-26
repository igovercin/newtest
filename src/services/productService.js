import axios from "axios";

export default class ProductService{
    getProducts(){
        return axios.get("http://localhost:8080/api/products/getall");
    }

    getByProductName(productName){
        let d = axios.get("http://localhost:8080/api/products/getByProductName?productName="+productName);
        return d;
    }
}