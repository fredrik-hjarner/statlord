import React from "react";
import { View } from "react-native";
import moment from "moment";

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
      {data.map(({ x, y }) => (
        <View>
          <Text>
            {moment(x).format("YYYY/DD/MM HH:mm")}: {y}
          </Text>
        </View>
      ))}
    </View>
  );
};
