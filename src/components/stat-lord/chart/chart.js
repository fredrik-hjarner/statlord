import React from "react";
import {
  VictoryLine,
  VictoryChart,
  VictoryTheme,
  VictoryZoomContainer
} from "victory-native";
import moment from "moment";

type Props = {
  lines: [
    {
      data: [{ x: number, y: number }],
      color: string
    }
  ],
  domain: "hour" | "day" | "week" | "month" | "year"
};

const Chart = ({ lines, domain }: Props) => {
  const now = moment().valueOf();
  const before = moment()
    .subtract(1, domain)
    .valueOf();
  return (
    <VictoryChart
      theme={VictoryTheme.material}
      padding={{ top: 0, bottom: 40, left: 35, right: 0 }}
      domainPadding={{ x: [0, 10], y: [0, 10] }}
      containerComponent={
        <VictoryZoomContainer zoomDomain={{ x: [before, now] }} />
      }
    >
      {lines.map(({ data, color }) => (
        <VictoryLine
          data={data}
          domain={{ y: [3, 7] }}
          scale={{ x: "time", y: "linear" }}
          style={{
            data: {
              stroke: color
            }
          }}
        />
      ))}
    </VictoryChart>
  );
};

export default Chart;
