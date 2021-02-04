import { Component } from "react";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import SupplierList from "../supplierList/SupplierList";
import ShowModalSupplier from "../showModalSupplier/ShowModalSupplier";
import Icon from "../icon/Icon";
import "./supplierListContainer.scss";
import { connect } from "react-redux";
import {toggleModalSupplier} from '../../redux/supplierList/supplierList.action'

class SupplierListContainer extends Component {

  render() {

    return (
      <div>
        <span>Поставщики</span>
        <div className="Supplier-List-Container">
          <Icon icon={faPlus} onClick={this.props.toggleModalSupplier} />
          <SupplierList />
          {this.props.showModalSupplier && (
            <ShowModalSupplier onClose={this.props.toggleModalSupplier} />
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  showModalSupplier: state.supplier.showModalSupplier,

});
const mapDispatchToProps = (dispatch) => ({
  toggleModalSupplier: () => dispatch(toggleModalSupplier()),
});


export default connect(mapStateToProps, mapDispatchToProps)(SupplierListContainer);

