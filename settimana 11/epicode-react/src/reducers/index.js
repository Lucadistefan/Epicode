import { combineReducers } from "redux";
import { usersReducer } from "./users.reducer";

export const reducers = combineReducers({
  users: usersReducer,
});
