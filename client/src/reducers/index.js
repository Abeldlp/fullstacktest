import counterReducer from "./counter";
import loggedReducer from "./isLogged";
import question1Reducer from "./question1";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  logged: loggedReducer,
  counter: counterReducer,
  question1: question1Reducer,
});

export default rootReducer;
