import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { View } from "react-native";

import {
  Home,
  Parameter,
  CreateParameter,
  Chart,
  KeyValueTester
} from "routes";
import { Toastr } from "components";
import { currentRouteSelector } from "state-management/navigation";
import {
  DEBUG_ROUTE,
  HOME_ROUTE,
  PARAMETER_ROUTE,
  CREATE_PARAMETER_ROUTE,
  CHART_ROUTE
} from "consts";

type Props = {
  currentRoute: string
};

/**
 * I should do this like an object or something like react-native-navigation.
 * For example routeParams is duplicated several times which is stupid.
 */
class Component extends PureComponent<Props> {
  renderRoute() {
    const { currentRoute } = this.props;
    switch (currentRoute?.route) {
      case DEBUG_ROUTE:
        return <KeyValueTester routeParams={currentRoute?.routeParams} />;

      case HOME_ROUTE:
        return <Home routeParams={currentRoute?.routeParams} />;

      case PARAMETER_ROUTE:
        return <Parameter routeParams={currentRoute?.routeParams} />;

      case CREATE_PARAMETER_ROUTE:
        return <CreateParameter routeParams={currentRoute?.routeParams} />;

      case CHART_ROUTE:
        return <Chart routeParams={currentRoute?.routeParams} />;

      default:
        return <Home routeParams={currentRoute?.routeParams} />;
    }
  }

  render() {
    return (
      <View>
        {this.renderRoute()}
        <Toastr />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  currentRoute: currentRouteSelector(state)
});

export default Component |> connect(mapStateToProps);
