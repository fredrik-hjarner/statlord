import React from "react";
import { StyleSheet } from "react-native";
import { Surface } from "react-native-paper";
import { connect } from "react-redux";

import { Text, TouchableOpacity } from "components";
import { PARAMETER_ROUTE } from "consts";
import { pushRoute } from "state-management/navigation";

type Props = {
  statName: string
};

const Component = ({ statName, ...props }: Props) => {
  return (
    <TouchableOpacity
      style={styles.touchableOpacity}
      onPress={() =>
        props.pushRoute(PARAMETER_ROUTE, { parameterName: statName })
      }
    >
      <Surface style={styles.card}>
        <Text>{statName}</Text>
      </Surface>
    </TouchableOpacity>
  );
};

export default Component
  |> connect(
    null,
    { pushRoute }
  );

const styles = StyleSheet.create({
  touchableOpacity: {
    width: "100%"
  },
  card: {
    padding: 8,
    height: 100,
    width: "100%",
    elevation: 3
  }
});
