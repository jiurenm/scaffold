import * as React from "react";
import * as ReactDOM from "react-dom";

import { HashRouter as Router, Route, Switch } from "react-router-dom";

import { App } from "./components/App"

ReactDOM.render(
    <Router>
      <React.Fragment>
        <Switch>
          <Route exact={true} path="/" component={App} />
        </Switch>
      </React.Fragment>
    </Router>,
    document.getElementById("example")
);
