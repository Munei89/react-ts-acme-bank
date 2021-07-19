import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type OnlineState = {
  online: boolean;
};

const initialState: OnlineState = {
  online: false,
};

const onlineSlice = createSlice({
  name: "network",
  initialState,
  reducers: {
    onlineStatusChange(state: OnlineState, action: PayloadAction<boolean>) {
      if (state.online !== action.payload) {
        return { online: action.payload };
      }
    },
  },
});

export const { onlineStatusChange } = onlineSlice.actions;

export default onlineSlice.reducer;
