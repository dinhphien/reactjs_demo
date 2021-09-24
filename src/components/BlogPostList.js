import React, { Component } from "react";

export default class BlogPostList extends Component {
  render() {
    const posts = this.props.posts ?? [];
    const listBlogPosts = posts.map((post) => (
      <li key={post.id}>{post.title}</li>
    ));
    return <ul>{listBlogPosts}</ul>;
  }
}
