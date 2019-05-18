import React, { PureComponent } from "react";
import { StyleSheet, View, TextInput } from "react-native";

type Props = {
  textInputStyle?: Object
};

export default class extends PureComponent<Props> {
  render() {
    const { style, textInputStyle, ...props } = this.props;
    return (
      <View style={[styles.inputFieldContainer, style]}>
        <TextInput style={[styles.textInput, textInputStyle]} {...props} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputFieldContainer: {
    width: 200,
    maxWidth: "100%",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "darkblue"
  },
  textInput: {
    padding: 0,
    fontSize: 17 // TODO: import default fontSize
  }
});
