import React from "react";
import { Route, Switch } from "react-router";
import BlogPostContainer from "./components/BlogPostContainer";
import BlogPostListContainer from "./components/BlogPostListContainer";
import Header from "./components/Header";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/blog-post/:id" component={BlogPostContainer} />
          <Route path="/" component={BlogPostListContainer} />
        </Switch>
      </div>
    );
  }
}

export default App;
