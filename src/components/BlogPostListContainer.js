import React, { Component } from "react";
import BlogPostList from "./BlogPostList";
import { blogPostAdd, blogPostList } from "../actions/action";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    ...state.blogPostList,
  };
};

const mapDispatchToProps = {
  blogPostList,
  blogPostAdd,
};

class BlogPostListContainer extends Component {
  componentDidMount() {
    this.props.blogPostList();
  }
  render() {
    return <BlogPostList posts={this.props.posts} />;
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BlogPostListContainer);
