import * as actionTypes from "../actions/action-types";
import initialstate from "./initialstate";
import * as w  from "../typesctipt/cart-types";
export default function cartReducer(state=initialstate.carts,action:any){
   switch (action.type) {
    case actionTypes.ADD_TO_CART:
        var addedItem=state.find(c=>c.product.id===action.payload.product.id)
        if(addedItem){
            var newState=state.map(cartItem=>{
                if(cartItem.product.id===action.payload.product.id){
                    return Object.assign({},addedItem,{quantity:addedItem!.quantity+1})
                }
                return cartItem;
            })
            return newState;
        }else{
            return [...state,{...action.payload}]
        }
      
     case actionTypes.REMOVE_TO_CART:
        const newStateremove=state.filter(c=>c.product.id!==action.payload.id);
        return newStateremove;
    case actionTypes.DOWN_TO_CART:
        var downItem=state.find(c=>c.product.id===action.payload.product.id)
        if(downItem){
            var newState=state.map(cartItem=>{
                if(cartItem.product.id===action.payload.product.id){
                    return Object.assign({},downItem,{quantity:downItem!.quantity-1})
                }
                return cartItem;
            })
            return newState;
        }else{
            return [...state,{...action.payload}]
        }
    default:
        return state;
   }
}


