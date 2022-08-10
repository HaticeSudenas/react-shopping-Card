import * as actionTypes from "./action-types";
import *as w from "../typesctipt/cart-types"
export function addToCart(cartItem:w.cartProduct){
    return {type:actionTypes.ADD_TO_CART,payload:cartItem}
}
export function removeToCart(product:w.Product){
    return{type:actionTypes.REMOVE_TO_CART,payload:product}
}
export function downToCart(cartItem:w.cartProduct){
    return{type:actionTypes.DOWN_TO_CART,payload:cartItem}
}