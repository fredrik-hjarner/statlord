import { put, all, takeEvery } from "redux-saga/effects";

import { keepTrackCsvParser, fileAsString, fillMissingDataPoints } from "utils";
import { KeyValueService } from "api";
import { HOME_ROUTE } from "consts";
import { openToastr, TOASTR_ERROR, TOASTR_SUCCESS } from "./toastr";
import { pushRoute } from "./navigation";

/** *****************************************************************
    Constants
****************************************************************** */

const CREATE_PARAMETER_START = "CREATE_PARAMETER_START";
const CREATE_PARAMETER_SUCCESS = "CREATE_PARAMETER_SUCCESS";
const CREATE_PARAMETER_ERROR = "CREATE_PARAMETER_ERROR";

const FETCH_PARAMETER_NAMES_START = "FETCH_PARAMETER_NAMES_START";
const FETCH_PARAMETER_NAMES_SUCCESS = "FETCH_PARAMETER_NAMES_SUCCESS";
const FETCH_PARAMETER_NAMES_ERROR = "FETCH_PARAMETER_NAMES_ERROR";

type State = {
  entities: any // TODO
};

const linesData = keepTrackCsvParser(fileAsString);

const { lineData1, lineData2 } = fillMissingDataPoints(
  linesData[0].data,
  linesData[1].data
);

const lines = {
  0: {
    id: 0,
    name: linesData[0].name,
    color: "blue",
    data: lineData1
  },
  1: {
    id: 1,
    name: linesData[1].name,
    color: "red",
    data: lineData2
  }
};

const INITIAL_STATE: State = {
  entities: lines, // TODO: this is just mocking
  parameterNames: []
};

/** *****************************************************************
    Reducer
****************************************************************** */

export const reducer = (state: State = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_PARAMETER_NAMES_SUCCESS:
      return {
        ...state,
        parameterNames: action.payload.parameterNames
      };
    default:
      return state;
  }
};

/** *****************************************************************
    Actions
****************************************************************** */

export const create = ({ name }) => ({
  type: CREATE_PARAMETER_START,
  payload: { name }
});

export const fetchParameterNames = () => ({
  type: FETCH_PARAMETER_NAMES_START
});

/** *****************************************************************
    Selectors
****************************************************************** */

export const selectors = {
  entity: (state: Object, id: string): [] => state.parameter.entities[id],
  entities: (state: Object): [] => state.parameter.entities,
  parameterNames: (state: Object): [] => state.parameter.parameterNames
};

/** *****************************************************************
    Sagas
****************************************************************** */

export function* createParameterSaga({ payload: { name } }) {
  try {
    yield KeyValueService.setValue(`parameter-index/${name}`, name);
    yield put({ type: CREATE_PARAMETER_SUCCESS });
    // yield put(fetchAllPairs()); // TODO
    yield put(openToastr({ text: "Created parameter.", type: TOASTR_SUCCESS }));
    yield put(pushRoute(HOME_ROUTE));
  } catch (exception) {
    yield put({ type: CREATE_PARAMETER_ERROR });
    yield put(
      openToastr({ text: "Failed to create parameter.", type: TOASTR_ERROR })
    );
  }
}

export function* fetchParameterNamesSaga() {
  try {
    const parameterNames = yield KeyValueService.getKeysWithPrefix(
      "parameter-index/"
    );
    yield put({
      type: FETCH_PARAMETER_NAMES_SUCCESS,
      payload: { parameterNames }
    });
  } catch (exception) {
    yield put({ type: FETCH_PARAMETER_NAMES_ERROR });
    yield put(
      openToastr({
        text: "Failed to fetch parameter names.",
        type: TOASTR_ERROR
      })
    );
  }
}

export function* sagas() {
  yield all([
    (function*() {
      yield takeEvery(CREATE_PARAMETER_START, createParameterSaga);
    })(),
    (function*() {
      yield takeEvery(FETCH_PARAMETER_NAMES_START, fetchParameterNamesSaga);
    })()
  ]);
}
