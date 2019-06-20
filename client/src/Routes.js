import React from "react";
import { Route, Switch } from "react-router-dom";


import HomePage from "./pages/HomePage";

import Saved from "./pages/Saved";


class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/saved" component={Saved} />

        <Route
          render={function () {
            return <h1>Not Found</h1>;
          }}
        />
      </Switch>
    );
  }
}

export default Routes;
