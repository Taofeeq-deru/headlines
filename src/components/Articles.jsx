import React, { Component } from "react";
import logo from "../logo.svg";
import "../styles/style.css";
import { List, Card } from "antd";

class Articles extends Component {
  state = {};
  render() {
    const { Meta } = Card;
    const data = [
      {
        title: "Title 1",
        author: "Author 1",
        date: "20-01-2020",
        article_url: "www.bbc.com",
      },
      {
        title: "Title 2",
        author: "Author 2",
        date: "20-01-2020",
        article_url: "www.bbc.com",
      },
      {
        title: "Title 3",
        author: "Author 3",
        date: "20-01-2020",
        article_url: "www.bbc.com",
      },
      {
        title: "Title 4",
        author: "Author 4",
        date: "20-01-2020",
        article_url: "www.bbc.com",
      },
    ];
    return (
      <div className="d-flex flex-column align-items-center">
        <h1 className="text-center font-weight-bold">TechNews</h1>
        <div className="d-flex flex-row justify-content-center px-5">
          <List
            grid={{
              gutter: 0,
              xs: 1,
              sm: 2,
              md: 2,
              lg: 3,
              xl: 3,
              xxl: 3,
            }}
            dataSource={data}
            className="mx-auto"
            renderItem={(item) => (
              <List.Item>
                <Card
                  style={{ width: 300 }}
                  className="rounded"
                  cover={<img alt="example" src={logo} />}>
                  <Meta
                    title={item.title}
                    description={
                      <div>
                        <div className="d-flex flex-row justify-content-between">
                          <span className="author">{item.author}</span>
                          <span className="date">{item.date}</span>
                        </div>
                        <a href={item.article_url} className="article-url">
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

export default Articles;
