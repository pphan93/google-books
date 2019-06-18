import React from "react";
import { Route, Switch } from "react-router-dom";


import HomePage from "./pages/HomePage";

import CSSNavPage from "./pages/CSSNavPage";


class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/css" component={CSSNavPage} />

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
