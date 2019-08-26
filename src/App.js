import React from "react";
import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="app-container">
        <Header></Header>
        <Navbar></Navbar>
      </div>
    );
  }
}

export default App;
