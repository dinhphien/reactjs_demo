import React, { Component } from "react";
import { connect } from "react-redux";
import { blogPostFetch, blogPostUnload } from "../actions/action";
import BlogPost from "./BlogPost";
import CommentListContainer from "./CommentListContainer";
import SpinnerCard from "./Spinner";
import "../style/BlogPostContainer.css";

const mapStateToProps = (state) => ({
  ...state.blogPost,
});

const mapDispatchToProps = {
  blogPostFetch,
  blogPostUnload,
};
class BlogPostContainer extends Component {
  componentDidMount() {
    this.props.blogPostFetch(this.props.match.params.id);
  }

  componentWillUnmount() {
    this.props.blogPostUnload();
  }
  render() {
    const { post, isFetching } = this.props;
    if (isFetching) {
      return <SpinnerCard />;
    }
    return (
      <div className="blog-container">
        <BlogPost post={post} />
        {post && (
          <CommentListContainer blogPostId={this.props.match.params.id} />
        )}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogPostContainer);
