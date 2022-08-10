import * as actionTypes from "./action-types";
import *as w from "../typesctipt/cart-types";
export function getProductSucccess(products:w.Product){
    return{type:actionTypes.GET_PRODUCTS_SUCCESS,payload:products}
}

export function getProducts(categoryName:string){
    return function(dispatch:any){
        let url="https://fakestoreapi.com/products";
        if(categoryName=="electronics"){
           let url1="https://fakestoreapi.com/products/category/electronics";
            return fetch(url1).then(response=>response.json()).then(result=>dispatch(getProductSucccess(result)))
        }
        if(categoryName=="hicbiri"){
            let url1="https://fakestoreapi.com/products";
             return fetch(url1).then(response=>response.json()).then(result=>dispatch(getProductSucccess(result)))
         }
        else if(categoryName=="jewelery"){
            let url1="https://fakestoreapi.com/products/category/jewelery";
             return fetch(url1).then(response=>response.json()).then(result=>dispatch(getProductSucccess(result)))
         }
         else if(categoryName=="men's clothing"){
            let url1="https://fakestoreapi.com/products/category/men's clothing";
             return fetch(url1).then(response=>response.json()).then(result=>dispatch(getProductSucccess(result)))
         }
         else if(categoryName=="women's clothing"){
            let url1="https://fakestoreapi.com/products/category/women's clothing";
             return fetch(url1).then(response=>response.json()).then(result=>dispatch(getProductSucccess(result)))
         }
        return fetch(url).then(response=>response.json()).then(result=>dispatch(getProductSucccess(result)))
    }
}
