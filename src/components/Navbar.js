import React from "react";
import { Route, Link, Switch } from "react-router-dom";

import Home from "./Home";
import Mens from "./Mens";

class Navbar extends React.Component {
  render() {
    return (
      <div>
        <div className="navbar">
          <Link>Womens</Link>
          <Link to="/mens/">Mens</Link>
          <Link>Kids</Link> {/*DEADLINK*/}
          <Link>Brands</Link> {/*DEADLINK*/}
          <Link>Sale</Link> {/*DEADLINK*/}
        </div>
        <Switch>
          <Route path="/mens/" component={Mens} />
        </Switch>
      </div>
    );
  }
}

export default Navbar;
