// import { ADD_ITEM, DELETE_ITEM, FILTER_CONTACTS } from "../Types/index";
import { createAction } from "@reduxjs/toolkit";

export const addItem = createAction("item/add");
export const deleteItem = createAction("item/delete");
export const filterContacts = createAction("contacts/filter", function prepare(
  event
) {
  return {
    payload: event.target.value,
  };
});

// export const filterContacts = (event) => ({
//   type: FILTER_CONTACTS,
//   payload: event.target.value,
// });

// export const deleteItem = (id) => ({
//   type: DELETE_ITEM,
//   payload: id,
// });

// export const addItem = (contact) => ({
//   type: ADD_ITEM,
//   payload: contact,
// });
