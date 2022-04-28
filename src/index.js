import navbar from "../component/navbar.js";
console.log(navbar);

import "../style/navbar.css"

let app=document.getElementById("navbar");
app.innerHTML=navbar();

let url="https://fakestoreapi.com/products/category/men's%20clothing";
let container=document.getElementById("container");
getData(url).then((res)=>{
appendData(res,container);
});



import {getData,appendData} from "../component/fetch.js";