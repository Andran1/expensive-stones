import { Component } from "react";
import Icon from "../icon/Icon";
import { faTimes, faPlus } from "@fortawesome/free-solid-svg-icons";
import "./showModalSupplier.scss";
import { Form, Modal, Button } from "react-bootstrap";
import idGenerator from "../../idGenerator/idGenerator";
import { connect } from "react-redux";
import {
  addItemSupplierList,
  toggleModalSupplier,
} from "../../redux/supplierList/supplierList.action";

class ShowModalSupplier extends Component {
  state = {
    hid: "none",
    show: "",
    inputTypeValue: "",
    inputNamesValue: "",
  };

  toggleIcon = () => {
    this.setState({
      hid: "",
      show: "none",
    });
  };

  addedSupplier = () => {
    const { inputTypeValue, inputNamesValue } = this.state;
    const { addItemSupplierList, toggleModalSupplier } = this.props;
    const newItem = {
      id: idGenerator(),
      name: inputNamesValue,
      type: inputTypeValue,
      imgUrl: "",
    };
    addItemSupplierList(newItem);
    this.setState({
      inputNamesValue: "",
    });
    toggleModalSupplier();
  };
  render() {
    const { hid, show, inputTypeValue, inputNamesValue } = this.state;

    return (
      <div className="Modal-window">
        <div className="Modal-Title">
          <div>Добавить Поставщики</div>
          <Icon icon={faTimes} onClick={this.props.onClose} />
        </div>

        <div className="Modal-Body">
          <div className="Download-Img">
            <div style={{ display: `${show}` }}>
              <Icon icon={faPlus} onClick={this.toggleIcon} />
              <div style={{ color: "silver", fontSize: "19px" }}>Фото</div>
            </div>
            <input style={{ display: `${hid}` }} type="file" />
          </div>

          <div>
            <div className="Input-Title">Названия</div>
            <input
              onChange={(event) =>
                this.setState({ inputNamesValue: event.target.value })
              }
              className="Input-Supplier-Name"
              type="text"
              value={inputNamesValue}
            />
          </div>
          <div>
            <Form>
              <Form.Group style={{ marginTop: "15px" }}>
                <div style={{ color: "white" }}>Тип</div>
                <Form.Control
                  as="select"
                  size="sm"
                  custom
                  className="Input-Select"
                  type="text"
                  onChange={(event) =>
                    this.setState({ inputTypeValue: event.target.value })
                  }
                  value={inputTypeValue}
                >
                  <option value="Тип1">Тип-1</option>
                  <option value="Тип2">Тип-2</option>
                  <option value="Тип3">Тип-3</option>
                  <option value="Тип4">Тип-4</option>
                  <option value="Тип5">Тип-5</option>
                </Form.Control>
              </Form.Group>
            </Form>
            <Modal.Footer className="Modal-Footer">
              <Button onClick={this.props.onClose} variant="light">
                Отмена
              </Button>
              <Button variant="secondary " onClick={this.addedSupplier}>
                Добавить
              </Button>
            </Modal.Footer>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addItemSupplierList: (item) => dispatch(addItemSupplierList(item)),
  toggleModalSupplier: () => dispatch(toggleModalSupplier()),
});

export default connect(null, mapDispatchToProps)(ShowModalSupplier);
