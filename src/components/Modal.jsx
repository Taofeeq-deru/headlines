import React from "react";
import { Modal, Button } from "antd";
import { hide_modal } from "../actions";
import { connect } from "react-redux";

class ModalBox extends React.Component {
  state = {};

  handleButton = () => {
    this.props.hideModal();
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
            <Button key="hacking" onClick={this.handleButton}>
              Hacking
            </Button>
            <Button key="javascript" onClick={this.handleButton}>
              Javascipt
            </Button>
            <Button key="php" onClick={this.handleButton}>
              PHP
            </Button>
            <Button key="java" onClick={this.handleButton}>
              Java
            </Button>
            <Button key="python" onClick={this.handleButton}>
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
    hideModal: () => {
      dispatch(hide_modal());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalBox);
