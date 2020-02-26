import React from "react";
import { Route, withRouter, Redirect } from "react-router-dom";
function PrivateRoute(props) {
  let { location, history, component: Component, ...rest } = props;

  function protectedComponent(componentProps) {
    return true ? <Component {...componentProps} /> : <Redirect push to="/" />;
  }

  return (
    <Route
      {...rest}
      component={componentProps => {
        return protectedComponent(componentProps);
      }}
    />
  );
}
export default withRouter(PrivateRoute);
