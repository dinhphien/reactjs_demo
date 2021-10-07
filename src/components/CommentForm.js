import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { renderField } from "../form";
import { commentAdd } from "../actions/action";
import "../style/CommentForm.css";

const mapDispatchToProps = {
  commentAdd,
};

class CommentForm extends Component {
  onSubmit(values) {
    const { commentAdd, blogPostId, reset } = this.props;
    return commentAdd(values.content, blogPostId).then(() => reset());
  }

  render() {
    const { handleSubmit, submitting } = this.props;

    return (
      <form
        onSubmit={handleSubmit(this.onSubmit.bind(this))}
        className="form-comment"
      >
        <Field
          name="content"
          type="text"
          label="Type your comment here:"
          component={renderField}
        ></Field>
        <button type="submit" className="comment-submit" disabled={submitting}>
          Add
        </button>
      </form>
    );
  }
}
export default reduxForm({
  form: "CommentForm",
})(connect(null, mapDispatchToProps)(CommentForm));
