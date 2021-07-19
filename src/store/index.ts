import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import reducer from "reducers";
import rootSaga from "sagas";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  devTools: process.env.NODE_ENV !== "production",
  reducer: reducer,
  middleware: [
    ...getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
    sagaMiddleware,
  ],
});

sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;

export default store;
