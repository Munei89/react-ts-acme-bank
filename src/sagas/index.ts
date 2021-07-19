import { all } from "redux-saga/effects";

import watchOnlineStatus from "./onlineSaga";

function* rootSaga() {
  yield all([watchOnlineStatus()]);
}

export default rootSaga;
