import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { View } from "react-native";

import * as Routes from "routes";
import { Toastr } from "components";
import { currentRouteSelector } from "state-management/navigation";

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
    /**
     * TODO:
     * Should be able to handle default routes in a better way.
     * That ought to be set... uhm somewhere... dunno
     */
    if (!currentRoute?.route) {
      return <Routes.Home routeParams={currentRoute?.routeParams} />;
    }
    const Route = Routes[currentRoute.route];
    return <Route routeParams={currentRoute?.routeParams} />;
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
