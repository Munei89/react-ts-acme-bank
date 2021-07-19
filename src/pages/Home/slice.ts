import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ContainerState, IAccounts } from "./types";

export const initialState: ContainerState = {
  userAccounts: [],
  loading: false,
  error: false,
};

const userAccountSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    getAccounts(state) {
      state.loading = true;
    },
    getAccountsSuccess(state, action: PayloadAction<IAccounts[]>) {
      state.userAccounts = action.payload;
      state.loading = false;
      state.error = false;
    },
    getAccountsError(state) {
      state.loading = false;
      state.error = true;
    },
  },
});

export const {
  actions,
  reducer: accountReducer,
  name: sliceKey,
} = userAccountSlice;
