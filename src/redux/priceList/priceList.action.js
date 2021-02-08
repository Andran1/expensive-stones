import actionType from "./priceList.action.type";

export const addedItemFasetingList = (fasetingItem) => ({
  type: actionType.ADD_ITEM_FASETING_LIST,
  payload: fasetingItem,
});
export const addedItemColorList = (colorItem) => ({
  type: actionType.ADD_ITEM_COLOR_LIST,
  payload: colorItem,
});

export const toggleModal = () => ({
  type: actionType.TOGGLE_MODAL,
});
export const toggleModalFaseting = () => ({
  type: actionType.TOGGLE_MODAL_FASET,
});
export const clearPriceModalList = () => ({
  type: actionType.CLEAR_PRICE_MODAL_LIST,
});
export const takeColorData = (colorData) => ({
  type: actionType.TAKE_COLOR_DATA,
  payload: colorData,
});
export const takesFasetingImageUrl = (fasetingUrl) => ({
  type: actionType.TAKE_FASETING_DATA,
  payload: fasetingUrl,
});
export const handleValue = (rate) => ({
  type: actionType.HANDLE_RATE_VALUE,
  payload: rate,
});
export const addPricList = (list) => ({
  type: actionType.ADD_PRIC_LIST,
  payload: list,
});

export const selectedItemId = (itemId) => ({
  type: actionType.SELECTED_ITEM_ID,
  payload: itemId,
});
export const uptadePriceList = (data) => ({
  type: actionType.UPDATE_PRICE_LIST,
  payload: data,
});



