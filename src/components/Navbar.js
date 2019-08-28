import React from "react";
import { Route, Link, Switch } from "react-router-dom";

import Mens from "./Mens";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
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
