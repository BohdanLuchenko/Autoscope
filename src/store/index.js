import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import rootReducer from "./reducers";
import storage from "redux-persist/lib/storage";

import { composeWithDevTools } from "redux-devtools-extension";

import thunk from "redux-thunk";
import { persistReducer } from "redux-persist";
import { routerMiddleware } from "connected-react-router";
import logger from "redux-logger";

const sagaMiddleware = createSagaMiddleware();

//Blacklist AssetTypes on Page Refresh
const persistConfig = {
  key: "b2c",
  storage,
  blacklist: ["router", "AssetTypes", "Accessories", "MeterReports", "MetersRegistration"],
};

const initialState = {};
const middleware = [routerMiddleware(), sagaMiddleware, thunk, logger];
const persistedReducer = persistReducer(persistConfig, rootReducer());

const store = createStore(persistedReducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;
