import { USD, ARM,RUS } from "./usd";

const flagPicker = (type) => {
  if (type === "USD") {
    return USD;
  }
  if (type === "ARM") {
    return ARM;
  }
  if (type === "RUB") {
    return RUS;
  }
};

export default flagPicker;
