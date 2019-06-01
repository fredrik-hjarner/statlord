import { last, insert } from "ramda";

import type { LineData } from "flow-types";

/**
 * Assumes line data is sorted with regards to x.
 */
export const fillMissingDataPoint = (
  lineData: LineData,
  missingXValue: number
) => {
  // find last x that is before x
  const xs = lineData.map(l => l.x);
  const xsBefore = xs.filter(x => x < missingXValue);
  if (xsBefore.length === 0) {
    // means missingXValue is before first value of lineData
    const { y } = lineData[0];
    return insert(0, { x: missingXValue, y }, lineData);
  }
  const lastXBefore = last(xsBefore);
  const lastXBeforeIndex = xsBefore.length - 1;
  // Take the next point (if it exists!!!!)
  if (xs.length === xsBefore.length) {
    // means there is not point after.
    const index = xs.length;
    const { y } = last(lineData);
    return insert(index, { x: missingXValue, y }, lineData);
  }
  const firstXAfter = xs[lastXBeforeIndex + 1];

  /**
   * calculate how many percent of each value the missing value should get
   */
  // TODO: temporarily I just take the average value of the two
  // find firsy y-value, then second y-value
  const leftY = lineData.find(({ x }) => x === lastXBefore).y;
  const rightY = lineData.find(({ x }) => x === firstXAfter).y;
  const y = (leftY + rightY) / 2;
  // Insert it into line data.
  return insert(lastXBeforeIndex + 1, { x: missingXValue, y }, lineData);
};
