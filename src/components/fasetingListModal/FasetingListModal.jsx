import "./fasetingListModal.scss";
import cutImages from "../fakeApi/cutImage";
import { connect } from "react-redux";
import {
  addedItemFasetingList,
  toggleModalFaseting
} from "../../redux/priceList/priceList.action";
import idGenerator from "../../idGenerator/idGenerator";

const FasetingListModal = ({
  addedItemFasetingList,
  toggleModalFaseting,

}) => {
  const addedFaseting = (name, url) => {

    const newFaseting = {
      id: idGenerator(),
      cutName: url,
      cutUrl: name,
    };
    addedItemFasetingList(newFaseting);
    toggleModalFaseting();

  };
  return (
    <div className="faseting-list-modal" >
      {cutImages.map(({ cutName, cutUrl }, index) => {
        return (
          <div key={index}>
            <img
              src={cutUrl}
              alt="post"
              style={{
                width: "50px",
                height: "50px",
                objectFit: "cover",
              }}
              onClick={() => addedFaseting(cutUrl, cutName)}
            />
          </div>
        );
      })}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addedItemFasetingList: (color, link) =>
    dispatch(addedItemFasetingList(color, link)),
  toggleModalFaseting: () => dispatch(toggleModalFaseting()),
  
});

export default connect(null, mapDispatchToProps)(FasetingListModal);
