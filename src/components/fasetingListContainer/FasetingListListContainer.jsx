import { Component } from "react";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import FasetingList from '../fasetingList/FasetingList'
import Icon from "../icon/Icon";
import './fasetingListContainer.scss'
import { connect } from "react-redux";
import {toggleModalFaseting} from "../../redux/priceList/priceList.action"

class FasetingListContainer extends Component {
  render() {
    const {toggleModalFaseting}=this.props
    return (
      <div className="Faseting-List-Container">
        <span>Огранка</span>
        <div className="Faseting-List-Container-Item">
          <Icon icon={faPlus} onClick={toggleModalFaseting} />
          <FasetingList />
        </div>
      </div>
    );
  }
}



const mapDispatchToProps = (dispatch) => ({
  toggleModalFaseting: () => dispatch(toggleModalFaseting()),
});

export default connect(null, mapDispatchToProps)(FasetingListContainer);
