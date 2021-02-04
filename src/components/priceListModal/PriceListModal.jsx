import { Component } from "react";
import Icon from "../icon/Icon";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import ColorListContainer from "../colorListContainer/ColorListContainer";
import FasetingListContainer from "../fasetingListContainer/FasetingListListContainer";
import Changing from "../changing/Changing";
import "./priceListModal.scss";

class PriceListModal extends Component {
  render() {
    return (
      <div className="Modal-Price-List">
        <div className="Modal-Title">
          <div>Добавить Прайс Лист</div>
          <Icon icon={faTimes} onClick={this.props.onClose} />
        </div>
        <div className="Price-List-Modal-Block">
          <div className='Price-List-Modal-Block-Item' >
            <Changing />
            <ColorListContainer />
            <FasetingListContainer />
          </div>
        </div>
      </div>
    );
  }
}
export default PriceListModal;
