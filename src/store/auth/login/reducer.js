import { LOGIN_USER, LOGIN_SUCCESS, LOGOUT_USER, LOGOUT_USER_SUCCESS, API_ERROR } from "./actionTypes";

const initialState = {
  error: "",
  loading: false,
  user: null,
};

const login = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    case LOGOUT_USER:
      return {};
    case LOGOUT_USER_SUCCESS:
      return { ...state };
    case API_ERROR:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};

export default login;
