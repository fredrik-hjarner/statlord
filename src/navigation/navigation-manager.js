import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { View } from "react-native";

import { Home } from "routes";
import { Toastr } from "components";
import { currentRouteSelector } from "state-management/navigation";
import { HOME_ROUTE } from "consts";

type Props = {
  currentRoute: string
};

const mapStateToProps = state => ({
  currentRoute: currentRouteSelector(state)
});

export default connect(mapStateToProps)(
  class extends PureComponent<Props> {
    renderRoute() {
      const { currentRoute } = this.props;
      switch (currentRoute) {
        case HOME_ROUTE:
          return <Home />;

        default:
          return <Home />;
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
);
