import { compose, createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import createSagaMiddleware from "redux-saga";
import { all } from "redux-saga/effects";
import { reducer as formReducer } from "redux-form";

import {
  reducer as navigationReducer,
  sagas as navigationSagas
} from "./navigation";
import { reducer as modalReducer } from "./modal";
import { reducer as toastrReducer, sagas as toastrSagas } from "./toastr";
import {
  reducer as keyValuePairsReducer,
  sagas as keyValuePairsSagas
} from "./key-value-pairs";
import { reducer as parameterReducer } from "./parameter";

const enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //eslint-disable-line

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

if (__DEV__) {
  middleware.push(createLogger({ collapsed: true }));
}

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["images"]
};

const reducers = combineReducers({
  form: formReducer,
  navigation: navigationReducer,
  toastr: toastrReducer,
  keyValuePairs: keyValuePairsReducer,
  modal: modalReducer,
  parameter: parameterReducer
});

export const store = createStore(
  persistReducer(persistConfig, reducers),
  enhancer(applyMiddleware(...middleware))
);

export const persistor = persistStore(store);

function* rootSaga() {
  yield all([toastrSagas(), keyValuePairsSagas(), navigationSagas()]);
}

sagaMiddleware.run(rootSaga);
