import { requests } from "../agent";
import {
  BLOG_POST_LIST_REQUEST,
  BLOG_POST_LIST_RECEIVED,
  BLOG_POST_LIST_ERROR,
  BLOG_POST_REQUEST,
  BLOG_POST_RECEIVED,
  BLOG_POST_ERROR,
  BLOG_POST_UNLOAD,
  COMMENT_LIST_REQUEST,
  COMMENT_LIST_RECEIVED,
  COMMENT_LIST_ERROR,
  COMMENT_LIST_UNLOAD,
  USER_LOGIN_SUCCESS,
  USER_PROFILE_REQUEST,
  USER_PROFILE_RECEIVED,
  USER_PROFILE_ERROR,
  COMMENT_ADDED,
  USER_LOGOUT,
  BLOG_POST_ADDED,
} from "./constants";
import { SubmissionError } from "redux-form";

export const blogPostListRequest = () => ({
  type: BLOG_POST_LIST_REQUEST,
});

export const blogPostListReceived = (data) => ({
  type: BLOG_POST_LIST_RECEIVED,
  data,
});

export const blogPostListError = (error) => ({
  type: BLOG_POST_LIST_ERROR,
  error,
});

export const blogPostListFetch = (page = 1) => {
  return (dispatch) => {
    dispatch(blogPostListRequest());
    return requests
      .get(`/blog?page=${page}`)
      .then((response) => dispatch(blogPostListReceived(response)))
      .catch((error) => dispatch(blogPostListError(error)));
  };
};

export const blogPostRequest = () => ({
  type: BLOG_POST_REQUEST,
});

export const blogPostReceived = (data) => ({
  type: BLOG_POST_RECEIVED,
  data,
});

export const blogPostError = (error) => ({
  type: BLOG_POST_ERROR,
  error,
});

export const blogPostUnload = () => ({
  type: BLOG_POST_UNLOAD,
});

export const blogPostFetch = (id) => {
  return (dispatch) => {
    dispatch(blogPostRequest());
    return requests
      .get(`/blog/${id}`)
      .then((response) => dispatch(blogPostReceived(response)))
      .catch((error) => dispatch(blogPostError(error)));
  };
};

export const commentListRequest = () => ({
  type: COMMENT_LIST_REQUEST,
});

export const commentListReceived = (data) => ({
  type: COMMENT_LIST_RECEIVED,
  data,
});

export const commentListError = (error) => ({
  type: COMMENT_LIST_ERROR,
  error,
});

export const commentListUnload = () => ({
  type: COMMENT_LIST_UNLOAD,
});

export const commentListFetch = (id) => {
  return (dispatch) => {
    dispatch(commentListRequest());
    return requests
      .get(`/blog/${id}/comment`)
      .then((response) => dispatch(commentListReceived(response)))
      .catch((error) => dispatch(commentListError(error)));
  };
};
export const userLoginSuccess = (token) => {
  return { type: USER_LOGIN_SUCCESS, token };
};
export const userLoginAttempt = (username, password) => {
  return (dispatch) => {
    return requests
      .post("/login_check", { username, password }, false)
      .then((response) => dispatch(userLoginSuccess(response.token)))
      .catch((error) => {
        throw new SubmissionError({
          _error: "Username or password is invalid",
        });
      });
  };
};

export const userProfileRequest = () => ({
  type: USER_PROFILE_REQUEST,
});

export const userProfileReceived = (data) => ({
  type: USER_PROFILE_RECEIVED,
  data,
});

export const userProfileError = (error) => ({
  type: USER_PROFILE_ERROR,
  error,
});

export const userProfileFetch = () => {
  return (dispatch) => {
    userProfileRequest();
    return requests
      .get("/me", true)
      .then((response) => dispatch(userProfileReceived(response.data)))
      .catch((error) => dispatch(userProfileError(error)));
  };
};

export const commentAdded = (comment) => ({
  type: COMMENT_ADDED,
  comment,
});

export const commentAdd = (comment, blogPostId) => {
  return (dispatch) => {
    return requests
      .post(`/blog/${blogPostId}/comment`, {
        content: comment,
      })
      .then((response) => dispatch(commentAdded(response.data)))
      .catch((error) => {
        throw new SubmissionError(error.response.body.message);
      });
  };
};

export const userLogout = () => ({
  type: USER_LOGOUT,
});

export const userRegister = (
  username,
  password,
  retypedPassword,
  name,
  email
) => {
  return (dispatch) => {
    return requests
      .post(
        "/register",
        { username, password, retypedPassword, name, email },
        false
      )
      .catch((error) => {
        throw new SubmissionError(error.response.body.message);
      });
  };
};

export const blogPostAdded = (data) => ({
  type: BLOG_POST_ADDED,
  data,
});

export const blogPostAdd = (title, content) => {
  return (dispatch) => {
    return requests
      .post(
        "/blog/create",
        {
          title,
          content,
          slug: title && title.replace(/ /g, "-").toLowerCase(),
        },
        true
      )
      .then((response) => dispatch(blogPostAdded(response)))
      .catch((error) => {
        throw new SubmissionError(error.response.body.message);
      });
  };
};
