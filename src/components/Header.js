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
        <ul className="navbar-nav mr-auto">
          {!isAuthenticated && (
            <li className="nav-item">
              <Link to="/register" className="nav-link">
                Register
              </Link>
            </li>
          )}
          {isAuthenticated && (
            <li className="nav-item">
              <Link to="/write-blog" className="nav-link">
                Create Blog
              </Link>
            </li>
          )}
        </ul>
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
