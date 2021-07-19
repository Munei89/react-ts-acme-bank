import { combineReducers, Action } from "@reduxjs/toolkit";
import { ThunkAction } from "redux-thunk";

import onlineReducer from "./onlineSlice";

const reducer = combineReducers({
  network: onlineReducer,
});

export type RootState = ReturnType<typeof reducer>;
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;

export default reducer;
