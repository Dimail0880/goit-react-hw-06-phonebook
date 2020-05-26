// import { createStore } from "redux";
// import { devToolsEnhancer } from "redux-devtools-extension";
// import rootReducer from "../Reducers/index";
import { configureStore } from "@reduxjs/toolkit";
import PhoneBookReducer from "../Reducers/PhoneBookReducer";
import FilterReducer from "../Reducers/FilterReducer";

const rootReducer = {
  contacts: PhoneBookReducer,
  filter: FilterReducer,
};

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
});

// const store = createStore(rootReducer, devToolsEnhancer());

export default store;
