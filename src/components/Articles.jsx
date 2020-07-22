import React, { Component } from "react";
import "../styles/style.css";
import { List, Card } from "antd";
import { connect } from "react-redux";

class Articles extends Component {
  state = {};
  render() {
    const { Meta } = Card;
    const { articles } = this.props;
    return (
      <div className="d-flex flex-column align-items-center">
        <h1 className="text-center font-weight-bold">TechNews</h1>
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
                <Card
                  style={{ width: 300 }}
                  className="rounded mx-lg-1"
                  cover={
                    <img
                      alt="article"
                      loading="lazy"
                      style={{ height: 280 }}
                      src={item.image}
                    />
                  }>
                  <Meta
                    title={item.title}
                    description={
                      <div>
                        <div className="d-flex flex-row justify-content-between">
                          <span className="author">{item.source.name}</span>
                          <span className="date">{item.publishedAt}</span>
                        </div>
                        <a
                          href={item.url}
                          className="article-url"
                          target="article">
                          Read article
                        </a>
                      </div>
                    }
                  />
                </Card>
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
