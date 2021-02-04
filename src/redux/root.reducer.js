import { combineReducers } from "redux";
import supplierListReducer from './supplierList/supplierList.reducer'

const rootReducer = combineReducers({
    supplier:supplierListReducer,
});
 
export default rootReducer;
