/* LOGIN */
import * as types from "./types";

const initialState = {
  login: {
    status: "INIT",
  },
  register: {
    status: "INIT",
    error: -1,
  },
  status: {
    valid: false,
    isLoggedIn: false,
    currentUser: "NONE",
  },
};

export default function authentication(state = initialState, action) {
  switch (action.type) {
    case types.LOGIN:
      console.log("login_wait");
      return {
        ...state,
        login: {
          status: "WAITING",
        },
      };
    case types.LOGIN_SUCCESS:
      console.log("login_success");
      return {
        ...state,
        login: {
          status: "SUCCESS",
        },
        status: {
          ...state.status,
          isLoggedIn: true,
          currentUser: action.userId,
        },
      };
    case types.LOGIN_FAILURE:
      console.log("login_failure");
      return {
        ...state,
        login: {
          status: "FAILURE",
        },
      };
    default:
      return state;
    /* CHECK SESSIONS */
    case types.USER_VERIFICATION:
      return {
        ...state,
        status: {
          ...state.status,
        },
      };
    case types.USER_VERIFICATION_SUCCESS:
      return {
        ...state,
        status: {
          ...state.status,
          valid: true,
          isLoggedIn: true,
          currentUser: action.userId,
        },
      };
    case types.USER_VERIFICATION_FAILURE:
      return {
        ...state,
        status: {
          ...state.status,
          valid: false,
          isLoggedIn: false,
        },
      };
    /* LOGOUT */
    case types.LOGOUT:
      return {
        ...state,
        status: {
          ...state.status,
          valid: false,
          isLoggedIn: false,
          currentUser: "NONE",
        },
      };
  }
}
