import { combineReducers } from "redux";
import supplierListReducer from './supplierList/supplierList.reducer'
import priceListReducer from './priceList/priceList.reducer'
import tableListReducer from './tableList/tableList.reducer'

const rootReducer = combineReducers({
    supplier:supplierListReducer,
    priceList:priceListReducer,
    tableList:tableListReducer
});
 
export default rootReducer;
