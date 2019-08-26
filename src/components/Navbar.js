import React from "react";
import { Route, Link, Switch } from "react-router-dom";

import Home from "./Home";
import Mens from "./Mens";

class Navbar extends React.Component {
  render() {
    return (
      <div>
        <div className="navbar">
          <Link to="/">Home</Link>
          <Link to="/mens/">Mens</Link>
        </div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/mens/" component={Mens} />
        </Switch>
      </div>
    );
  }
}

export default Navbar;
