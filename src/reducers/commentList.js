import {
  COMMENT_ADDED,
  COMMENT_LIST_ERROR,
  COMMENT_LIST_RECEIVED,
  COMMENT_LIST_REQUEST,
  COMMENT_LIST_UNLOAD,
} from "../actions/constants";

const commentList = (
  state = {
    commentList: null,
    isFetching: false,
  },
  action
) => {
  switch (action.type) {
    case COMMENT_LIST_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case COMMENT_LIST_RECEIVED:
      return {
        ...state,
        commentList: action.data["data"],
        isFetching: false,
      };
    case COMMENT_LIST_ERROR:
      return {
        ...state,
        commentList: null,
        isFetching: false,
        error: action.error.message,
      };
    case COMMENT_LIST_UNLOAD:
      return {
        ...state,
        commentList: null,
        isFetching: false,
      };
    case COMMENT_ADDED:
      console.log(action.comment);
      return {
        ...state,
        commentList: [...state.commentList, action.comment],
      };
    default:
      return state;
  }
};
export default commentList;
