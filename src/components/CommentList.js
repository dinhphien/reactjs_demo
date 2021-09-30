import React, { Component } from "react";
import Message from "./Message";
import { format } from "timeago.js";
export default class CommentList extends Component {
  render() {
    const { commentList } = this.props;

    if (commentList === null || 0 === commentList.length) {
      return <Message message="No comments yet!" />;
    }
    return (
      <div className="card mb-3 mt-3 shadow-sm">
        {commentList.map((comment) => (
          <div className="card-body border-bottom" key={comment.id}>
            <p className="card-text mb-0">{comment.content}</p>
            <p className="card-text">
              <small className="text-muted">
                {format(comment.published)} by &nbsp;
                {comment.author.name}
              </small>
            </p>
          </div>
        ))}
      </div>
    );
  }
}
