import { Component } from "react";
import { connect } from "react-redux";
import { takeColorData } from "../../redux/priceList/priceList.action";
import "./colorList.scss";

class ColorList extends Component {
  takesColorUrl = (data) => {
    this.props.takeColorData(data);
  };
  render() {
    const { colorList } = this.props;
    return (
      <div className="Color-List-Block">
        {colorList.map((data, index) => {
          const { colorUrl, colorName } = data;
          return (
            <div key={index} style={{ margin: "0 10px 0 10px" }}>
              <div className="Color-List-Img">
                <img
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "10px",
                  }}
                  src={colorUrl}
                  alt=""
                  onClick={() => this.takesColorUrl(data)}
                />
              </div>
              <div className="Color-List-Name">{colorName}</div>
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  colorList: state.priceList.colorList,
});

const mapDispatchToProps = (dispatch) => ({
  takeColorData: (image) => dispatch(takeColorData(image)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ColorList);
