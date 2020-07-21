import React, { Component } from "react";
import logo from "../logo.svg";
import "../styles/style.css";

class PlaceHolder extends Component {
  state = {};
  render() {
    return (
      <div className="Placeholder">
        <header className="Placeholder-header">
          <img src={logo} className="Placeholder-logo" alt="logo" />
          <p>
            Welcome to <code>TechNews.</code>
          </p>
        </header>
      </div>
    );
  }
}

export default PlaceHolder;
