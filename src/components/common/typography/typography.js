import React from "react";
import { StyleSheet, Text as RNText } from "react-native";

export const P = ({ children, style, ...props }) => (
  <RNText style={[styles.p, style]} {...props}>
    {children}
  </RNText>
);

export const Text = P; // only a synonym for P

export const B = ({ children, style, ...props }) => (
  <P style={[styles.b, style]} {...props}>
    {children}
  </P>
);

export const H1 = ({ children, style, ...props }) => (
  <B style={[styles.h1, style]} {...props}>
    {children}
  </B>
);

const styles = StyleSheet.create({
  p: { color: "black", fontSize: 17 },
  b: { fontWeight: "bold" },
  h1: { fontSize: 20 }
});
