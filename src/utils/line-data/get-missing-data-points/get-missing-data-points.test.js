/* eslint-disable no-undef */
import { getMissingDataPoints } from "./get-missing-data-points";

describe("fillMissingDataPoints", () => {
  test("easy case", () => {
    const lineData1 = [{ x: 1, y: 1 }];
    const lineData2 = [{ x: 2, y: 2 }];
    const ret = getMissingDataPoints(lineData1, lineData2);
    const expectedRet = {
      missingInFirst: [2],
      missingInSecond: [1]
    };
    expect(ret).toEqual(expectedRet);
  });

  test("no missing", () => {
    const lineData1 = [{ x: 1, y: 1 }];
    const lineData2 = [{ x: 1, y: 1 }];
    const ret = getMissingDataPoints(lineData1, lineData2);
    const expectedRet = {
      missingInFirst: [],
      missingInSecond: []
    };
    expect(ret).toEqual(expectedRet);
  });
});
