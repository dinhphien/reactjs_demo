import React, { Component } from "react";
import { format } from "timeago.js";
import Message from "./Message";

export default class BlogPost extends Component {
  render() {
    const { post } = this.props;

    if (post === null) {
      return <Message message="Blog post does not exist!" />;
    }

    return (
      <div className="card mb-3 mt-3 shadow-sm">
        <div className="card-body">
          <h2>{post.title}</h2>
          <p className="card-text">{post.content}</p>
          <p className="card-text">
            <small className="text-muted">{format(post.published)}</small>
          </p>
        </div>
      </div>
    );
  }
}
