import { Component } from "react";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import FasetingList from '../fasetingList/FasetingList'
import Icon from "../icon/Icon";
import './fasetingListContainer.scss'

class FasetingListContainer extends Component {
  render() {
    return (
      <div className="Faseting-List-Container">
        <span>Огранка</span>
        <div className="Faseting-List-Container-Item">
          <Icon icon={faPlus} />
          <FasetingList/>
        </div>
      </div>
    );
  }
}
export default FasetingListContainer;
