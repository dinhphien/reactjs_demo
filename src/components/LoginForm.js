import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { renderField } from "../form";
import { userLoginAttempt } from "../actions/action";
import "../style/AuthenForm.css";

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
      <form
        className="form-authen"
        onSubmit={handleSubmit(this.onSubmit.bind(this))}
      >
        {error && <div className="text-error">{error}</div>}
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
        <button type="submit" className="btn-submit">
          Log in
        </button>
      </form>
    );
  }
}
export default reduxForm({
  form: "LoginForm",
})(connect(mapStateToProps, mapDispatchToProps)(LoginForm));
