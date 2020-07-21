import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "antd/dist/antd.css";
import ModalBox from "./components/Modal";
import { fetch_news } from "./actions";
import { connect } from "react-redux";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <ModalBox />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer">
            Learn React
          </a>
          <button className="btn btn-dark" onClick={this.props.fetchNews}>
            fetch news
          </button>
        </header>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchNews: () => dispatch(fetch_news),
  };
};

export default connect(null, mapDispatchToProps)(App);
