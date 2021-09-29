// reducers.js
import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import blogPostList from "./reducers/blogPostList";
import blogPost from "./reducers/blogPost";
import commentList from "./reducers/commentList";

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    blogPostList,
    blogPost,
    commentList,
  });
export default createRootReducer;
