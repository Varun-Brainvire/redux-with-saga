import { combineReducers } from "redux";
import { userData } from "../slice/userSlice";

const rootReducer = combineReducers({ userData: userData.reducer });
export default rootReducer;
