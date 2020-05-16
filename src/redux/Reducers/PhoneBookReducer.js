import { ADD_ITEM, DELETE_ITEM } from "../Types";
import storage from "../../../src/helpers/storage";

const initialState = [];

export default (state = initialState, action) => {
  const contactsData = storage.get("contacts");
  if (contactsData) {
    state = contactsData;
  }
  switch (action.type) {
    case ADD_ITEM:
      return [...state, action.payload];
    case DELETE_ITEM:
      return state.filter((contact) => contact.id !== action.payload);
    default:
      return state;
  }
};
