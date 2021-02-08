import React from "react";

import Icon from "../../../icon/Icon";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import RemovePriceListModal from "../../../removePriceListModal/RemovePriceListModal";
import flagPicker from "../../../../assets/flags/flagPics";
import { useState } from "react";

const ListItem = (props) => {
  const { list, handleItemId, removeItem } = props;
  const [isVisible, setIsVisible] = useState(false);

  const toggleAction = () => {
    setIsVisible(!isVisible);
  };
  return (
    <div className="price-list-Item" key={list.id} onClick={handleItemId}>
      <div className="Price-List-Item">
        <div className="Price-List-img">
          <img
            style={{ width: "100%", height: "100%" }}
            src={flagPicker(list.rate)}
            alt=""
          />
        </div>
        <div style={{ color: "silver" }}>{list.rate}</div>
        <Icon icon={faEllipsisV} onClick={toggleAction} />
      </div>
      <div className="Price-List-Img-Block">
        <div className="Price-List-Img-Silver">
          <img
            style={{
              width: "45px",
              height: "45px",
              borderRadius: "50px",
            }}
            src={list.colorUrl}
            alt=""
          />
        </div>
        <div className="Price-List-Img-Silver">
          <img
            style={{
              width: "45px",
              height: "45px",
              borderRadius: "50px",
            }}
            src={list.fasetingUrl}
            alt=""
          />
        </div>
      </div>

      {isVisible && <RemovePriceListModal closeModal={removeItem} />}
    </div>
  );
};

export default ListItem;
