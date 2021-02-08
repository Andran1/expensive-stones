import { Component } from "react";
import Icon from "../icon/Icon";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import ColorListContainer from "../colorListContainer/ColorListContainer";
import FasetingListContainer from "../fasetingListContainer/FasetingListListContainer";
import SelectBox from "../selectBox/SelectBox";
import ColorListModal from "../colorListModal/ColorListModal";
import FasetingListModal from "../fasetingListModal/FasetingListModal";
import { connect } from "react-redux";
import "./priceListModal.scss";
import { Modal, Button } from "react-bootstrap";
import idGenerator from "../../idGenerator/idGenerator";
import { addPricList } from "../../redux/priceList/priceList.action";
import flagPicker from "../../assets/flags/flagPics";

class PriceListModal extends Component {
  state = {
    disable: true,
    selectedValue: "USD",
  };
  addedPriceListItem = () => {
    const {
      colorImageUrl,
      fasetingImageUrl,
      fasetingName,
      colorName,
      // rateValue,
      addPricList,
      onClose,
    } = this.props;

    const newPriceList = {
      id: idGenerator(),
      rate: this.state.selectedValue,
      colorUrl: colorImageUrl,
      colorName: colorName,

      fasetingUrl: fasetingImageUrl,
      fasetingName: fasetingName,
      flag: flagPicker(this.state.selectedValue),
    };

    if (colorImageUrl && fasetingImageUrl !== "") {
      this.setState({
        desable: false,
      });

      addPricList(newPriceList);
      onClose();
    }
  };

  handleValue = (data) => {
    console.log(data);
    this.setState({ selectedValue: data });
  };

  render() {
    const { showColorModal, showFasetModal, onClose } = this.props;

    return (
      <div className="Modal-Price-List">
        <div className="Modal-Title">
          <div>Добавить Прайс Лист</div>
          <Icon icon={faTimes} onClick={onClose} />
        </div>
        <div className="Price-List-Modal-Block">
          <div className="Price-List-Modal-Block-Item">
            <SelectBox
              selectedValue={this.state.selectedValue}
              changeState={this.handleValue}
            />
            <ColorListContainer />
            <FasetingListContainer />
            <Modal.Footer style={{ border: "none", padding: "0" }}>
              <Button onClick={this.props.onClose} variant="light">
                Отмена
              </Button>
              <Button
                variant="secondary "
                onClick={this.addedPriceListItem}
                disabled={this.state.desable}
              >
                Добавить
              </Button>
            </Modal.Footer>
            {showColorModal && <ColorListModal />}
            {showFasetModal && <FasetingListModal />}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  showColorModal: state.priceList.showColorModal,
  showFasetModal: state.priceList.showFasetModal,
  colorImageUrl: state.priceList.colorImageUrl,
  colorName: state.priceList.colorName,
  fasetingImageUrl: state.priceList.fasetingImageUrl,
  fasetingName: state.priceList.fasetingName,
  rateValue: state.priceList.rateValue,
});
const mapDispatchToProps = (dispatch) => ({
  addPricList: (it) => dispatch(addPricList(it)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PriceListModal);
