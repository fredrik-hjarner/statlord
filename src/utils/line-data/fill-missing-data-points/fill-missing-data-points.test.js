/* eslint-disable no-undef */
import { fillMissingDataPoints } from "./fill-missing-data-points";

describe("fillMissingDataPoints", () => {
  test("easy case", () => {
    const lineData1 = [{ x: 1, y: 1 }];
    const lineData2 = [{ x: 2, y: 2 }];
    const ret = fillMissingDataPoints(lineData1, lineData2);
    const expectedRet = {
      lineData1: [{ x: 1, y: 1 }, { x: 2, y: 1 }],
      lineData2: [{ x: 1, y: 2 }, { x: 2, y: 2 }]
    };
    expect(ret).toEqual(expectedRet);
  });

  test("another easy case", () => {
    const lineData1 = [{ x: 1, y: 10 }];
    const lineData2 = [{ x: 2, y: 20 }];
    const ret = fillMissingDataPoints(lineData1, lineData2);
    const expectedRet = {
      lineData1: [{ x: 1, y: 10 }, { x: 2, y: 10 }],
      lineData2: [{ x: 1, y: 20 }, { x: 2, y: 20 }]
    };
    expect(ret).toEqual(expectedRet);
  });
});
