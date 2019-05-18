import React from "react";
import { VictoryLine, VictoryChart, VictoryTheme } from "victory-native";
import { withProps } from "recompose";

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
      padding={{ top: 0, bottom: 30, left: 35, right: 0 }}
      domainPadding={{ x: [0, 10], y: [0, 10] }}
    >
      {lines.map(({ data, color }) => (
        <VictoryLine
          data={data}
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

export default Chart
  |> withProps(() => ({
    lines: [
      {
        data: [
          { x: 1, y: 2 },
          { x: 2, y: 3 },
          { x: 3, y: 5 },
          { x: 4, y: 4 },
          { x: 5, y: 6 }
        ],
        color: "red"
      },
      {
        data: [
          { x: 1, y: 3 },
          { x: 2, y: 4 },
          { x: 3, y: 5 },
          { x: 4, y: 6 },
          { x: 5, y: 7 }
        ],
        color: "green"
      }
    ]
  }));
