import React, { Component } from "react";
import Message from "./Message";
import { format } from "timeago.js";
import "../style/CommentList.css";
export default class CommentList extends Component {
  render() {
    const { commentList } = this.props;

    if (commentList === null || 0 === commentList.length) {
      return <Message message="No comments yet!" />;
    }
    return (
      <div className="comment-list">
        {commentList.map((comment) => (
          <div className="comment-item" key={comment.id}>
            <p className="comment-author">{comment.author.name}</p>
            <p className="comment-content">{comment.content}</p>
            <p className="comment-time">{format(comment.published)}</p>
          </div>
        ))}
      </div>
    );
  }
}
