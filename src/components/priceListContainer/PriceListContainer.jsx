import "./priceListContainer.scss";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Icon from "../icon/Icon";
import PriceList from "../priceList/PriceList";
import PriceListModal from "../priceListModal/PriceListModal";
import { Component } from "react";

class PriceListContainer extends Component {
  state = {
    showModalPriceList: false,
  };

  toggleModal = () => {
    this.setState({
      showModalPriceList: !this.state.showModalPriceList,
    });
  };

  render() {
    const { showModalPriceList } = this.state;
    return (
      <div className="Price-List-Container">
        <span>Прайс Лист</span>
        <div className="Price-List-Container-Item">
          <Icon icon={faPlus} onClick={this.toggleModal} />

          <PriceList />
          {showModalPriceList && <PriceListModal onClose={this.toggleModal} />}
        </div>
      </div>
    );
  }
}
export default PriceListContainer;
