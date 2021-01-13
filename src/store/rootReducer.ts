import { combineReducers } from "redux";
import { currencyReducer } from "./currency/reducer";

const rootReducer = combineReducers({
  currency: currencyReducer,
});

export { rootReducer };
