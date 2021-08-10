import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import routes from "./routes/config.routes";

interface RouteConfig {
  path: string | string[] | undefined;
  exact: boolean | undefined;
  component: React.ComponentType | undefined;
}

const CustomeRoutes = (route: RouteConfig) => {
  return (
    <Route path={route.path} exact={route.exact} component={route.component} />
  );
};

const App = () => {
  return (
    <Router>
      <Switch>
        {routes.map((route, index) => (
          <CustomeRoutes key={index} {...route} />
        ))}
      </Switch>
    </Router>
  );
};

export default App;
