import "./supplierList.scss";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import Icon from "../icon/Icon";

const SupplierList = (props) => {
  const { supplierList, match } = props;

  const listType = supplierList.filter((list) => {
    if (list.type === match.params.type) {
      return true;
    }
    return false;
  });

  return (
    <div className="Supplier-Block">
      {listType.map((list) => {
        return (
          <div key={list.id} className="Supplier-List">
            <div>
              <img className="image" src={list.imgUrl} alt="" />
            </div>
            <div className="Supplier-footer">
              <div className="Supplier-p">{list.name}</div>
              <Icon icon={faEllipsisV} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => ({
  supplierList: state.supplier.supplierList,
});

export default connect(mapStateToProps, null)(SupplierList);
