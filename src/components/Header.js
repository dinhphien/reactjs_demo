import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Header extends Component {
  renderUser() {
    const { userData, logOut } = this.props;
    if (null === userData) {
      return <i className="fas fa-spinner fa-spin" />;
    }
    return (
      <span>
        Hello {userData.name},&nbsp;
        <button className="btn btn-link btn-sm" onClick={logOut}>
          Logout
        </button>
      </span>
    );
  }
  render() {
    const { isAuthenticated } = this.props;
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/" className="navbar-brand">
          Blogs
        </Link>
        <span className="navbar-text">
          {isAuthenticated ? (
            this.renderUser()
          ) : (
            <Link to="/login">Sign in</Link>
          )}
        </span>
      </nav>
    );
  }
}
