import React from "react";
import { Modal, Button } from "antd";
import { hide_modal, fetch_news } from "../actions";
import { connect } from "react-redux";

class ModalBox extends React.Component {
  state = {};

  handleButton = (e) => {
    this.props.hideModal();
    const topic = e.target.innerHTML;
    const q = topic.toLowerCase();
    console.log(q);
    this.props.fetchNews();
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
            <Button key="hack" data-query="hack" onClick={this.handleButton}>
              Hack
            </Button>
            <Button
              key="javascript"
              data-query="javascript"
              onClick={this.handleButton}>
              Javascipt
            </Button>
            <Button key="php" data-query="php" onClick={this.handleButton}>
              PHP
            </Button>
            <Button key="java" data-query="java" onClick={this.handleButton}>
              Java
            </Button>
            <Button
              key="python"
              data-query="python"
              onClick={this.handleButton}>
              Python
            </Button>
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
    fetchNews: () => dispatch(fetch_news),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalBox);
