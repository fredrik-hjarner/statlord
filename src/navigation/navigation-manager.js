import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { View } from "react-native";

import * as Routes from "routes";
import { Toastr } from "components";
import { currentRouteSelector } from "state-management/navigation";
import {
  DEBUG_ROUTE,
  HOME_ROUTE,
  PARAMETER_ROUTE,
  CREATE_PARAMETER_ROUTE,
  AddValueToParameter,
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
        return (
          <Routes.KeyValueTester routeParams={currentRoute?.routeParams} />
        );

      case HOME_ROUTE:
        return <Routes.Home routeParams={currentRoute?.routeParams} />;

      case PARAMETER_ROUTE:
        return <Routes.Parameter routeParams={currentRoute?.routeParams} />;

      case CREATE_PARAMETER_ROUTE:
        return (
          <Routes.CreateParameter routeParams={currentRoute?.routeParams} />
        );

      case AddValueToParameter:
        return (
          <Routes.AddValueToParameter routeParams={currentRoute?.routeParams} />
        );

      case CHART_ROUTE:
        return <Routes.Chart routeParams={currentRoute?.routeParams} />;

      default:
        return <Routes.Home routeParams={currentRoute?.routeParams} />;
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
