import { legacy_createStore } from "redux"
import todoReducer from "../reducer/reducer"



export const reduxStore=legacy_createStore(todoReducer)