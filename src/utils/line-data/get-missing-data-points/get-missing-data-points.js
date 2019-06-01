import { uniq } from "ramda";

export const getMissingDataPoints = (
  first,
  second
): { missingInFirst: [Object], missingInSecond: [Object] } => {
  const firstXs = first.map(f => f.x);
  const secondXs = second.map(f => f.x);
  const allXs = uniq(firstXs.concat(secondXs));
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
