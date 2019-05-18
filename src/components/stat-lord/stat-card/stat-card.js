import React from "react";
import { StyleSheet } from "react-native";
import { Surface } from "react-native-paper";

import { Text } from "components";

type Props = {
  statName: string
};

export default ({ statName }: Props) => {
  return (
    <Surface style={styles.card}>
      <Text>{statName}</Text>
    </Surface>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 8,
    height: 100,
    width: "100%",
    elevation: 3
  }
});
