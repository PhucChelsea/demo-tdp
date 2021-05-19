import hobbyReducer from "./reducers/hobby-reducer";
import userReducer from "./reducers/user-reducer";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  hobby: hobbyReducer,
  user: userReducer,
});
export default rootReducer;
