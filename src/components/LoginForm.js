import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { renderField } from "../form";
import { userLoginAttempt } from "../actions/action";

const mapStateToProps = (state) => ({
  ...state.auth,
});

const mapDispatchToProps = {
  userLoginAttempt,
};
class LoginForm extends Component {
  componentDidUpdate(prevProps) {
    if (prevProps.token !== this.props.token) {
      this.props.history.push("/");
    }
  }
  onSubmit(values) {
    return this.props.userLoginAttempt(values.username, values.password);
  }
  render() {
    const { handleSubmit, error } = this.props;
    return (
      <div className="text-center">
        {error && <div className="alert alert-danger">{error}</div>}
        <form
          className="mt-4"
          onSubmit={handleSubmit(this.onSubmit.bind(this))}
        >
          <Field
            name="username"
            label="Username"
            type="text"
            component={renderField}
          ></Field>
          <Field
            name="password"
            label="Password"
            type="password"
            component={renderField}
          ></Field>
          <button type="submit" className="btn btn-primary btn-big btn-block">
            Log in
          </button>
        </form>
      </div>
    );
  }
}
export default reduxForm({
  form: "LoginForm",
})(connect(mapStateToProps, mapDispatchToProps)(LoginForm));
