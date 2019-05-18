import React, { PureComponent } from "react";
import { StyleSheet, View } from "react-native";
import { connect } from "react-redux";
import MaterialCommunityIcon from "react-native-vector-icons/MaterialCommunityIcons";

import { Text, TouchableOpacity as TB, Grid, Column } from "components";
import { pushRoute } from "state-management/navigation";

const TouchableOpacity = ({ style, ...props }) => (
  <TB style={[{ width: "100%", alignItems: "center" }, style]} {...props} />
);

type Props = {
  pushRoute: Function
};

export default connect(
  null,
  { pushRoute }
)(
  class extends PureComponent<Props> {
    renderCharacter() {
      const activeCharacter = "test";
      return (
        <View style={styles.characterContainer}>
          <Text style={styles.text}>{activeCharacter}</Text>
          <View style={styles.actions}>
            <TB onPress={this.createNewCharacter}>
              <MaterialCommunityIcon
                name="account-plus"
                color="white"
                size={30}
              />
            </TB>
            <TB style={{ marginLeft: 30 }} onPress={() => {}}>
              <MaterialCommunityIcon
                name="account-switch"
                color="white"
                size={24}
              />
            </TB>
          </View>
        </View>
      );
    }

    renderRoutes() {
      return (
        <Grid style={styles.routesContainer}>
          {/* <Column width={18}>
            <TouchableOpacity
              style={{ width: "100%" }}
              onPress={() => this.props.pushRoute("KeyValueTester")}
            >
              <Text style={styles.text}>Key value pairs</Text>
            </TouchableOpacity>
          </Column> */}

          <Column width={4}>
            <TouchableOpacity
              style={{ width: "100%" }}
              onPress={() => this.props.pushRoute("Info")}
            >
              <Text style={styles.text}>Info</Text>
            </TouchableOpacity>
          </Column>
        </Grid>
      );
    }

    render() {
      return (
        <View style={styles.container}>
          {/* {this.renderCharacter()} */}
          {this.renderRoutes()}
        </View>
      );
    }
  }
);

const styles = StyleSheet.create({
  container: {
    width: "100%"
  },
  routesContainer: {
    backgroundColor: "darkblue",
    paddingRight: 15,
    paddingLeft: 15,
    paddingTop: 10,
    paddingBottom: 10
  },
  characterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    backgroundColor: "blue",
    paddingRight: 15,
    paddingLeft: 15,
    paddingTop: 6,
    paddingBottom: 6
  },
  text: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold"
  },
  actions: {
    flexDirection: "row",
    alignItems: "center"
  }
});
