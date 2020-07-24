import React, { Component } from "react";
import logo from "../logo.svg";
import "../styles/style.css";
import { connect } from "react-redux";

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
          {this.props.hasError ? (
            <p style={{ fontSize: "0.8em" }}>Please refresh page</p>
          ) : (
            <p></p>
          )}
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { hasError: state.news.hasError };
};

export default connect(mapStateToProps, null)(PlaceHolder);
