import * as actionTypes from "../actions/action-types";
import initialstate from "./initialstate";
export default function categoryListReducers(state=initialstate.categories,action:any){//hata çıkabilir
    switch(action.type){
       case actionTypes.GET_SIZE_SUCCESS:
        return action.payload;
       default: return state;
    }
}