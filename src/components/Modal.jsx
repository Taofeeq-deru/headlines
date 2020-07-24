import React from "react";
import SearchForm from "./SearchForm";
import { Modal, Button } from "antd";
import { hide_modal, fetch_news, show_search } from "../actions";
import { connect } from "react-redux";

class ModalBox extends React.Component {
  state = {};

  handleButton = (e) => {
    this.props.hideModal();
    const topic = e.target.innerHTML;
    const q = topic.toLowerCase();
    const query = `${q} programming`;
    this.props.fetchNews(query);
  };

  render() {
    return (
      <div>
        <Modal
          className="py-5"
          visible={this.props.modal}
          closable={false}
          centered
          footer={false}>
          <h3 className="text-center">Welcome to TechNews</h3>
          <p className="text-center">Select tech topic you want to view</p>
          <div className="d-flex flex-row justify-content-around flex-wrap py-3">
            <Button
              key="hack"
              className="my-2"
              data-query="hack"
              onClick={this.handleButton}>
              Hack
            </Button>
            <Button
              key="javascript"
              className="my-2"
              data-query="javascript"
              onClick={this.handleButton}>
              Javascript
            </Button>
            <Button
              key="php"
              className="my-2"
              data-query="php"
              onClick={this.handleButton}>
              PHP
            </Button>
            <Button
              key="java"
              className="my-2"
              data-query="java"
              onClick={this.handleButton}>
              Java
            </Button>
            <Button
              key="python"
              className="my-2"
              data-query="python"
              onClick={this.handleButton}>
              Python
            </Button>
          </div>
          <div className="d-flex flex-column align-items-center my-2">
            <p className="font-weight-bold">OR</p>
            <p className="view-search" onClick={this.props.showSearch}>
              Click here to search for preferred topic
            </p>
            <SearchForm />
          </div>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { modal: state.modal };
};

const mapDispatchToProps = (dispatch) => {
  return {
    hideModal: () => dispatch(hide_modal()),
    fetchNews: (query) => dispatch(fetch_news(query)),
    showSearch: () => dispatch(show_search()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalBox);
