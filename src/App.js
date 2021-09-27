import React from "react";
import BlogPostListContainer from "./components/BlogPostListContainer";
import Header from "./components/Header";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <BlogPostListContainer />;
      </div>
    );
  }
}

export default App;
