import { Component } from "react";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import ColorList from "../colorList/ColorList";
import Icon from "../icon/Icon";
import "./colorListContainer.scss";
import { connect } from "react-redux";
import {toggleModal} from "../../redux/priceList/priceList.action"

class ColorListContainer extends Component {
  render() {
    const {toggleModal}=this.props
    return (
      <div className="Color-List-Container">
        <span>Цвет</span>
        <div className="Color-List-Container-Item">
          <Icon icon={faPlus} onClick={toggleModal} />
          <ColorList />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  toggleModal: () => dispatch(toggleModal()),
});

export default connect(null, mapDispatchToProps)(ColorListContainer);
