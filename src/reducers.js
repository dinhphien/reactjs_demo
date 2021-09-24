// reducers.js
import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import blogPostList from "./reducers/blogPostList";

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    blogPostList,
  });
export default createRootReducer;
