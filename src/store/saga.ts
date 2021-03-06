import { all, fork } from "redux-saga/effects";

import { homeSaga } from "pages/Home/saga";

function* rootSaga() {
  yield all([fork(homeSaga)]);
}

export default rootSaga;
