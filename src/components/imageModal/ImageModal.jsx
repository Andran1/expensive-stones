import image from "../fakeApi/images";
import "./imageModal.scss";
import { GalleryContainer,Gallery,GalleryItem } from "./ImageModal.styled";
import { addedImageSupplierModal} from '../../redux/supplierList/supplierList.action'
import { connect } from "react-redux";


const ImageModal = ({hid,addedImageSupplierModal}) => {


 const addedImage=(url)=>{
  addedImageSupplierModal(url)
  }

  return (
    <GalleryContainer hid={hid}>
      <Gallery >
        {image.map(({ url }, index) => {
          return (
            <GalleryItem  key={index}>
              <img
                src={url}
                alt="post"
                style={{
                  width: "100px",
                  height: "100px",
                  objectFit: "cover",
                }}
                onClick={()=>addedImage(url)}
              />

            </GalleryItem>
          );
        })}
      </Gallery>
    </GalleryContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addedImageSupplierModal: (url) => dispatch(addedImageSupplierModal(url)),

});

export default connect(null, mapDispatchToProps)(ImageModal);

