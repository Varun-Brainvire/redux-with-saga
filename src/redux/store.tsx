// eslint ignore
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import createSagaMiddleware from "redux-saga";
import mySaga from "../sagas/sagas";

const sagaMiddleWare = createSagaMiddleware();
const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleWare]
});

sagaMiddleWare.run(mySaga);

export default store;
