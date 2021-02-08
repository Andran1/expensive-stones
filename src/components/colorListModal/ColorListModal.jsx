import "./colorListModal.scss";
import colorImages from "../fakeApi/colorImage.js";
import { connect } from "react-redux";
import {
  addedItemColorList,
  toggleModal

} from "../../redux/priceList/priceList.action";
import idGenerator from "../../idGenerator/idGenerator"

const ColorListModal = ({ addedItemColorList, toggleModal,takesColorImageUrl }) => {

  const addedColor = (color, colorName) => {
    const newColor = {
      id:idGenerator(),
      colorName:  color,
      colorUrl: colorName,
    };
    addedItemColorList(newColor);
    toggleModal();

  };

  return (
    <div>
      <div className='color-list-modal'>
        {colorImages.map(({ colorName, colorUrl }, index) => {
          return (
            <div key={index}>
              <img
                src={colorUrl}
                alt="post"
                style={{
                  width: "50px",
                  height: "50px",
                  objectFit: "cover",
                }}
                onClick={() => addedColor(colorName, colorUrl)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addedItemColorList: (color, link) =>
    dispatch(addedItemColorList(color, link)),
    toggleModal: () => dispatch(toggleModal()),
  
});

export default connect(null, mapDispatchToProps)(ColorListModal);
