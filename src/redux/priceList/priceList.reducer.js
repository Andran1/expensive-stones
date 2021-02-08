import actionType from "./priceList.action.type";
import PostCut from "../../assets/cut/oval.jpg";
import PostColor from "../../assets/cut-color/beli.jpg";
import idGenerator from "../../idGenerator/idGenerator";

const INITIAL_STATE = {
  fasetingList: [
    {
      id: idGenerator(),
      cutName: "Овал",
      cutUrl: PostCut,
    },
  ],
  colorList: [
    {
      id: idGenerator(),
      colorName: "Белый",
      colorUrl: PostColor,
    },
  ],
  showColorModal: false,
  showFasetModal: false,
  colorImageUrl: "",
  colorName: "",
  fasetingImageUrl: "",
  fasetingName: "",

  rateValue: "",
  priceList: [],
  selectedPriceLisItemId: null,
};

const priceListReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionType.ADD_ITEM_FASETING_LIST:
      return {
        ...state,
        fasetingList: [...state.fasetingList, action.payload],
      };
    case actionType.ADD_ITEM_COLOR_LIST:
      return {
        ...state,
        colorList: [...state.colorList, action.payload],
      };

    case actionType.TOGGLE_MODAL:
      return {
        ...state,
        showColorModal: !state.showColorModal,
      };
    case actionType.TOGGLE_MODAL_FASET:
      return {
        ...state,
        showFasetModal: !state.showFasetModal,
      };
    case actionType.CLEAR_PRICE_MODAL_LIST:
      return {
        ...state,
        fasetingList: [
          {
            cutName: "Овал",
            cutUrl: PostCut,
          },
        ],
        colorList: [
          {
            colorName: "Белый",
            colorUrl: PostColor,
          },
        ],
      };

    case actionType.TAKE_COLOR_DATA:
      return {
        ...state,
        colorImageUrl: action.payload.colorUrl,
        colorName: action.payload.colorName,
      };

    case actionType.TAKE_FASETING_DATA:
      return {
        ...state,
        fasetingImageUrl: action.payload.cutUrl,
        fasetingName: action.payload.cutName,
      };
    case actionType.HANDLE_RATE_VALUE:
      return {
        ...state,
        rateValue: action.payload,
      };
    case actionType.ADD_PRIC_LIST:
      return {
        ...state,
        priceList: [...state.priceList, action.payload],
        fasetingImageUrl: "",
        colorImageUrl: "",
        rateValue: "",
      };
    case actionType.SELECTED_ITEM_ID:
      return {
        ...state,
        selectedPriceLisItemId: action.payload,
      };

      case actionType.UPDATE_PRICE_LIST:
        return {
          ...state,
          priceList:action.payload,
        };

    default:
      return state;
  }
};

export default priceListReducer;
