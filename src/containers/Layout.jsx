import React, { Component } from "react";
import ErrorAlert from "../components/ErrorAlert";
import Articles from "../components/Articles";
import ModalBox from "../components/Modal";
import PlaceHolder from "../components/PlaceHolder";
import Loading from "../components/Loading";
import { connect } from "react-redux";

class Layout extends Component {
  state = {};
  render() {
    const { news } = this.props;
    if (news.placeHolder && !news.hasError) {
      return (
        <>
          <PlaceHolder />
          <ModalBox />
        </>
      );
    } else if (news.isLoading) {
      return <Loading />;
    } else if (news.success) {
      return <Articles />;
    } else if (news.placeHolder && news.hasError) {
      return (
        <>
          <ErrorAlert />
          <PlaceHolder />
        </>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return { news: state.news };
};

export default connect(mapStateToProps)(Layout);
