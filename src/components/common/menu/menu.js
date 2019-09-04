import React, { PureComponent } from "react";
import { StyleSheet, View } from "react-native";
import { connect } from "react-redux";

import { Text, TouchableOpacity as TB, Grid, Column } from "components";
import { pushRoute } from "state-management/navigation";
import { DEBUG_ROUTE, HOME_ROUTE, CHART_ROUTE } from "consts";

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
    renderMenuItem = ({ caption, route }) => (
      <Column width={4}>
        <TouchableOpacity
          style={{ width: "100%" }}
          onPress={() => this.props.pushRoute(route)}
        >
          <Text style={styles.text}>{caption}</Text>
        </TouchableOpacity>
      </Column>
    );

    renderRoutes() {
      return (
        <Grid style={styles.routesContainer}>
          {this.renderMenuItem({ caption: "Debug", route: DEBUG_ROUTE })}
          {this.renderMenuItem({ caption: "Home", route: HOME_ROUTE })}
          {this.renderMenuItem({ caption: "Chart", route: CHART_ROUTE })}
        </Grid>
      );
    }

    render() {
      return <View style={styles.container}>{this.renderRoutes()}</View>;
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
  text: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold"
  }
});
