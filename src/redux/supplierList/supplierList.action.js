import actionType from "./supplierList.action.type";

export const setItmeType = (type) => ({
  type: actionType.SET_ITEM_TYPE,
  payload: type,
});

export const addItemSupplierList = (item) => ({
    type: actionType.ADD_ITEM_SUPPLIER_LIST,
    payload: item,
  });

export const toggleModalSupplier = () => ({
    type: actionType.HID_MODAL_SUPPLIER,
 
  });

  export const toggleIcon = () => ({
    type: actionType.TOGGLE_ICON,
 
  });
  export const addedImageSupplierModal = (url) => ({
    type: actionType.ADDED_IMAGE_SUPPLIER_MODAL,
    payload: url
  });



