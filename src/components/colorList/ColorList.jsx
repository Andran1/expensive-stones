import { Component } from "react";
import "./colorList.scss";

class ColorList extends Component {
  render() {
    return (
      <div className="Color-List-Block">
        <div>
          <div className="Color-List-Img">
            <img
              style={{ width: "100%", height: "100%", borderRadius: "10px" }}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH6QNOp4MFXNvto44F6ZB1Ewq6E_50oaiMuA&usqp=CAU"
              alt=""
            />
          </div>
          <div className="Color-List-Name">Белый</div>
        </div>
      </div>
    );
  }
}
export default ColorList;
