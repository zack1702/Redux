import { combineReducers } from "redux";
import { filterReducer } from "./filterReducer";
import { todoReducer } from "./todoReducer";

export const allReducers = combineReducers({
    filterReducer: filterReducer,
    todoReducer: todoReducer
})