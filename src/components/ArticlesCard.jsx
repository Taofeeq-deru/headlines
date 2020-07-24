import React, { Component } from "react";
import { Card } from "antd";
import logo from "../logo.svg";

class ArticlesCard extends Component {
  state = {};
  render() {
    const { Meta } = Card;
    const { item } = this.props;
    const img = item.image || logo;
    return (
      <Card
        style={{ width: 300 }}
        className="rounded mx-lg-1"
        cover={
          <div className="cover" style={{ height: 280 }}>
            <img
              alt="article"
              loading="lazy"
              style={{ height: 280, width: 300 }}
              src={img}
            />
            <div className="desc px-1" style={{ height: 280, width: 300 }}>
              <p className="font-weight-bold title text-center">{item.title}</p>
              <p className="description text-center">{item.description}</p>
            </div>
          </div>
        }>
        <Meta
          title={item.title}
          description={
            <div>
              <div className="d-flex flex-row justify-content-between">
                <span className="author">{item.source.name}</span>
                <span className="date">{item.publishedAt}</span>
              </div>
              <a href={item.url} className="article-url" target="article">
                Read article
              </a>
            </div>
          }
        />
      </Card>
    );
  }
}

export default ArticlesCard;
