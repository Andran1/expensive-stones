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
  toggleIcon,
} from "../../redux/supplierList/supplierList.action";
import ImageModal from "../imageModal/ImageModal";

class ShowModalSupplier extends Component {
  state = {
    inputTypeValue: "",
    inputNamesValue: "",
  };

  addedSupplier = () => {
    const { inputTypeValue, inputNamesValue } = this.state;
    const { addItemSupplierList, toggleModalSupplier,imageUrl } = this.props;
    const newItem = {
      id: idGenerator(),
      name: inputNamesValue,
      type: inputTypeValue,
      imgUrl: imageUrl,
    };
    addItemSupplierList(newItem);
    this.setState({
      inputNamesValue: "",
    });
    toggleModalSupplier();
  };
  render() {
    // console.log(this.props.imageUrl);
    const { inputTypeValue, inputNamesValue } = this.state;
    const { toggleIcon, hid, show, imageUrl,imgBlock } = this.props;

    return (
      <div className="Modal-window">
        <div className="Modal-Title">
          <div>Добавить Поставщики</div>
          <Icon icon={faTimes} onClick={this.props.onClose} />
        </div>

        <div className="Modal-Body">
          <div className="Download-Img">
           <div  className="Download-Img"  style={{ display: `${imgBlock}` }}>
           <img
              src={imageUrl}
              style={{ width: "95%", height: "95%" }}
              alt=""
            />
           </div>
            <div style={{ display: `${show}` }}>
              <Icon icon={faPlus} onClick={toggleIcon} />
              <div style={{ color: "silver", fontSize: "19px" }}>Фото</div>
            </div>
            <ImageModal hid={hid} />
          </div>

          <div style={{marginTop:'10px'}}>
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
                  <option >Тип</option>
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
const mapStateToProps = (state) => ({
  hid: state.supplier.hid,
  show: state.supplier.show,
  imageUrl: state.supplier.imageUrl,
  imgBlock:state.supplier.imgBlock
});
const mapDispatchToProps = (dispatch) => ({
  addItemSupplierList: (item) => dispatch(addItemSupplierList(item)),
  toggleModalSupplier: () => dispatch(toggleModalSupplier()),
  toggleIcon: () => dispatch(toggleIcon()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShowModalSupplier);
