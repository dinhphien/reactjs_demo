import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../style/Header.css";

export default class Header extends Component {
  renderUser() {
    const { userData, logOut } = this.props;
    if (null === userData) {
      return <i className="fas fa-spinner fa-spin" />;
    }
    return (
      <div className="user-dropdown">
        <span className="username">Hello {userData.name} !</span>
        <div className="dropdown-list">
          <p className="dropdown-item" onClick={logOut}>
            Log out
          </p>
        </div>
      </div>
    );
  }
  render() {
    const { isAuthenticated } = this.props;
    return (
      <div className="header">
        <nav className="nav-bar">
          <Link to="/" className="nav-anchor">
            Blogs
          </Link>
          <div className="nav-authen">
            {!isAuthenticated && (
              <Link to="/register" className="nav-anchor">
                Register
              </Link>
            )}
            {!isAuthenticated && (
              <Link to="/login" className="nav-anchor">
                Sign in
              </Link>
            )}
            {isAuthenticated && (
              <Link to="/write-blog" className="nav-anchor">
                Create Blog
              </Link>
            )}
          </div>
          {isAuthenticated && this.renderUser()}
        </nav>
      </div>
    );
  }
}
