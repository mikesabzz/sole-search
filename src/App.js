import React from "react";
import "./App.css";
import Header from "./components/Header";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="app-container">
        <Header></Header>
      </div>
    );
  }
}

export default App;
