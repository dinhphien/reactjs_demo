import React, { Component } from "react";
import { Link } from "react-router-dom";
import { format } from "timeago.js";
import Message from "./Message";
export default class BlogPostList extends Component {
  render() {
    const { posts } = this.props;

    if (posts === null || 0 === posts.length) {
      return <Message message="Blog post does not exist!" />;
    }

    return (
      <div>
        {posts &&
          posts.map((post) => (
            <div className="card mb-3 mt-3 shadow-sm" key={post.id}>
              <div className="card-body">
                <Link to={`/blog-post/${post.id}`}>
                  <h3>{post.title}</h3>
                </Link>
                <p className="card-text">
                  <small className="text-muted">{format(post.published)}</small>
                </p>
              </div>
            </div>
          ))}
      </div>
    );
  }
}
