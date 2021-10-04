import {
  BLOG_POST_ADDED,
  BLOG_POST_LIST_ADD,
  BLOG_POST_LIST_ERROR,
  BLOG_POST_LIST_RECEIVED,
  BLOG_POST_LIST_REQUEST,
} from "../actions/constants";

const blogPostList = (
  state = {
    posts: null,
    isFetching: false,
    currentPage: 1,
  },
  action
) => {
  switch (action.type) {
    case BLOG_POST_LIST_REQUEST:
      state = {
        ...state,
        isFetching: true,
        posts: state.currentPage === 1 ? null : state.posts,
      };
      return state;
    case BLOG_POST_LIST_RECEIVED:
      const posts = state.posts
        ? state.posts.concat(action.data["data"])
        : action.data["data"];
      const currentPage =
        action.data["data"].length > 0
          ? state.currentPage + 1
          : state.currentPage;
      state = {
        ...state,
        posts: posts,
        isFetching: false,
        currentPage: currentPage,
      };
      return state;
    case BLOG_POST_LIST_ERROR:
      state = {
        ...state,
        posts: null,
        isFetching: false,
        error: action.error.message,
        currentPage: 1,
      };
      return state;
    case BLOG_POST_LIST_ADD:
      state = {
        ...state,
        posts: state.posts ? state.posts.concat(action.data) : state.posts,
      };
      return state;
    case BLOG_POST_ADDED:
      return {
        ...state,
        currentPage: 1,
      };
    default:
      return state;
  }
};
export default blogPostList;
