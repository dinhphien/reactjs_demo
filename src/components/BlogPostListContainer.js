import React, { Component } from "react";
import BlogPostList from "./BlogPostList";
import { blogPostListFetch } from "../actions/action";
import { connect } from "react-redux";
import SpinnerCard from "./Spinner";
import LoadMore from "./LoadMore";

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
    const { blogPostListFetch, currentPage } = this.props;
    if (currentPage === 1) {
      blogPostListFetch();
    }
  }

  onLoadMoreClick() {
    const { currentPage, blogPostListFetch } = this.props;
    blogPostListFetch(currentPage);
  }

  render() {
    const { posts, isFetching, currentPage } = this.props;
    if (isFetching && currentPage === 1) {
      return <SpinnerCard />;
    }
    return (
      <div>
        <BlogPostList posts={posts} />
        <LoadMore
          label="Loadmore blog posts...."
          onClick={this.onLoadMoreClick.bind(this)}
          disabled={isFetching}
        />
      </div>
    );
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BlogPostListContainer);
