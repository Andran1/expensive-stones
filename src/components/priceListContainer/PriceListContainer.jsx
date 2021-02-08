import "./priceListContainer.scss";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Icon from "../icon/Icon";
import PriceList from "../priceList/PriceList";
import PriceListModal from "../priceListModal/PriceListModal";
import { Component } from "react";
import { connect } from "react-redux";
import {clearPriceModalList} from '../../redux/priceList/priceList.action'

class PriceListContainer extends Component {
  state = {
    showModalPriceList: false,
  };

  toggleModal = () => {
    this.setState({
      showModalPriceList: !this.state.showModalPriceList,
    });
    this.props.clearPriceModalList()

  };

  render() {
    const { showModalPriceList } = this.state;
    return (
      <div >
        <span>Прайс Лист</span>
        <div className="Price-List-Container">
          <Icon icon={faPlus} onClick={this.toggleModal} />

          <PriceList />
          {showModalPriceList && <PriceListModal onClose={this.toggleModal} />}
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  clearPriceModalList: () => dispatch(clearPriceModalList()),
});

export default connect(null, mapDispatchToProps)(PriceListContainer);