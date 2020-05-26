// import { ADD_ITEM, DELETE_ITEM } from "../Types";
import storage from "../../../src/helpers/storage";
import { createReducer } from "@reduxjs/toolkit";
import { addItem, deleteItem } from "../Actions/PhoneBookActions";

let initialState = [];
const contactsData = storage.get("contacts");
if (contactsData) {
  initialState = contactsData;
}
export default createReducer(initialState, {
  [addItem]: (state, action) => [...state, action.payload],
  [deleteItem]: (state, action) =>
    state.filter((contact) => contact.id !== action.payload),
});

// const initialState = [];

// export default (state = initialState, action) => {
//   const contactsData = storage.get("contacts");
//   if (contactsData) {
//     state = contactsData;
//   }
//   switch (action.type) {
//     case ADD_ITEM:
//       return [...state, action.payload];
//     case DELETE_ITEM:
//       return state.filter((contact) => contact.id !== action.payload);
//     default:
//       return state;
//   }
// };
