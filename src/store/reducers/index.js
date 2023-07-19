/* 合并各个模块的reducer */
import { combineReducers } from "redux";
import personalReducer from "./personalReducer";
import voteReducer from "./voteReducer";

const reducer = combineReducers({
  vote: voteReducer,
  personal: personalReducer,
});

export default reducer;
