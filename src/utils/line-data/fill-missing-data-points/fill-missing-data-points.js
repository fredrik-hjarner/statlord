import type { LineData } from "flow-types";
import { fillMissingDataPoint } from "../fill-missing-data-point";
import { getMissingDataPoints } from "../get-missing-data-points";

/**
 * Assumes x-axis is a number.
 * Assumes y-axis is a number.
 * If there are x-values that only exist in first or second,
 * then add this value to the other and set the y-value
 * to some reasonable value (interpolated in some good way).
 */
export const fillMissingDataPoints = (
  lineData1: LineData,
  lineData2: LineData
) => {
  const { missingInFirst, missingInSecond } = getMissingDataPoints(
    lineData1,
    lineData2
  );
  const reducer = (acc, x) => fillMissingDataPoint(acc, x);
  const newLineData1 = missingInFirst.reduce(reducer, lineData1);
  const newLineData2 = missingInSecond.reduce(reducer, lineData2);

  return {
    lineData1: newLineData1,
    lineData2: newLineData2
  };
};
