import TypeListNav from "../TypeListNav/TypeListNav";
import SupplierListContainer from "../supplierListContainer/SupplierListContainer";
import PriceListContainer from "../priceListContainer/PriceListContainer";
// import { BrowserRouter as Router } from "react-router-dom";
import "./typeList.scss";

const TypeList = () => {
  return (
    <div className="Type-List-Style">
      <span>Типы</span>
      <TypeListNav />
      <SupplierListContainer />
      <PriceListContainer />
    </div>
  );
};
export default TypeList;
