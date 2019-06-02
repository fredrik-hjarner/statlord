import { keepTrackCsvParser, fileAsString, fillMissingDataPoints } from "utils";

/** *****************************************************************
    Constants
****************************************************************** */

type State = {
  entity: any // TODO
};

const linesData = keepTrackCsvParser(fileAsString);

const { lineData1, lineData2 } = fillMissingDataPoints(
  linesData[0].data,
  linesData[1].data
);

const lines = [
  {
    name: linesData[0].name,
    color: "blue",
    data: lineData1
  },
  {
    name: linesData[1].name,
    color: "red",
    data: lineData2
  }
];

const INITIAL_STATE: State = {
  entity: lines // TODO: this is just mocking
};

/** *****************************************************************
    Reducer
****************************************************************** */

export const reducer = (state: State = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

/** *****************************************************************
    Actions
****************************************************************** */

/** *****************************************************************
    Selectors
****************************************************************** */

export const selectors = {
  entity: (state: Object): [] => state.parameter.entity
};

/** *****************************************************************
    Sagas
****************************************************************** */
