import { combineReducers } from "redux";
import PhoneBookReducer from "./PhoneBookReducer";
import FilterReducer from "./FilterReducer";

const rootReducer = combineReducers({
  contacts: PhoneBookReducer,
  filter: FilterReducer,
});

export default rootReducer;
