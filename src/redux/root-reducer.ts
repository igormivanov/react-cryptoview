import { combineReducers } from "redux";
import coinReducer from "./coin/reducer";

const rootReducer = combineReducers({ coinReducer });

export default rootReducer;