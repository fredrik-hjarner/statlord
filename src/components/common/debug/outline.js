import React from "react";
import { View, StyleSheet } from "react-native";

export default ({ children }) => <View style={styles.view}>{children}</View>;

const styles = StyleSheet.create({
  view: {
    borderWidth: 2,
    borderColor: "red"
  }
});
