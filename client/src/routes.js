import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CollegeDetails from "./screens/CollegeDetails";
import Colleges from "./screens/Colleges";

import WelcomeScreen from "./screens/WelcomeScreen";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <WelcomeScreen />
        </Route>
        <Route exact path="/colleges/state/:state" component={Colleges} />

        <Route exact path="/college/id/:id" component={CollegeDetails} />
      </Switch>
    </Router>
  );
};

export default Routes;
