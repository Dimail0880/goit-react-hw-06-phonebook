import { FILTER_CONTACTS } from "../Types/index";
const initialState = "";
export default (state = initialState, action) => {
  switch (action.type) {
    case FILTER_CONTACTS:
      return (state = action.payload);

    default:
      return state;
  }
};
