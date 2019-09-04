import React from "react";
import { connect } from "react-redux";

import { pushRoute } from "state-management/navigation";

export default Component =>
  connect(
    null,
    { pushRoute }
  )(props => {
    return <Component {...props} pushRoute={props.pushRoute} />;
  });
