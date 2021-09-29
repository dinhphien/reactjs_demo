import { USER_LOGIN_SUCCESS } from "../actions/constants";

const auth = (
  state = {
    token: null,
  },
  action
) => {
  switch (action.type) {
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        token: action.token,
      };
    default:
      return state;
  }
};

export default auth;
