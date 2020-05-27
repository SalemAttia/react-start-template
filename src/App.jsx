import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import routes from "./Routes";
import withTracker from "./withTracker";
const App = () => {
  return (
    <Router>
      <Switch>
        {routes.map((route) => {
          return (
            <Route
              key={route.path}
              path={route.path}
              exact={route.exact}
              params={route.params}
              component={withTracker(props => {
                return (
                  <route.layout {...props} route={route.params}>
                    <route.component {...props} />
                  </route.layout>
                );
              })} />
          );
        })}
      </Switch>
     
    </Router>
  );
};
export default App;