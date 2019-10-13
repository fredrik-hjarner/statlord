import React from "react";
import {
  VictoryLine,
  VictoryChart,
  VictoryTheme,
  VictoryZoomContainer,
  VictoryLabel,
  VictoryGroup,
  VictoryScatter,
  VictoryAxis
} from "victory-native";
import moment from "moment";

import { Outline } from "components";
import HorizontalAxis from "./horizontal-axis";

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
    <Outline>
      <VictoryChart
        theme={VictoryTheme.material}
        padding={{ top: 0, bottom: 40, left: 40, right: 15 }}
        domainPadding={{ x: [0, 10], y: [0, 10] }}
        /* containerComponent={
          <VictoryZoomContainer zoomDomain={{ x: [before, now] }} />
        } */
        scale={{ x: "time", y: "linear" }}
      >
        <HorizontalAxis />
        <VictoryAxis dependentAxis />
        {lines.map(({ data, color }) => (
          <VictoryGroup
            data={data}
            /* domain={{ y: [3, 7] }} */
            color={color}
            labels={({ y }) => y}
          >
            <VictoryLine
              style={{
                data: {
                  strokeWidth: 1
                }
              }}
            />
            <VictoryScatter />
          </VictoryGroup>
        ))}
      </VictoryChart>
    </Outline>
  );
};

export default Chart;
