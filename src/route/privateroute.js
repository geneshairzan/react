import React, { useState } from "react";
import { Route, Redirect } from "react-router-dom";

export default function PrivateRoute(props) {
  const [token, setToken] = useState(localStorage.getItem("AppToken"));

  console.log(localStorage.getItem("AppToken"));

  return !token ? (
    <Redirect to="/login" />
  ) : (
    <Route path={props.path} exact={props.exact} component={props.component} />
    // <Redirect to="/login" />
  );
}
