import React, { Component } from "react";
import BlogPostList from "./BlogPostList";
import { blogPostAdd, blogPostListFetch } from "../actions/action";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    ...state.blogPostList,
  };
};

const mapDispatchToProps = {
  blogPostAdd,
  blogPostListFetch,
};

class BlogPostListContainer extends Component {
  componentDidMount() {
    this.props.blogPostListFetch();
  }
  render() {
    return <BlogPostList posts={this.props.posts} />;
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BlogPostListContainer);
