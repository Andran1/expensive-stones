import { Component } from "react";
import { connect } from "react-redux";
import { Th, Td } from "./components/TableElements/TableElements";
import TablesModal from "../groupList/components/slider/tablesModal/TablesModal";
import "./groupList.scss";

class GroupList extends Component {
  state = {
    showGroupModal: false,
  };

  handleClick = () => {
    this.setState({
      showGroupModal: !this.state.showGroupModal,
    });
  };

  render() {
    const { priceList, selectedPriceLisItemId } = this.props;
    const selectedItem = priceList.find(
      (item) => item.id === selectedPriceLisItemId
    );

    return (
      <div className="group-list">
        <span>Группы</span>
        {selectedItem && (
          <table style={{ marginTop: "20px", borderRadius: "5px" }}>
            <thead>
              <tr>
                <Th colSpan={2}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "spaceBetween",
                    }}
                  >
                    <img
                      src={selectedItem.flag}
                      alt=""
                      style={{
                        objectFit: "cover",
                        width: "45px",
                        height: "25px",
                      }}
                    />
                    <span style={{ marginLeft: "10px" }}>
                      {selectedItem.rate}
                    </span>
                  </div>
                </Th>
                <Th colSpan="100%">Качества</Th>
              </tr>
              <tr style={{ backgroundColor: "#ffffff30" }}>
                <Th style={{ borderRight: "none" }}>
                  <div>
                    <img
                      src={selectedItem.colorUrl}
                      alt=""
                      style={{
                        width: "45px",
                        height: "45px",
                        borderRadius: "50px",
                      }}
                    />
                  </div>
                  <div style={{ fontSize: "10px", fontWeight: "300" }}>
                    {selectedItem.colorName}
                  </div>
                </Th>
                <Th
                  style={{
                    borderLeft: "none",
                  }}
                >
                  <div>
                    <img
                      src={selectedItem.fasetingUrl}
                      alt=""
                      style={{
                        width: "45px",
                        height: "45px",
                        borderRadius: "50px",
                      }}
                    />
                  </div>
                  <div style={{ fontSize: "10px", fontWeight: "300" }}>
                    {selectedItem.fasetingName}
                  </div>
                </Th>
                <Th colSpan={2}>
                  <table>
                    <tbody>
                      <tr style={{ borderBottom: "1px solid white" }}>
                        <td colSpan={2}>Отличное</td>
                      </tr>
                      <tr>
                        <td
                          style={{
                            borderRight: "1px solid white",
                            padding: "10px",
                          }}
                        >
                          Супер
                        </td>
                        <td style={{ padding: "10px" }}>Супер</td>
                      </tr>
                    </tbody>
                  </table>
                </Th>
                <Th>
                  <table>
                    <tbody>
                      <tr
                        style={{
                          borderBottom: "1px solid white",
                        }}
                      >
                        <td colSpan={2}>Плохо</td>
                      </tr>
                      <tr>
                        <td style={{ padding: "10px" }}>Супер</td>
                      </tr>
                    </tbody>
                  </table>
                </Th>

                {this.props.tableItems.map((col, idx) => {
                  return (
                    <Th key={idx}>
                      <div>
                        {col.slidPurityValue}-{col.slidShadeValue}
                      </div>
                      <div>{col.inputNameValue}</div>
                    </Th>
                  );
                })}
                <Th onClick={this.handleClick} style={{ cursor: "pointer" }}>
                  +
                </Th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <Td>Размер</Td>
                <Td></Td>
                <Td colSpan="100%">Цена</Td>
              </tr>

              {this.props.tableItems.map((row, idx) => {
                return (
                  <tr key={idx}>
                    <Td>{row.inputSaleValue}</Td>
                    <Td>09.80</Td>
                    <Td>500$</Td>
                    <Td>500$</Td>
                    <Td>500$</Td>

                    {this.props.tableItems.map((item, idx) => {
                      return <Td key={idx}>500$</Td>;
                    })}

                    <Td>X</Td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
        {this.state.showGroupModal && (
          <TablesModal onClose={this.handleClick} />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  priceList: state.priceList.priceList,
  selectedPriceLisItemId: state.priceList.selectedPriceLisItemId,
  tableItems: state.tableList.tableItems,
});

export default connect(mapStateToProps)(GroupList);
