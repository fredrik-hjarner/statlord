type ReturnValue = [{ x: string, y: number }];

export default (csv: string): ReturnValue => {
  // Ignore the first part
  let statsLeftToParse = csv.split("\n\n");
  statsLeftToParse = statsLeftToParse.slice(1);

  return statsLeftToParse.map(stats => {
    let lines = stats.split("\n");
    const name = lines[0];
    lines = lines.slice(1);
    return { name };
  });
};
