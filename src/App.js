import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="app-container">
        <Header></Header>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
