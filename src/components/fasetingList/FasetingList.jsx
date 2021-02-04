import { Component } from "react";
import "./fasetingList.scss";

class FasetingList extends Component {
  render() {
    return (
      <div className="Faseting-List-Block">
        <div>
          <div className="Faseting-List-Img">
            <img
              style={{ width: "100%", height: "100%", borderRadius: "10px" }}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTixl5jzumRgCHFcwAMmlLi4t4EZX2fOGdslQ&usqp=CAU"
              alt=""
            />
          </div>
          <div className="Faseting-List-Name">Круг</div>
        </div>
      </div>
    );
  }
}
export default FasetingList;
