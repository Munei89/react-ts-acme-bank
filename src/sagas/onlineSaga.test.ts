import { expectSaga } from "redux-saga-test-plan";

import mockOnline from "test-helpers/navigatorOnline";
import channelFeed from "test-helpers/channelFeed";

import { onlineStatusChange } from "reducers/onlineSlice";
import { OnlineListener } from "utils/onlineListener";

jest.mock("utils/onlineListener.ts", () =>
  jest.fn((_listener: OnlineListener) => () => {})
);

import watchOnlineStatus, { getOnlineChannel } from "./onlineSaga";

beforeEach(() => (mockOnline.onLine = false));

it("creates the online channel", () => {
  return expectSaga(watchOnlineStatus)
    .provide([channelFeed()])
    .call(getOnlineChannel)
    .run();
});

it("emits the initial online status", () => {
  return expectSaga(watchOnlineStatus)
    .provide([channelFeed()])
    .put(onlineStatusChange(false))
    .run();
});

it("emits changes to the online status", () => {
  return expectSaga(watchOnlineStatus)
    .provide([channelFeed([true, false])])
    .put(onlineStatusChange(false))
    .put(onlineStatusChange(true))
    .put(onlineStatusChange(false))
    .run();
});
