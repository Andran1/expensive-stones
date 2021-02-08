import "./priceList.scss";

import { connect } from "react-redux";
import { Component } from "react";

import {
  selectedItemId,
  uptadePriceList,
} from "../../redux/priceList/priceList.action";
import ListItem from "./components/list-item/ListItem";

class PriceList extends Component {
  removeItem = () => {
    const newPriceList = this.props.priceList.filter(
      (item) => item.id !== this.props.selectedPriceLisItemId
    );
    this.props.uptadePriceList(newPriceList);
  };

  changeModal = (itemId) => {
    this.props.selectedItemId(itemId);
    this.setState({
      showModalRemove: !this.state.showModalRemove,
    });
  };

  render() {
    const { priceList, selectItemId } = this.props;

    return (
      <div className="Price-List">
        {priceList.map((list, idx) => {
          return (
            <ListItem
              key={idx}
              list={list}
              handleItemId={selectItemId.bind(this, list.id)}
              removeItem={this.removeItem.bind(this, list.id)}
            />
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  priceList: state.priceList.priceList,
  selectedPriceLisItemId: state.priceList.selectedPriceLisItemId,
});
const mapDispatchToProps = (dispatch) => ({
  selectItemId: (id) => dispatch(selectedItemId(id)),
  uptadePriceList: (data) => dispatch(uptadePriceList(data)),
});
export default connect(mapStateToProps, mapDispatchToProps)(PriceList);
