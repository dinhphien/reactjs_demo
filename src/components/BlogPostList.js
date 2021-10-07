import React, { Component } from "react";
import { Link } from "react-router-dom";
import { format } from "timeago.js";
import Message from "./Message";
import "../style/BlogPostList.css";
export default class BlogPostList extends Component {
  render() {
    const { posts } = this.props;

    if (posts === null || 0 === posts.length) {
      return <Message message="Blog post does not exist!" />;
    }

    return (
      <div className="blog-list">
        {posts &&
          posts.map((post) => (
            <div className="blog-card" key={post.id}>
              <div className="blog-body">
                <Link to={`/blog-post/${post.id}`} className="blog-link">
                  <h3>{post.title}</h3>
                </Link>
              </div>
              <div className="blog-footer">
                <p className="blog-author">
                  {format(post.published)} by&nbsp;
                  {post.author.name}
                </p>
              </div>
            </div>
          ))}
      </div>
    );
  }
}
