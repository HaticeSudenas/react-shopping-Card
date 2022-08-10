import initialstate from "./initialstate";
import * as actionTypes from "../actions/action-types";
export default function productListReducer(state=initialstate.products,action:any){
    switch (action.type) {
        case actionTypes.GET_PRODUCTS_SUCCESS:
            return action.payload;
           default: return state;

    }

}