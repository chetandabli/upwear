import { get } from "./sortcuts.js";
const baseURL = "http://localhost:4800/products"

let productdiv = get("products");

// fetching all data!
async function fetchData(x){
    try {
        let data = await fetch(baseURL);
        let acualData = await data.json();
        console.log(acualData)
    } catch (error) {
        console.log(error)
    }
}

fetchData()