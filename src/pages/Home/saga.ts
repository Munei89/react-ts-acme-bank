import axios from "axios";
import { call, take, put, takeLatest } from "redux-saga/effects";
import request from "utils/request";
import { actions } from "./slice";
import { IAccounts } from "./types";

function* getOnlineAccounts() {
  try {
    const response: IAccounts[] = yield call(request.get, {
      url: "accounts",
      auth: false,
    });
    yield put(actions.getAccountsSuccess(response));
  } catch (err) {
    yield put(actions.getAccountsError());
  }
}
export default getOnlineAccounts;
