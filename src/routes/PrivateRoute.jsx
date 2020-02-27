import React from "react";
import { Route, withRouter, Redirect } from "react-router-dom";
import ChatLayout from "layout/ChatLayout";
import isAuth from "utils/authService"
function PrivateRoute(props) {
  let { location, history, component: Component, ...rest } = props;



  function protectedComponent(componentProps) {
    return isAuth() ? (
      <ChatLayout>
        <Component {...componentProps} />
      </ChatLayout>
    ) : (
        <Redirect push to="/" />
      );
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
