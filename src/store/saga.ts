import { all } from "redux-saga/effects";

import getAccounts from "pages/Home/saga";

function* rootSaga() {
  yield all([getAccounts()]);
}

export default rootSaga;
