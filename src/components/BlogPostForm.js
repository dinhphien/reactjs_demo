import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { renderField } from "../form";
import { blogPostAdd } from "../actions/action";

const mapDispatchToProps = {
  blogPostAdd,
};
class BlogPostForm extends Component {
  onSubmit(values) {
    const { blogPostAdd, reset, history } = this.props;
    return blogPostAdd(values.title, values.content).then(() => {
      reset();
      history.push("/");
    });
  }
  render() {
    const { handleSubmit, submitting } = this.props;
    return (
      <div className="card mt-3 mb-6 shadow-sm">
        <div className="card-body">
          <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
            <Field
              name="title"
              label="Title:"
              type="text"
              component={renderField}
            ></Field>
            <Field
              name="content"
              label="Content:"
              type="textarea"
              component={renderField}
            ></Field>
            <button
              type="submit"
              className="btn btn-primary btn-big btn-block"
              disabled={submitting}
            >
              Publish Now
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default reduxForm({
  form: "BlogPostForm",
})(connect(null, mapDispatchToProps)(BlogPostForm));
