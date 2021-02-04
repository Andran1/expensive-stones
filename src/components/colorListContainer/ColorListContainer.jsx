import { Component } from "react";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import ColorList from '../colorList/ColorList'
import Icon from "../icon/Icon";
import './colorListContainer.scss'

class ColorListContainer extends Component {
  render() {
    return (
      <div className="Color-List-Container">
        <span>Цвет</span>
        <div className="Color-List-Container-Item">
          <Icon icon={faPlus} />
          <ColorList/>

        </div>
      </div>
    );
  }
}
export default ColorListContainer;
