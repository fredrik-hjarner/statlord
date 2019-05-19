import { uniq } from "ramda";

import type { LineData } from "flow-types";

export const difference = (first: LineData, second: LineData): LineData => {
  /**
   * Assertions
   */
  if (!first || !second) {
    throw Error("first and second must exist.");
  }
  if (first.length !== second.length) {
    throw Error("first and second must have same length.");
  }
  for (let i = 0; i < first.length; i++) {
    if (first[i].x !== second[i].x) {
      throw Error("first and second must have the same x-values.");
    }
  }

  /**
   * Subtraction
   */
  return first.map(({ x, y }, i) => ({
    x,
    y: Math.abs(y - second[i].y)
  }));
};

/**
 * Blends two lines so that the result contains secondFactor
 * of second and 1-secondFactor of first.
 */
export const blend = (
  first: LineData,
  second: LineData,
  secondFactor: number
): LineData => {
  /**
   * Assertions
   */
  if (!first || !second) {
    throw Error("first and second must exist.");
  }
  if (first.length !== second.length) {
    throw Error("first and second must have same length.");
  }
  for (let i = 0; i < first.length; i++) {
    if (first[i].x !== second[i].x) {
      throw Error("first and second must have the same x-values.");
    }
  }

  /**
   * Blending
   */
  const firstFactor = 1 - secondFactor;
  return first.map(({ x, y }, i) => ({
    x,
    y: y * firstFactor - second[i].y * secondFactor
  }));
};

export const getMissingDataPoints = (
  first,
  second
): { missingInFirst: [Object], missingInSecond: [Object] } => {
  const firstXs = first.map(f => f.x);
  const secondXs = second.map(f => f.x);
  const allXs = uniq(first.concat(second));
  return allXs.reduce(
    (acc, x) => {
      if (!firstXs.includes(x)) {
        acc.missingInFirst.push(x);
      }
      if (!secondXs.includes(x)) {
        acc.missingInSecond.push(x);
      }
      return acc;
    },
    {
      missingInFirst: [],
      missingInSecond: []
    }
  );
};

/**
 * Assumes x-axis is a moment object.
 * Assumes y-axis is a number.
 * If there are x-values that only exist in first or second,
 * then add this value to the other and set the y-value
 * to some reasonable value (interpolated in some good way).
 */
export const fillMissingDataPoints = (first, second) => {};
