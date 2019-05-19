import React from "react";
import { VictoryLine, VictoryChart, VictoryTheme } from "victory-native";

type Props = {
  lines: [
    {
      data: [{ x: number, y: number }],
      color: string
    }
  ]
};

const Chart = ({ lines }: Props) => {
  return (
    <VictoryChart
      theme={VictoryTheme.material}
      padding={{ top: 0, bottom: 40, left: 35, right: 0 }}
      domainPadding={{ x: [0, 10], y: [0, 10] }}
    >
      {lines.map(({ data, color }) => (
        <VictoryLine
          data={data}
          domain={{ y: [2, 8] }}
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
