import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { renderField } from "../form";
import { userRegister } from "../actions/action";
import "../style/AuthenForm.css";

const mapDispatchToProps = {
  userRegister,
};

class RegistrationForm extends Component {
  onSubmit(values) {
    const { userRegister, reset, history } = this.props;
    return userRegister(
      values.username,
      values.password,
      values.retypedPassword,
      values.name,
      values.email
    ).then(() => {
      reset();
      history.push("/");
    });
  }
  render() {
    const { handleSubmit, submitting } = this.props;
    return (
      <form
        onSubmit={handleSubmit(this.onSubmit.bind(this))}
        className="form-authen"
      >
        <Field
          name="username"
          label="Username:"
          type="text"
          component={renderField}
        ></Field>
        <Field
          name="password"
          label="Password:"
          type="password"
          component={renderField}
        ></Field>
        <Field
          name="retypedPassword"
          label="Re-type Password:"
          type="password"
          component={renderField}
        ></Field>
        <Field
          name="name"
          label="Full Name:"
          type="text"
          component={renderField}
        ></Field>
        <Field
          name="email"
          label="Email:"
          type="text"
          component={renderField}
        ></Field>
        <button type="submit" className="btn-submit" disabled={submitting}>
          Register
        </button>
      </form>
    );
  }
}

export default reduxForm({
  form: "RegisterForm",
})(connect(null, mapDispatchToProps)(RegistrationForm));
