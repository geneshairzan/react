import React, { Component } from "react";
import logo from "assets/logo.svg";
import "assets/App.css";

class App2 extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2> Welcome to React </h2>
        </div>
      </div>
    );
  }
}
export default App2;
