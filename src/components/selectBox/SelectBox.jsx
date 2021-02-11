import React, { Component } from "react";
import "./selectBox.scss";
import { connect } from "react-redux";
import { handleValue } from "../../redux/priceList/priceList.action";

const options = [
  { value: "USD", name: "USD" },
  { value: "ARM", name: "ARM" },
  { value: "RUB", name: "RUB" },
];

class SelectBox extends Component {
  render() {
    return (
      <div>
        <div className="title">Валюта</div>
        <select
          value={this.props.selectedValue}
          name=""
          id=""
          className="select-box"
          onChange={(event) => this.props.changeState(event.target.value)}
        >
          {options.map((item, index) => {
            return (
              <option key={index} value={item.value}>
                {item.name}
              </option>
            );
          })}
        </select>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  handleValue: (rate) => dispatch(handleValue(rate)),
});

export default connect(null, mapDispatchToProps)(SelectBox);
