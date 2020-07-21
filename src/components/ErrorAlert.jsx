import React, { Component } from "react";
import { Modal, Space } from "antd";
import { connect } from "react-redux";

class ErrorAlert extends Component {
  state = {};
  error = () => {
    Modal.error({
      title: "Error",
      content: `${this.props.message}. Please try again later`,
    });
  };

  render() {
    return <Space>{this.error()}</Space>;
  }
}

const mapStateToProps = (state) => {
  return { message: state.news.errMessage };
};

export default connect(mapStateToProps, null)(ErrorAlert);
