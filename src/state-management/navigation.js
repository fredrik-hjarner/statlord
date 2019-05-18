import { BackHandler } from "react-native";
import { last, dropLast } from "ramda";
import { eventChannel } from "redux-saga";
import { take, put, all } from "redux-saga/effects";

/** *****************************************************************
    Constants
****************************************************************** */

const PUSH_ROUTE = "PUSH_ROUTE";
const GO_BACK = "GO_BACK";

type State = {
  routeHistory: [string]
};

const INITIAL_STATE: State = {
  routeHistory: []
};

/** *****************************************************************
    Reducer
****************************************************************** */

export const reducer = (state: State = INITIAL_STATE, action) => {
  switch (action.type) {
    case PUSH_ROUTE:
      if (last(state.routeHistory) === action.payload.route) {
        return state;
      }
      return {
        ...state,
        routeHistory: [...state.routeHistory, action.payload.route]
      };

    case GO_BACK: {
      const routeHistory = dropLast(1, state.routeHistory);
      return {
        ...state,
        routeHistory
      };
    }

    default:
      return state;
  }
};

/** *****************************************************************
    Actions
****************************************************************** */

export const pushRoute = (route: string) => ({
  type: PUSH_ROUTE,
  payload: { route }
});

export const goBack = () => ({ type: GO_BACK });

/** *****************************************************************
    Selectors
****************************************************************** */

export const currentRouteSelector = (state: Object): string =>
  last(state.navigation.routeHistory);

export const previousRouteSelector = (state: Object): string =>
  state.navigation.routeHistory |> dropLast(1) |> last;

export const routeHistorySelector = (state: Object): string =>
  state.navigation.routeHistory;

/** *****************************************************************
    Sagas
****************************************************************** */

function* backPressSaga() {
  const chan = eventChannel(emitter => {
    BackHandler.addEventListener("hardwareBackPress", () => {
      emitter(true);
      return true;
    });
    return () => {};
  });

  while (true) {
    yield take(chan);
    yield put(goBack());
  }
}

export function* sagas() {
  yield all([backPressSaga()]);
}
