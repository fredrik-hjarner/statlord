import React from "react";
import { View } from "react-native";

import type { LineData } from "flow-types";
import { Text } from "components";

type Props = {
  parameter: {
    name: string,
    color: string,
    data: LineData
  }
};

export default ({ parameter: { name, data, color } }: Props) => {
  return (
    <View>
      <Text>{name}</Text>
      {data.map(({ x, y }) => (
        <View>
          <Text>
            {x}: {y}
          </Text>
        </View>
      ))}
    </View>
  );
};
