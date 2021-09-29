import React from "react";
import { Route, Switch } from "react-router";
import { requests } from "./agent";
import BlogPostContainer from "./components/BlogPostContainer";
import BlogPostListContainer from "./components/BlogPostListContainer";
import Header from "./components/Header";
import LoginForm from "./components/LoginForm";

class App extends React.Component {
  constructor(props) {
    super(props);
    const token = localStorage.getItem("jwtToken");
    if (token) {
      requests.setToken(token);
    }
  }
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/blog-post/:id" component={BlogPostContainer} />
          <Route path="/login" component={LoginForm} />
          <Route path="/" component={BlogPostListContainer} />
        </Switch>
      </div>
    );
  }
}

export default App;
