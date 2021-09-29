import React, { Component } from "react";
import { connect } from "react-redux";
import { commentListFetch, commentListUnload } from "../actions/action";
import SpinnerCard from "./Spinner";
import CommentList from "./CommentList";
const mapStateToProps = (state) => ({
  ...state.commentList,
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
    const { commentList, isFetching } = this.props;
    if (isFetching) {
      return <SpinnerCard />;
    }
    return <CommentList commentList={commentList} />;
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentListContainer);
