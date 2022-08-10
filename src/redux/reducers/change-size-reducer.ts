import * as actionTypes from "../actions/action-types";
import initialstate from "./initialstate";
export default function changeSizeReducer(state=initialstate.currentSize,action:any){//hata çıkabilir
    switch(action.type){
       case actionTypes.CHANGE_SİZE:
        return action.payload;
       default: return state;
    }
}