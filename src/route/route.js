import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PrivateRoute from "route/privateroute";

import Notfound from "view/NotFound";
import Home, { Home2 } from "view/Home";
import Profil from "view/Profile";
import ProfilDetail from "view/ProfileDetail";
import Pricing from "view/pricing";
import Bookmark from "view/Bookmark";
import ImgCrop from "view/ImgCrop";
import DataTable from "view/datatables";
import Smartfren from "view/smartfren";

import Dashboard from "view/dashboard";
import Login from "view/login";
import Materialui from "view/MaterialUI";
import Alphacnc from "view/alphacnc";

function Nav() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} title={"home"} />
        <PrivateRoute path="/dashboard" exact component={Dashboard} />
        <Route path="/home" exact component={Home} title="Home" />
        <Route path="/react_test/build" exact component={Home} title="Home" />
        <Route path="/profil" exact component={Profil} title="Profile" />
        <Route path="/pricing" exact component={Pricing} title="Pricing" />
        <Route path="/bookmark" exact component={Bookmark} title="Bookmark" />
        <Route path="/imgcrop" exact component={ImgCrop} />
        <Route path="/datatables" exact component={DataTable} />
        <Route path="/login" exact component={Login} />
        <Route path="/material-ui" exact component={Materialui} />
        <Route path="/alphacnc" exact component={Alphacnc} />

        <Route path="/Smartfren" exact component={Smartfren} />

        <Route
          path="/profil/:name"
          exact
          component={ProfilDetail}
          title="Profile Detail"
        />
        <Route component={Notfound} />
      </Switch>
    </BrowserRouter>
  );
}

export default Nav;
