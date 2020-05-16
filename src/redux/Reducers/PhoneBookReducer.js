import { ADD_ITEM, DELETE_ITEM } from "../Types";

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return [...state, action.payload];
    case DELETE_ITEM:
      return state.filter((contact) => contact.id !== action.payload);
    default:
      return state;
  }
};
