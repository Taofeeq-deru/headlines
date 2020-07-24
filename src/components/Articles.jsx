import React, { Component } from "react";
import ArticlesCard from "./ArticlesCard";
import "../styles/style.css";
import { List } from "antd";
import { connect } from "react-redux";

class Articles extends Component {
  state = {};
  render() {
    const { articles } = this.props;
    return (
      <div className="d-flex flex-column align-items-center">
        <h1 className="text-center font-weight-bold">TechNews</h1>
        <p className="text-center text-muted">
          Refresh page to select new topic
        </p>
        <div className="d-flex flex-row justify-content-center px-5 px-lg-2">
          <List
            grid={{
              gutter: 0,
              xs: 1,
              sm: 2,
              md: 2,
              lg: 3,
              xl: 3,
              xxl: 4,
            }}
            dataSource={articles}
            className="mx-auto"
            renderItem={(item) => (
              <List.Item>
                <ArticlesCard item={item} />
              </List.Item>
            )}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { articles: state.news.data.articles };
};

export default connect(mapStateToProps, null)(Articles);
