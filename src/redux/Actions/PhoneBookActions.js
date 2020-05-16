import { ADD_ITEM, DELETE_ITEM, FILTER_CONTACTS } from "../Types/index";

export const addItem = (contact) => ({
  type: ADD_ITEM,
  payload: contact,
});

export const deleteItem = (id) => ({
  type: DELETE_ITEM,
  payload: id,
});

export const filterContacts = (event) => ({
  type: FILTER_CONTACTS,
  payload: event.target.value,
});
