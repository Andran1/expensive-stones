import actionType from "./tableList.action.type";

export const addItemTable = (item) => ({
  type: actionType.ADD_ITEM_TABLE,
  payload: item,
});

export const setSlidShadeValue = (value) => ({
  type: actionType.SET_SLID_SHADE_VALUE,
  payload: value,
});
export const setSlidPurityValue = (value) => ({
  type: actionType.SET_SLID_PURITY_VALUE,
  payload: value,
});

