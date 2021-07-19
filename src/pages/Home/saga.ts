import { call, put, takeLatest } from "redux-saga/effects";
import request from "utils/request";
import { actions } from "./slice";
import { IAccounts } from "./types";

function* getAccounts() {
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

export function* homeSaga() {
  yield takeLatest(actions.getAccounts.type, getAccounts);
}
