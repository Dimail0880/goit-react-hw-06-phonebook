import { FILTER_CONTACTS } from "../Types/index";
const initialState = "";
export default (state = initialState, action, contacts) => {
  switch (action.type) {
    case FILTER_CONTACTS:
      return contacts.filter((el) =>
        el.name.toLowerCase().includes(state.toLowerCase())
      );

    default:
      return state;
  }
};
