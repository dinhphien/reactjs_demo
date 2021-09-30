import { USER_LOGIN_SUCCESS, USER_LOGOUT } from "./actions/constants";
import { requests } from "./agent";

export const tokenMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case USER_LOGIN_SUCCESS: {
      localStorage.setItem("jwtToken", action.token);
      requests.setToken(action.token);
      break;
    }
    case USER_LOGOUT: {
      localStorage.removeItem("jwtToken");
      requests.setToken(null);
      break;
    }
    default:
      break;
  }
  next(action);
};
