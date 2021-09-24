import {
  BLOG_POST_LIST_ADD,
  BLOG_POST_LIST_ERROR,
  BLOG_POST_LIST_RECEIVED,
  BLOG_POST_LIST_REQUEST,
} from "../actions/action";

const blogPostList = (
  state = {
    posts: null,
    isFetching: false,
  },
  action
) => {
  switch (action.type) {
    case BLOG_POST_LIST_REQUEST:
      state = {
        ...state,
        isFetching: true,
      };
      return state;
    case BLOG_POST_LIST_RECEIVED:
      state = {
        ...state,
        posts: action.data["data"],
        isFetching: false,
      };
      return state;
    case BLOG_POST_LIST_ERROR:
      state = {
        ...state,
        posts: null,
        isFetching: false,
        error: action.error.message,
      };
      return state;
    case BLOG_POST_LIST_ADD:
      state = {
        ...state,
        posts: state.posts ? state.posts.concat(action.data) : state.posts,
      };
      return state;
    default:
      return state;
  }
};
export default blogPostList;
