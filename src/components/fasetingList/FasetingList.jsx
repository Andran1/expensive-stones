import { Component } from "react";
import { connect } from "react-redux";
import "./fasetingList.scss";
import { takesFasetingImageUrl } from "../../redux/priceList/priceList.action";

class FasetingList extends Component {
  takesUrl = (data) => {
    this.props.takesFasetingImageUrl(data);
  };
  render() {
    const { fasetingList } = this.props;

    return (
      <div className="Faseting-List-Block">
        {fasetingList.map((data, index) => {
          const { cutUrl, cutName } = data;
          return (
            <div key={index} style={{ margin: "0 10px 0 10px" }}>
              <div className="Faseting-List-Img">
                <img
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "10px",
                  }}
                  src={cutUrl}
                  alt=""
                  onClick={() => this.takesUrl(data)}
                />
              </div>
              <div className="Faseting-List-Name">{cutName}</div>
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  fasetingList: state.priceList.fasetingList,
});
const mapDispatchToProps = (dispatch) => ({
  takesFasetingImageUrl: (link) => dispatch(takesFasetingImageUrl(link)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FasetingList);
