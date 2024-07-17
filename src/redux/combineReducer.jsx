import { combineReducers } from "redux";
import { profileReducer } from "./reducer/profileReducer";
import todoReducer from "./reducer/reducer";

export const rootReducer = combineReducers({
  profile: profileReducer,
  todos: todoReducer,
});
