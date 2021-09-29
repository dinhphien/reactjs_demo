// reducers.js
import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import blogPostList from "./reducers/blogPostList";
import blogPost from "./reducers/blogPost";
import commentList from "./reducers/commentList";
import { reducer as formReducer } from "redux-form";
import auth from "./reducers/auth";

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    blogPostList,
    blogPost,
    commentList,
    auth,
    form: formReducer,
  });
export default createRootReducer;
