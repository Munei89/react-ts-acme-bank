import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ContainerState, IAccounts } from "./types";

export const initialState: ContainerState = {
  userAccounts: [],
  loading: false,
  error: false,
  withdrawal: false,
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
    withdrawRequest(
      state,
      action: PayloadAction<{
        accountNumber: string | number;
        amount?: string | number;
      }>
    ) {
      state.loading = true;
      state.userAccounts.find(
        (v) => v.account_number === action.payload.accountNumber
      )!.balance = "20";
      state.withdrawal = true;
      state.loading = false;
    },
    // withdrawRequestSuccess(
    //   state,
    //   action: PayloadAction<{
    //     accountNumber: string | number;
    //     amount?: string | number;
    //   }>
    // ) {
    //   state.loading = true;
    //   state.userAccounts.find(
    //     (v) => v.account_number === action.payload.accountNumber
    //   )!.balance = "20";
    //   state.loading = false;
    // },
  },
});

export const {
  actions,
  reducer: accountReducer,
  name: sliceKey,
} = userAccountSlice;
