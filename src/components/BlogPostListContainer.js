import React, { Component } from "react";
import BlogPostList from "./BlogPostList";
import { blogPostListFetch } from "../actions/action";
import { connect } from "react-redux";
import SpinnerCard from "./Spinner";

const mapStateToProps = (state) => {
  return {
    ...state.blogPostList,
  };
};

const mapDispatchToProps = {
  blogPostListFetch,
};

class BlogPostListContainer extends Component {
  componentDidMount() {
    this.props.blogPostListFetch();
  }
  render() {
    const { posts, isFetching } = this.props;
    if (isFetching) {
      return <SpinnerCard />;
    }
    return <BlogPostList posts={posts} />;
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BlogPostListContainer);
