import { eventChannel } from "redux-saga";
import { call, put, take } from "redux-saga/effects";

import registerOnlineListener from "utils/onlineListener";
import { onlineStatusChange } from "reducers/onlineSlice";

export function getOnlineChannel() {
  return eventChannel<boolean>((emit: (status: boolean) => void) => {
    const unregisterOnlineListener = registerOnlineListener(emit);

    return () => {
      unregisterOnlineListener();
    };
  });
}

function* watchOnlineStatus() {
  const channel = yield call(getOnlineChannel);

  yield put(onlineStatusChange(navigator.onLine));

  while (true) {
    const status: boolean = yield take(channel);
    yield put(onlineStatusChange(status));
  }
}

export default watchOnlineStatus;
