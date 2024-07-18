import { legacy_createStore } from "redux";
import { reducer } from "./reducer";

export const reduxStore = legacy_createStore(reducer);
