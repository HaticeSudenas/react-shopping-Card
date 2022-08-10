import { combineReducers } from "redux";
import changeSizeReducer from "./change-size-reducer";
import categoryListReducers from "./category-list-reducers";
import productListReducer from "./products-list-reducer";
import cartReducer from "./cart-reducer";
const rootReducers=combineReducers({
    changeSizeReducer,
    categoryListReducers,
    productListReducer,
    cartReducer
});
export default rootReducers;