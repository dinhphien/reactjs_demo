import React, { Component } from "react";
import { format } from "timeago.js";
import Message from "./Message";
import "../style/BlogDetail.css";

export default class BlogPost extends Component {
  render() {
    const { post } = this.props;

    if (post === null) {
      return <Message message="Blog post does not exist!" />;
    }

    return (
      <div className="blog-detail">
        <h2 className="blog-title">{post.title}</h2>
        <p className="blog-content">{post.content}</p>
        <p className="detail-author">
          {format(post.published)} by&nbsp;
          {post.author.name}
        </p>
      </div>
    );
  }
}
