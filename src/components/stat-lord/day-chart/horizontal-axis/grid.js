import React from "react";
import { View } from "react-native";
import moment from "moment";

// TODO: why the fuck does the code beneath crash the compiler???
type Props = {
  // x1: number,
  // y1: number,​
  // y2: number
  datum: Object,
  getLastValue: () => number | null,
  setLastValue: (lastValue: number) => void
};

const isEvenDay: boolean = (val: number) => {
  const time = moment(val);
  console.log("time:", time.format("YYMMDD HH:mm"), "");

  const day = time.dayOfYear();
  console.log("day:", day, "");

  const isEven = day % 2 === 0;
  console.log("isEven:", isEven, "");
  return isEven;
};

export default ({ getLastValue, setLastValue, datum, ...props }: Props) => {
  // console.log("props", props, "");
  console.log("getLastValue", getLastValue(), "");

  const { x1, y1, y2 } = props;

  const lastX = getLastValue() || 0;

  /* console.log("x1", x1, "");

  console.log("y1", y1, "");
  console.log("y2", y2, ""); */

  const width = x1 - lastX;

  setLastValue(x1);

  // return <LineSegment {...props} />;
  if (!isEvenDay(datum)) {
    return null;
  }
  return (
    <View
      style={{
        position: "absolute",
        left: lastX,
        top: y2,
        width,
        height: y1 - y2,
        backgroundColor: "rgba(0, 0, 0, 0.05)"
      }}
    />
  );
};
