import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import componentData from "./componentData";
import { Login } from "components";

const PrivateRoutes = () => {
  return componentData.map((item, i) => {
    return <PrivateRoute key={i} {...item} />;
  });
};

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <PrivateRoutes />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
