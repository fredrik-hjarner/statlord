/* eslint-disable no-undef */
import { fillMissingDataPoint } from "./fill-missing-data-point";

describe("fillMissingDataPoint", () => {
  test("easy case", () => {
    const lineData = [{ x: 1, y: 1 }, { x: 3, y: 3 }];
    const missingXValue = 2;
    const ret = fillMissingDataPoint(lineData, missingXValue);
    const expectedRet = [{ x: 1, y: 1 }, { x: 2, y: 2 }, { x: 3, y: 3 }];
    expect(ret).toEqual(expectedRet);
  });

  test("another easy case", () => {
    const lineData = [{ x: 1, y: 10 }, { x: 3, y: 30 }];
    const missingXValue = 2;
    const ret = fillMissingDataPoint(lineData, missingXValue);
    const expectedRet = [{ x: 1, y: 10 }, { x: 2, y: 20 }, { x: 3, y: 30 }];
    expect(ret).toEqual(expectedRet);
  });

  test("beginning", () => {
    const lineData = [{ x: 1, y: 1 }];
    const missingXValue = 0;
    const ret = fillMissingDataPoint(lineData, missingXValue);
    const expectedRet = [{ x: 0, y: 1 }, { x: 1, y: 1 }];
    expect(ret).toEqual(expectedRet);
  });

  test("end", () => {
    const lineData = [{ x: 1, y: 1 }];
    const missingXValue = 2;
    const ret = fillMissingDataPoint(lineData, missingXValue);
    const expectedRet = [{ x: 1, y: 1 }, { x: 2, y: 1 }];
    expect(ret).toEqual(expectedRet);
  });
});
