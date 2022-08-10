import * as actionTypes from "./action-types";
export function changeSize(size:string){//tipini değiştir sonra
    return{ type:actionTypes.CHANGE_SİZE,payload:size}
}
export function getCategorySuccess(categories:string){//tipini değiştir sonra
    return{ type:actionTypes.GET_SIZE_SUCCESS,payload:categories}
}

export function getCategories(){
    return function(dispatch:any){
        let url="https://fakestoreapi.com/products/categories";
        return fetch(url).then(response=>response.json()).then(result=>dispatch(getCategorySuccess(result)))
    }
}