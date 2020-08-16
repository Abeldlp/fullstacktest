import question1Reducer from "./question1";
import question3Reducer from "./question3";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  question1: question1Reducer,
  question3: question3Reducer,
});

export default rootReducer;
