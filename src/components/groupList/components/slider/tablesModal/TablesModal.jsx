import { Component } from "react";
import SliderPurity from "../SliderPurity";
import SliderShade from "../SliderShade ";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { Modal, Button } from "react-bootstrap";
import Icon from "../../../../icon/Icon";
import "./tablesModal.scss";
import { connect } from "react-redux";
import { addItemTable } from "../../../../../redux/tableList/tableList.action";

const purityMarks = [
  { label: "IF", value: 0 },
  { value: 10, label: "VVS1" },
  { value: 20, label: "VVS2" },
  { value: 30, label: "VS1" },
  { value: 40, label: "VS2" },
  { value: 50, label: "FL" },
  { value: 60, label: "PL" },
  { value: 70, label: "P2" },
  { value: 80, label: "SI1" },
  { value: 90, label: "SI2" },
];

const shadeMarks = [
  { value: 0, label: "D" },
  { value: 10, label: "E" },
  { value: 20, label: "F" },
  { value: 30, label: "G" },
  { value: 40, label: "H" },
  { value: 50, label: "I" },
  { value: 60, label: "J" },
];

class TablesModal extends Component {
  state = {
    inputNameValue: "",
    inputSaleValue: "",
    shade: [10, 40],
    purity: [10, 60],
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  // addedItemTables = () => {
  //   const newItemTable = {
  //     slidShadeValue: this.props.slidShadeValue,
  //     slidPurityValue: this.props.slidPurityValue,
  //     inputNameValue: this.state.inputNameValue,
  //     inputSaleValue: this.state.inputSaleValue,
  //   };
  //   this.props.addItemTable(newItemTable);
  //   this.setState({
  //     inputNameValue: "",
  //     inputSaleValue: "",
  //   });
  // };

  handleShadeChange = (event, value) => {
    this.setState(() => ({ shade: value }));
  };
  handlePurityChange = (event, value) => {
    this.setState(() => ({ purity: value }));
  };

  handleSubmit = () => {
    const [purityStartValue, purityEndValue] = this.state.purity;
    const [shadeStartValue, shadeEndValue] = this.state.shade;

    const purityStartValueObject = purityMarks.find(
      (markItem) => markItem.value === purityStartValue
    );
    const purityEndValueObject = purityMarks.find(
      (markItem) => markItem.value === purityEndValue
    );

    const shadeStartValueObject = shadeMarks.find(
      (markItem) => markItem.value === shadeStartValue
    );
    const shadeEndValueObject = shadeMarks.find(
      (markItem) => markItem.value === shadeEndValue
    );

    const newItemTable = {
      slidShadeValue: `${shadeStartValueObject.label}-${shadeEndValueObject.label}`,
      slidPurityValue: `${purityStartValueObject.label}-${purityEndValueObject.label}`,
      inputNameValue: this.state.inputNameValue,
      inputSaleValue: this.state.inputSaleValue,
    };

    this.props.addItemTable(newItemTable);
    this.props.onClose();
    console.log(newItemTable);
  };

  render() {
    return (
      <div className="tables-modal-container">
        <div className="tables-modal-title">
          <div>Группы</div>
          <Icon icon={faTimes} onClick={this.props.onClose} />
        </div>
        <div>
          <div>
            <div className="tables-modal-slider">
              <SliderShade
                onChange={this.handleShadeChange}
                marks={shadeMarks}
                min={0}
                max={60}
                step={10}
                value={this.state.shade}
              />
              <SliderPurity
                onChange={this.handlePurityChange}
                marks={purityMarks}
                min={0}
                max={100}
                step={10}
                value={this.state.purity}
              />
            </div>
            <div className="table-modal-input">
              <div>
                <p>Внутренняя Имя</p>
                <input
                  name="inputNameValue"
                  type="text"
                  onChange={this.handleChange}
                />
              </div>
              <div>
                <p>Для Продаже</p>
                <input
                  name="inputSaleValue"
                  type="text"
                  onChange={this.handleChange}
                />
              </div>
            </div>

            <Modal.Footer className="tables-modal-foter">
              <Button variant="light" onClick={this.props.onClose}>
                Отмена
              </Button>
              <Button variant="secondary " onClick={this.handleSubmit}>
                Добавить
              </Button>
            </Modal.Footer>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  slidShadeValue: state.tableList.slidShadeValue,
  slidPurityValue: state.tableList.slidPurityValue,
});
const mapDispatchToProps = (dispatch) => ({
  addItemTable: (item) => dispatch(addItemTable(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TablesModal);
