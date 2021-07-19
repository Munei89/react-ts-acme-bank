import { createSelector } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

import { RootState } from "types";
import { initialState } from "./slice";

export const selectDomain = (state: RootState) => state.home || initialState;

export const select = () => createSelector([selectDomain], (state) => state);

export default () => useSelector(select());
