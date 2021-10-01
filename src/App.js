import React from "react";
import { Route, Switch } from "react-router";
import { requests } from "./agent";
import BlogPostContainer from "./components/BlogPostContainer";
import BlogPostListContainer from "./components/BlogPostListContainer";
import Header from "./components/Header";
import LoginForm from "./components/LoginForm";
import { connect } from "react-redux";
import { userProfileFetch } from "./actions/action";
import { userLogout } from "./actions/action";
import RegistrationForm from "./components/RegistrationForm";
const mapStateToProps = (state) => ({
  ...state.auth,
});

const mapDispatchToProps = {
  userProfileFetch,
  userLogout,
};
class App extends React.Component {
  constructor(props) {
    super(props);
    const token = localStorage.getItem("jwtToken");
    if (token) {
      requests.setToken(token);
    }
  }

  componentDidMount() {
    const { userProfileFetch } = this.props;
    const token = localStorage.getItem("jwtToken");
    if (token) {
      userProfileFetch();
    }
  }

  componentDidUpdate(prevProps) {
    const { token, userProfileFetch } = this.props;
    if (prevProps.token !== token && token !== null) {
      userProfileFetch();
    }
  }
  render() {
    const { isAuthenticated, userData, userLogout } = this.props;
    return (
      <div>
        <Header
          isAuthenticated={isAuthenticated}
          userData={userData}
          logOut={userLogout}
        />
        <Switch>
          <Route path="/blog-post/:id" component={BlogPostContainer} />
          <Route path="/login" component={LoginForm} />
          <Route path="/register" component={RegistrationForm} />
          <Route path="/" component={BlogPostListContainer} />
        </Switch>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
