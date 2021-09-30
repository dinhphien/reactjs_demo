import {
  USER_LOGIN_SUCCESS,
  USER_PROFILE_RECEIVED,
} from "../actions/constants";

const auth = (
  state = {
    token: null,
    isAuthenticated: false,
    userData: null,
  },
  action
) => {
  switch (action.type) {
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        token: action.token,
        isAuthenticated: true,
        userData: null,
      };
    case USER_PROFILE_RECEIVED:
      return {
        ...state,
        userData: action.data,
        isAuthenticated: true,
      };
    default:
      return state;
  }
};

export default auth;
