import React, { Component } from "react";

class Loading extends Component {
  render() {
    return (
      <>
        <div
          className="d-flex flex-column justify-content-center align-items-center"
          style={{ height: "100vh" }}>
          <div
            className="spinner-grow text-dark"
            style={{ width: "3rem", height: "3rem" }}
            role="status">
            <span className="sr-only">Loading...</span>
          </div>
          <h3 className="text-dark font-weight-bold">TechNews</h3>
        </div>
      </>
    );
  }
}

export default Loading;
