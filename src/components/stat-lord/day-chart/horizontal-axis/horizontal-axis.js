import React from "react";
import { VictoryAxis } from "victory-native";

import TickLabel from "./tick-label";
import Grid from "./grid";

type Props = {
  domain: {
    x: [number, number],
    y: [number, number]
  },
  width: number
};

export default ({ ...props }: Props) => {
  let lastValue = null;

  const getLastValue = () => lastValue;

  const setLastValue = value => {
    console.log("setLastValue: value:", value, "");
    lastValue = value;
  };

  // console.log("Axis props", props, "");
  return (
    <VictoryAxis
      {...props}
      tickLabelComponent={<TickLabel />}
      tickCount={10}
      gridComponent={
        <Grid getLastValue={getLastValue} setLastValue={setLastValue} />
      }
    />
  );
};
