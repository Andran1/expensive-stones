import actionType from "./supplierList.action.type";

const INITIAL_STATE = {
  showModalSupplier: false,
  hid: "none",
  show: "",
  imageUrl:'',
  imgBlock:'none',
  supplierList: [
   
  ],
};

const supplierListReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionType.SET_ITEM_TYPE:
      return {
        ...state,
        supplierType: action.payload,
      };
    case actionType.ADD_ITEM_SUPPLIER_LIST:
      return {
        ...state,
        supplierList: [...state.supplierList, action.payload],
      };
    case actionType.HID_MODAL_SUPPLIER:
      return {
        ...state,
        showModalSupplier: !state.showModalSupplier,
        imageUrl:'',
        hid: "none",
        show: "",
        imgBlock:'none',

      };
    case actionType.TOGGLE_ICON:
      return {
        ...state,
        hid: "",
        show: "none",
      };

      case actionType.ADDED_IMAGE_SUPPLIER_MODAL:
        return {
          ...state,
          imageUrl:action.payload,
          hid: "none",
          imgBlock:''
        };
    default:
      return state;
  }
};

export default supplierListReducer;

