import { combineReducers, Action } from "@reduxjs/toolkit";
import { ThunkAction } from "redux-thunk";

import { accountReducer } from "pages/Home/slice";

const reducer = combineReducers({
  userAccounts: accountReducer,
});

export type RootState = ReturnType<typeof reducer>;
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;

export default reducer;
