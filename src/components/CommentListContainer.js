import React, { Component } from "react";
import { connect } from "react-redux";
import { commentListFetch, commentListUnload } from "../actions/action";
import SpinnerCard from "./Spinner";
import CommentList from "./CommentList";
import CommentForm from "./CommentForm";
const mapStateToProps = (state) => ({
  ...state.commentList,
  isAuthenticated: state.auth.isAuthenticated,
});

const mapDispatchToProps = {
  commentListFetch,
  commentListUnload,
};

class CommentListContainer extends Component {
  componentDidMount() {
    this.props.commentListFetch(this.props.blogPostId);
  }

  componentWillUnmount() {
    this.props.commentListUnload();
  }
  render() {
    const { commentList, isFetching, isAuthenticated, blogPostId } = this.props;
    if (isFetching) {
      return <SpinnerCard />;
    }
    return (
      <div>
        <CommentList commentList={commentList} />
        {isAuthenticated && <CommentForm blogPostId={blogPostId} />}
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentListContainer);
