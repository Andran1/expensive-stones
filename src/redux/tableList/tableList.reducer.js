import actionType from "./tableList.action.type";

const INITIAL_STATE = {
  tableItems:[],
  slidShadeValue:'',
  slidPurityValue:''
};

const tableListReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionType.ADD_ITEM_TABLE:
      return {
        ...state,
        tableItems: [...state.tableItems, action.payload],
      };
      case actionType.SET_SLID_SHADE_VALUE:
        return {
          ...state,
          slidShadeValue:  action.payload,
        };
        case actionType.SET_SLID_PURITY_VALUE:
          return {
            ...state,
            slidPurityValue:action.payload,
          };

    default:
      return state;
  }
};

export default tableListReducer;
