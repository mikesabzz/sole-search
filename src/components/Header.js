import React from "react";
import Navbar from "../components/Navbar";
import Home from "../components/Home";
import { Route, Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <Link to="/">Home</Link>
      Header
      <Navbar></Navbar>
      <Route exact path="/" component={Home} />
    </div>
  );
}

export default Header;
